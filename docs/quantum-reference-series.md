# Quantum Superconducting Reference Series

마지막 업데이트: 2026-08-10  
상태: P2 Executable Reduced-Physics Demo

## 목적

Quantum Fab Pack의 첫 번째 완주 가능한 vertical이다. Josephson junction 공정 변수에서 transmon 소자 물리량을 계산하고, 설계공간 탐색·가상 wafer·가상 극저온 측정·Westworld trace를 하나의 재현 가능한 시리즈로 연결한다.

## 실행 순서

1. Physics contract: 단위, 입력 범위, transmon regime 검사
2. Fabrication mapping: E-beam, surface preparation, superconductor/barrier deposition, cryogenic readout 연결
3. Device physics: Ic, EJ, EC, f01, anharmonicity, EJ/EC 계산
4. DSE: junction area × Jc에서 128개 후보 평가
5. Virtual wafer: seed `20260810`으로 96개 소자 편차 생성
6. Virtual cryogenic test: 측정 noise와 residual RMSE 계산
7. Westworld trace: contract부터 최종 후보까지 lineage 저장

## 탑재 reduced physics

- `Ic = Jc A`
- `EJ = ℏ Ic / 2e`
- `EC = e² / 2CΣ`
- `f01 ≈ (√(8 EJ EC) − EC) / h`
- `anharmonicity ≈ −EC / h`

구현: `public/physics/quantum-transmon.js`  
계약: `semifab.physics.quantum.transmon_reduced.v1`

## 기준 입력과 Golden behavior

| Quantity | 기준 |
|---|---:|
| Junction area | 0.12 µm² |
| Critical current density | 80 A/cm² |
| Total capacitance | 75 fF |
| Operating temperature | 20 mK |

Golden behavior:

- 입력 범위 밖의 온도·면적·Jc·capacitance를 거부한다.
- 면적 또는 Jc가 증가하면 고정 capacitance에서 f01이 증가한다.
- nominal point의 `EJ/EC ≥ 20`을 확인한다.
- 동일 seed의 virtual wafer는 동일한 데이터를 만든다.

## 과학적 한계

- CΣ는 lumped input이다. 3D electromagnetic field solve 결과가 아니다.
- coherence time, dielectric participation, Purcell loss를 예측하지 않는다.
- 가상 wafer와 가상 cryogenic measurement는 UI·orchestration 검증 데이터다.
- Evidence 상태는 `BENCHMARKED_RELATIONS + SYNTHETIC_DEMO`이며 실험 `VALIDATED`가 아니다.

## 다음 보강

1. Replaceable capacitance function과 EM solver adapter
2. Junction resistance/normal-state measurement calibration
3. Resonator coupling 및 Purcell risk 모듈
4. 실제 cryogenic spectroscopy CSV onboarding
5. Silicon Spin 독립 reduced electrostatic/capacitance vertical
