#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const required = ['manifest.json', 'model.json', 'quantities.json', 'validity.json', 'evidence.json', 'test-vectors.json'];
const allowedUnits = new Set(['1', 'K', 'degC', 'm', 'um', 'nm', 's', 'Pa', 'W', 'W/m2', 'W/(m*K)', 'A', 'V', 'Hz', 'J', 'F', 'Ohm']);

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (error) { throw new Error(`${path.basename(file)}: ${error.message}`); }
}

function validate(directory) {
  const root = path.resolve(directory);
  const errors = [], warnings = [];
  for (const file of required) if (!fs.existsSync(path.join(root, file))) errors.push(`missing ${file}`);
  if (errors.length) return { ok: false, errors, warnings };
  const manifest = readJson(path.join(root, 'manifest.json'));
  const quantities = readJson(path.join(root, 'quantities.json'));
  const validity = readJson(path.join(root, 'validity.json'));
  const evidence = readJson(path.join(root, 'evidence.json'));
  const tests = readJson(path.join(root, 'test-vectors.json'));
  if (manifest.schema_version !== '0.1') errors.push('schema_version must be 0.1');
  if (!/^[a-z0-9._-]+$/.test(manifest.object_id || '')) errors.push('object_id format is invalid');
  if (manifest.visibility !== 'private') warnings.push('external models should normally start private');
  if (!['UNVERIFIED','REPORTED','BENCHMARKED','CALIBRATED','VALIDATED'].includes(manifest.scientific_status)) errors.push('scientific_status is invalid');
  for (const quantity of [...(quantities.inputs || []), ...(quantities.outputs || [])]) {
    if (!quantity.name || !quantity.unit) errors.push('every quantity needs name and unit');
    else if (!allowedUnits.has(quantity.unit)) warnings.push(`unit needs canonical mapping: ${quantity.unit}`);
  }
  if (!(validity.domains || []).length) warnings.push('no validity domain declared');
  if (!(evidence.evidence || []).length) warnings.push('no evidence declared; status should be UNVERIFIED');
  if (!(tests.vectors || []).length) errors.push('at least one test vector is required');
  if (manifest.scientific_status === 'VALIDATED') warnings.push('VALIDATED requires independent evidence review inside SemiFab');
  return { ok: errors.length === 0, errors, warnings, objectId: manifest.object_id };
}

function init(directory) {
  const target = path.resolve(directory);
  if (fs.existsSync(target)) throw new Error(`target already exists: ${target}`);
  fs.mkdirSync(target, { recursive: true });
  const template = {
    'manifest.json': { schema_version:'0.1', object_id:'user.your-name.model-name', version:'0.1.0', visibility:'private', model_type:'parameterized_model', scientific_status:'UNVERIFIED', title:'New private model' },
    'model.json': { governing_relation:null, implementation:{kind:'describe_me'}, parameters:{}, open_questions:[] },
    'quantities.json': { inputs:[], outputs:[] },
    'validity.json': { domains:[], extrapolation:'forbidden_by_default' },
    'evidence.json': { claims:[], evidence:[] },
    'test-vectors.json': { vectors:[] }
  };
  for (const [file, content] of Object.entries(template)) fs.writeFileSync(path.join(target, file), JSON.stringify(content, null, 2) + '\n');
  console.log(`Created SemiFab model template: ${target}`);
}

function pack(directory, output) {
  const result = validate(directory);
  if (!result.ok) throw new Error(`validation failed: ${result.errors.join('; ')}`);
  const files = {};
  for (const file of required) files[file] = readJson(path.join(path.resolve(directory), file));
  const payload = { bundle_type:'semifab.model_submission', schema_version:'0.1', created_at:new Date().toISOString(), object_id:result.objectId, files };
  const canonical = JSON.stringify(payload);
  payload.sha256 = crypto.createHash('sha256').update(canonical).digest('hex');
  fs.writeFileSync(path.resolve(output), JSON.stringify(payload, null, 2) + '\n');
  console.log(`Packed ${payload.object_id} → ${path.resolve(output)}`);
}

function help() {
  console.log('SemiFab Model Packager v0.1');
  console.log('  semifab-packager init <directory>');
  console.log('  semifab-packager validate <directory>');
  console.log('  semifab-packager pack <directory> <output.sfbundle>');
}

try {
  const [, , command, ...args] = process.argv;
  if (command === 'init' && args[0]) init(args[0]);
  else if (command === 'validate' && args[0]) {
    const result = validate(args[0]);
    console.log(JSON.stringify(result, null, 2));
    if (!result.ok) process.exitCode = 1;
  } else if (command === 'pack' && args[0] && args[1]) pack(args[0], args[1]);
  else help();
} catch (error) {
  console.error(`ERROR: ${error.message}`);
  process.exitCode = 1;
}
