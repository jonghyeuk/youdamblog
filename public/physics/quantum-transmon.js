(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.SemiFabPhysics = root.SemiFabPhysics || {};
  root.SemiFabPhysics.quantumTransmon = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const E_CHARGE = 1.602176634e-19;
  const PLANCK = 6.62607015e-34;
  const HBAR = PLANCK / (2 * Math.PI);

  const CONTRACT = Object.freeze({
    id: 'semifab.physics.quantum.transmon_reduced.v1',
    track: 'superconducting',
    fidelity: 'reduced_physics',
    assumptions: [
      'single effective Josephson junction',
      'transmon limit EJ/EC greater than 20',
      'lumped total capacitance',
      'fabrication variation represented by area and Jc perturbations'
    ],
    validity: {
      junctionAreaUm2: [0.01, 0.5],
      criticalCurrentDensityAcm2: [20, 300],
      totalCapacitanceFf: [30, 200],
      temperatureK: [0.005, 0.12]
    },
    outputs: ['criticalCurrentNa', 'josephsonEnergyGhz', 'chargingEnergyGhz', 'frequencyGhz', 'anharmonicityMhz', 'ejEcRatio']
  });

  function inRange(name, value) {
    const bounds = CONTRACT.validity[name];
    if (!Number.isFinite(value) || value < bounds[0] || value > bounds[1]) {
      throw new RangeError(`${name} must be within ${bounds[0]}..${bounds[1]}`);
    }
  }

  function simulate(input) {
    const junctionAreaUm2 = Number(input.junctionAreaUm2);
    const criticalCurrentDensityAcm2 = Number(input.criticalCurrentDensityAcm2);
    const totalCapacitanceFf = Number(input.totalCapacitanceFf ?? 75);
    const temperatureK = Number(input.temperatureK ?? 0.02);
    inRange('junctionAreaUm2', junctionAreaUm2);
    inRange('criticalCurrentDensityAcm2', criticalCurrentDensityAcm2);
    inRange('totalCapacitanceFf', totalCapacitanceFf);
    inRange('temperatureK', temperatureK);

    const criticalCurrentA = criticalCurrentDensityAcm2 * junctionAreaUm2 * 1e-8;
    const josephsonEnergyJ = HBAR * criticalCurrentA / (2 * E_CHARGE);
    const chargingEnergyJ = E_CHARGE ** 2 / (2 * totalCapacitanceFf * 1e-15);
    const josephsonEnergyGhz = josephsonEnergyJ / PLANCK / 1e9;
    const chargingEnergyGhz = chargingEnergyJ / PLANCK / 1e9;
    const frequencyGhz = Math.sqrt(8 * josephsonEnergyGhz * chargingEnergyGhz) - chargingEnergyGhz;
    const anharmonicityMhz = -chargingEnergyGhz * 1000;
    const ejEcRatio = josephsonEnergyGhz / chargingEnergyGhz;
    const thermalEnergyGhz = 1.380649e-23 * temperatureK / PLANCK / 1e9;

    return {
      criticalCurrentNa: criticalCurrentA * 1e9,
      josephsonEnergyGhz,
      chargingEnergyGhz,
      frequencyGhz,
      anharmonicityMhz,
      ejEcRatio,
      thermalEnergyGhz,
      regime: ejEcRatio >= 20 ? 'TRANSMON' : 'OUTSIDE_TRANSMON_LIMIT',
      contractId: CONTRACT.id,
      evidence: 'BENCHMARKED_RELATIONS',
      valid: ejEcRatio >= 20
    };
  }

  function sensitivity(input, variationPercent = 3) {
    const fraction = Number(variationPercent) / 100;
    const nominal = simulate(input);
    const areaLow = simulate({ ...input, junctionAreaUm2: Number(input.junctionAreaUm2) * (1 - fraction) });
    const areaHigh = simulate({ ...input, junctionAreaUm2: Number(input.junctionAreaUm2) * (1 + fraction) });
    const jcLow = simulate({ ...input, criticalCurrentDensityAcm2: Number(input.criticalCurrentDensityAcm2) * (1 - fraction) });
    const jcHigh = simulate({ ...input, criticalCurrentDensityAcm2: Number(input.criticalCurrentDensityAcm2) * (1 + fraction) });
    return {
      nominalFrequencyGhz: nominal.frequencyGhz,
      areaSpanMhz: (areaHigh.frequencyGhz - areaLow.frequencyGhz) * 1000,
      jcSpanMhz: (jcHigh.frequencyGhz - jcLow.frequencyGhz) * 1000,
      variationPercent
    };
  }

  function syntheticWafer(options = {}) {
    const count = Math.max(12, Math.min(500, Number(options.count ?? 96)));
    const seed = Number(options.seed ?? 20260810) >>> 0;
    const nominal = {
      junctionAreaUm2: Number(options.junctionAreaUm2 ?? 0.12),
      criticalCurrentDensityAcm2: Number(options.criticalCurrentDensityAcm2 ?? 80),
      totalCapacitanceFf: Number(options.totalCapacitanceFf ?? 75),
      temperatureK: Number(options.temperatureK ?? 0.02)
    };
    let state = seed;
    const random = () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
    const normalish = () => (random() + random() + random() + random() - 2) / 1.155;
    return Array.from({ length: count }, (_, index) => {
      const junctionAreaUm2 = nominal.junctionAreaUm2 * (1 + normalish() * 0.025);
      const criticalCurrentDensityAcm2 = nominal.criticalCurrentDensityAcm2 * (1 + normalish() * 0.04);
      const result = simulate({ ...nominal, junctionAreaUm2, criticalCurrentDensityAcm2 });
      const measuredFrequencyGhz = result.frequencyGhz + normalish() * 0.012;
      return {
        id: `QSC-SYN-${String(index + 1).padStart(4, '0')}`,
        junctionAreaUm2,
        criticalCurrentDensityAcm2,
        predictedFrequencyGhz: result.frequencyGhz,
        measuredFrequencyGhz,
        frequencyResidualMhz: (measuredFrequencyGhz - result.frequencyGhz) * 1000,
        source: 'synthetic_wafer_v1'
      };
    });
  }

  return Object.freeze({ CONTRACT, simulate, sensitivity, syntheticWafer });
});
