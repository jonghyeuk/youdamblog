(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.SemiFabPhysics = root.SemiFabPhysics || {};
  root.SemiFabPhysics.hbmThermal = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const CONTRACT = Object.freeze({
    id: 'semifab.physics.hbm_thermal.v1',
    fidelity: 'reduced_physics',
    assumptions: [
      'steady-state thermal resistance network',
      'uniform layer properties',
      'microbumps conduct in parallel',
      'temperature-dependent leakage represented by fixed-point iteration'
    ],
    validity: {
      pitchUm: [20, 80],
      timThicknessUm: [5, 60],
      powerW: [5, 120],
      stackLayers: [2, 16]
    }
  });

  function inRange(name, value) {
    const bounds = CONTRACT.validity[name];
    if (!Number.isFinite(value) || value < bounds[0] || value > bounds[1]) {
      throw new RangeError(`${name} must be within ${bounds[0]}..${bounds[1]}`);
    }
  }

  function conductivityAt(model, temperatureC, fallback) {
    if (model == null) return fallback;
    if (typeof model === 'number') return model;
    if (model.type === 'constant') return Number(model.value);
    if (model.type === 'linear') {
      return Number(model.valueAtReference) + Number(model.slopePerC) * (temperatureC - Number(model.referenceC ?? 25));
    }
    if (model.type === 'table' && Array.isArray(model.points) && model.points.length >= 2) {
      const points = [...model.points].map(point => [Number(point[0]), Number(point[1])]).sort((a, b) => a[0] - b[0]);
      if (temperatureC <= points[0][0]) return points[0][1];
      if (temperatureC >= points.at(-1)[0]) return points.at(-1)[1];
      const upperIndex = points.findIndex(point => point[0] >= temperatureC);
      const lower = points[upperIndex - 1], upper = points[upperIndex];
      const fraction = (temperatureC - lower[0]) / (upper[0] - lower[0]);
      return lower[1] + fraction * (upper[1] - lower[1]);
    }
    throw new TypeError('Unsupported conductivity model');
  }

  function simulate(input) {
    const pitchUm = Number(input.pitchUm);
    const timThicknessUm = Number(input.timThicknessUm);
    const powerW = Number(input.powerW ?? 55);
    const stackLayers = Number(input.stackLayers ?? 8);
    inRange('pitchUm', pitchUm);
    inRange('timThicknessUm', timThicknessUm);
    inRange('powerW', powerW);
    inRange('stackLayers', stackLayers);

    const ambientC = Number(input.ambientC ?? 25);
    const effectiveAreaM2 = Number(input.effectiveAreaMm2 ?? 18) * 1e-6;
    const dieThicknessM = Number(input.dieThicknessUm ?? 75) * 1e-6;
    const bumpHeightM = Number(input.bumpHeightUm ?? 22) * 1e-6;
    const bumpDiameterM = Number(input.bumpDiameterUm ?? 24) * 1e-6;
    const dieAreaM2 = Number(input.dieAreaMm2 ?? 100) * 1e-6;
    const pitchM = pitchUm * 1e-6;
    const timM = timThicknessUm * 1e-6;
    const kSi = Number(input.kSiWmK ?? 130);
    const kTimFallback = Number(input.kTimWmK ?? 3.2);
    const kBump = Number(input.kBumpWmK ?? 390);
    const activeBumpFraction = Number(input.activeBumpFraction ?? 0.62);
    const bumpCount = Math.max(1, Math.floor(dieAreaM2 / (pitchM * pitchM) * activeBumpFraction));
    const bumpAreaM2 = Math.PI * Math.pow(bumpDiameterM / 2, 2);

    const rDie = stackLayers * dieThicknessM / (kSi * effectiveAreaM2);
    const rBumps = bumpHeightM / (kBump * bumpAreaM2 * bumpCount);
    const rInterface = 0.018 * (stackLayers + 1);
    const rSpreading = 0.105 + 0.0012 * Math.abs(pitchUm - 40);
    let kTim = conductivityAt(input.kTimModel, ambientC, kTimFallback);
    let rTim = timM / (kTim * effectiveAreaM2);
    let totalResistanceKW = rDie + rTim + rBumps + rInterface + rSpreading;
    let peakTempC = ambientC + powerW * totalResistanceKW;
    for (let i = 0; i < 6; i += 1) {
      kTim = conductivityAt(input.kTimModel, peakTempC, kTimFallback);
      if (!Number.isFinite(kTim) || kTim <= 0) throw new RangeError('TIM conductivity must stay positive');
      rTim = timM / (kTim * effectiveAreaM2);
      totalResistanceKW = rDie + rTim + rBumps + rInterface + rSpreading;
      const leakageMultiplier = 1 + Math.max(0, peakTempC - 55) * 0.0028;
      peakTempC = ambientC + powerW * leakageMultiplier * totalResistanceKW;
    }

    const thermalGradientC = powerW * (rDie + rInterface) * 0.46;
    return {
      peakTempC,
      thermalGradientC,
      totalResistanceKW,
      bumpCount,
      componentsKW: { die: rDie, tim: rTim, bumps: rBumps, interfaces: rInterface, spreading: rSpreading },
      activeFunctions: { timConductivity: input.kTimModel?.type ?? 'constant', effectiveKTimWmK: kTim },
      contractId: CONTRACT.id,
      valid: true
    };
  }

  function syntheticDataset(options) {
    const count = Math.max(16, Math.min(1000, Number(options?.count ?? 128)));
    const seed = Number(options?.seed ?? 20260808) >>> 0;
    let state = seed;
    const random = () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
    return Array.from({ length: count }, (_, index) => {
      const pitchUm = 28 + random() * 28;
      const timThicknessUm = 8 + random() * 30;
      const powerW = 35 + random() * 45;
      const stackLayers = [4, 8, 12][Math.floor(random() * 3)];
      const result = simulate({ pitchUm, timThicknessUm, powerW, stackLayers });
      const measurementNoiseC = (random() - 0.5) * 1.2;
      return {
        id: `HBM-SYN-${String(index + 1).padStart(4, '0')}`,
        pitchUm,
        timThicknessUm,
        powerW,
        stackLayers,
        peakTempC: result.peakTempC + measurementNoiseC,
        predictedPeakTempC: result.peakTempC,
        thermalResistanceKW: result.totalResistanceKW,
        source: 'synthetic_v1'
      };
    });
  }

  return Object.freeze({ CONTRACT, conductivityAt, simulate, syntheticDataset });
});
