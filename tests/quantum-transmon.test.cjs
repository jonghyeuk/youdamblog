const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../public/physics/quantum-transmon.js');

const nominal = { junctionAreaUm2: 0.12, criticalCurrentDensityAcm2: 80, totalCapacitanceFf: 75, temperatureK: 0.02 };

test('transmon model returns traceable physical quantities', () => {
  const result = model.simulate(nominal);
  assert.equal(result.contractId, 'semifab.physics.quantum.transmon_reduced.v1');
  assert.ok(result.criticalCurrentNa > 0);
  assert.ok(result.frequencyGhz > 1 && result.frequencyGhz < 20);
  assert.ok(result.anharmonicityMhz < 0);
  assert.ok(result.ejEcRatio >= 20);
  assert.equal(result.regime, 'TRANSMON');
});

test('frequency rises with junction area at fixed Jc and capacitance', () => {
  const small = model.simulate({ ...nominal, junctionAreaUm2: 0.08 });
  const large = model.simulate({ ...nominal, junctionAreaUm2: 0.16 });
  assert.ok(large.frequencyGhz > small.frequencyGhz);
});

test('fabrication sensitivity exposes area and Jc spans', () => {
  const result = model.sensitivity(nominal, 3);
  assert.ok(result.areaSpanMhz > 0);
  assert.ok(result.jcSpanMhz > 0);
  assert.equal(result.variationPercent, 3);
});

test('synthetic wafer is deterministic and unique', () => {
  const a = model.syntheticWafer({ count: 96, seed: 42 });
  const b = model.syntheticWafer({ count: 96, seed: 42 });
  assert.deepEqual(a, b);
  assert.equal(a.length, 96);
  assert.equal(new Set(a.map(row => row.id)).size, 96);
});

test('contract rejects unsupported operating points', () => {
  assert.throws(() => model.simulate({ ...nominal, temperatureK: 0.5 }), RangeError);
});
