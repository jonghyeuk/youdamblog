const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../public/physics/hbm-thermal.js');

test('HBM model returns a finite, traceable physical result', () => {
  const result = model.simulate({ pitchUm: 40, timThicknessUm: 20, powerW: 55, stackLayers: 8 });
  assert.ok(Number.isFinite(result.peakTempC));
  assert.ok(result.peakTempC > 25 && result.peakTempC < 150);
  assert.ok(result.totalResistanceKW > 0);
  assert.equal(result.contractId, 'semifab.physics.hbm_thermal.v1');
  assert.equal(Object.values(result.componentsKW).every(v => v >= 0), true);
});

test('thicker TIM increases peak temperature', () => {
  const thin = model.simulate({ pitchUm: 40, timThicknessUm: 10, powerW: 55, stackLayers: 8 });
  const thick = model.simulate({ pitchUm: 40, timThicknessUm: 35, powerW: 55, stackLayers: 8 });
  assert.ok(thick.peakTempC > thin.peakTempC);
});

test('synthetic HBM dataset is deterministic and physically bounded', () => {
  const a = model.syntheticDataset({ count: 128, seed: 42 });
  const b = model.syntheticDataset({ count: 128, seed: 42 });
  assert.deepEqual(a, b);
  assert.equal(a.length, 128);
  assert.equal(a.every(row => row.peakTempC > 25 && row.peakTempC < 180), true);
  assert.ok(new Set(a.map(row => row.id)).size === a.length);
});

test('validity gate rejects unsupported design points', () => {
  assert.throws(() => model.simulate({ pitchUm: 10, timThicknessUm: 20, powerW: 55, stackLayers: 8 }), RangeError);
});

test('replaceable k(T) function changes the TIM contribution', () => {
  const constant = model.simulate({ pitchUm: 40, timThicknessUm: 20, powerW: 55, stackLayers: 8 });
  const temperatureDependent = model.simulate({
    pitchUm: 40,
    timThicknessUm: 20,
    powerW: 55,
    stackLayers: 8,
    kTimModel: { type: 'linear', referenceC: 25, valueAtReference: 3.2, slopePerC: -0.008 }
  });
  assert.equal(temperatureDependent.activeFunctions.timConductivity, 'linear');
  assert.notEqual(temperatureDependent.componentsKW.tim, constant.componentsKW.tim);
  assert.ok(temperatureDependent.peakTempC > constant.peakTempC);
});
