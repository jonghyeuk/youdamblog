# Quantum Device Pack — Development Status

마지막 업데이트: 2026-08-08  
현재 성숙도: **P2 — Executable Reduced-Physics Demo (Superconducting vertical)**

## 2026-08-10 실행 데모 업데이트

- `public/physics/quantum-transmon.js`: Josephson/transmon reduced-physics 실행 모듈
- 독립 contract와 validity range: junction area, Jc, total capacitance, temperature
- 계산 출력: Ic, EJ, EC, f01, anharmonicity, EJ/EC, 공정 편차 민감도
- seed 고정 synthetic wafer 96개와 virtual cryogenic measurement
- Golden test 및 범위 거부 테스트
- `public/physics/quantum-pack-manifest.json`: shared core와 두 track 상태 공개
- Quantum 진입을 Template, Guided Research, Import 세 모드로 분리
- Josephson–Transmon을 Pack 중심이 아닌 선택형 첫 reference template로 재정의
- 질문·근거 입력에서 Initial Variables, Evidence Gap, First Route, Next Question을 만드는 1차 진단 지도 데모
- 반복 연구 원칙은 [Guided Research Mapping](../guided-research-mapping.md)에 기록
- Guided 진단의 target·범위·candidate count가 실제 DSE 입력으로 전달
- 하드코딩 Pareto/금액 제거: 실제 후보 frontier와 fidelity별 Compute Units 표시
- Evolving Experiment Map: ACTIVE/FIXED/MISSING 5차원 상태, 세 영역 분기, Map 1 → Map 2 집중탐색

초전도 트랙은 한 사이클이 실행되지만 **실험 검증 완료 제품 모델은 아니다.** Capacitance는 lumped input이며 EM field solve와 coherence-time 예측은 포함하지 않는다. Silicon Spin 트랙은 여전히 contract 설계 단계다.

## 제품 목표

기존 반도체 미세공정 인프라를 활용하는 **초전도 기반 양자소자**와 **실리콘 스핀 기반 양자소자**의 geometry, material, process, equipment, measurement를 연결한다. 상세 구조는 [Quantum Dual-Track Architecture](./quantum-dual-track-architecture.md)를 따른다.

## 현재 구현

- DSE Run의 Expansion Pack 선택 가능
- 입력: junction area, critical current density, sample count
- 출력: 시연용 frequency error와 evaluation cost
- Pareto scatter, 후보 표, CSV export
- 결정론적으로 반복 가능한 UI 계산

## 확정된 Pack 범위

Quantum Fab Pack은 두 track을 지원한다.

1. **Superconducting Track** — Josephson junction, resonator, transmon/superconducting circuit
2. **Silicon Spin Track** — Si-MOS 또는 Si/SiGe quantum dot, charge sensor, spin control structure

두 track은 Shared Fabrication Core와 장비 registry를 재사용하지만 device physics와 validity를 섞지 않는다. 구현은 Superconducting P2 vertical을 먼저 완료한 뒤 Silicon Spin으로 진행한다.

## 아직 실제가 아닌 부분

- 현재 frequency error는 시연용 수학식이며 Josephson governing model이 아니다.
- Capacitance, Josephson energy, charging energy, resistance, temperature가 없다.
- Target frequency, anharmonicity, coherence/risk quantity contract가 없다.
- Material/fabrication variability와 measurement data가 없다.
- Model Anatomy, Pack manifest, synthetic dataset, Golden test가 없다.
- Guided Gates와 Westworld 연결이 없다.

## 제안 Physics Anatomy — Josephson/Transmon 선택 시

```text
Quantum Device System
├─ Junction
│  ├─ critical current Ic = Jc A
│  ├─ Josephson energy EJ
│  └─ junction resistance/capacitance
├─ Charging system
│  ├─ total capacitance CΣ
│  └─ charging energy EC
├─ Circuit model
│  ├─ transition frequency
│  └─ anharmonicity
├─ Environment
│  ├─ temperature
│  ├─ flux/charge offset
│  └─ loss assumptions
└─ Outputs
   ├─ f01
   ├─ anharmonicity
   ├─ EJ/EC
   └─ fabrication sensitivity
```

## Next Task — Shared Core + Superconducting Track Contract

사용자가 제공한 공정 장비 목록과 해석은 [Quantum Fabrication Requirements](./quantum-fabrication-requirements.md)에 정리했다. 이후 Quantum Pack 작업은 해당 문서의 장비 capability와 12-step reference process flow를 함께 사용한다.

### 첫 구현 vertical

`Superconducting Josephson Junction / Transmon Reduced Design Track`

### 입력 후보

- junction area
- critical current density
- junction/total capacitance
- shunt geometry proxy
- operating temperature
- fabrication variation

### 출력 후보

- critical current
- Josephson energy
- charging energy
- transition frequency
- anharmonicity
- sensitivity to area/Jc variation

### 첫 reduced model

- `Ic = Jc A`
- `EJ = Φ0 Ic / (2π)`
- `EC = e² / (2 CΣ)`
- transmon reduced frequency/anharmonicity relation
- Monte Carlo fabrication variation

Coherence time을 첫 버전에서 직접 예측하지 않는다. 충분한 loss model과 validation evidence가 생긴 뒤 확장한다.

## Roadmap

1. Shared Fabrication Core contract
2. Superconducting Core/quantity/validity contract
3. 12-step superconducting fabrication process contract
4. Equipment capability registry와 mapping
5. Josephson/transmon reduced model
6. 단위 및 상수 registry
7. Synthetic fabrication distribution
8. Model Anatomy와 capacitance/Jc replaceable functions
9. Superconducting Golden Cases와 uncertainty
10. Silicon Spin Core/quantity/validity contract
11. Quantum-dot reduced electrostatic/capacitance model
12. Guided Gates와 Westworld cross-track blast radius
13. SPICE/QuTiP/외부 eigensolver adapter

## P2 승격 기준

- 소자 종류와 목적이 하나로 제한됨
- SI 단위와 물리상수가 명시됨
- Governing relations 기반 실행 결과
- 알려진 limiting behavior 테스트
- fabrication variation에 대한 sensitivity 출력
- Validity Envelope와 evidence 상태 표시
- Model Anatomy와 function fork 작동

## 다음 세션 시작 문장

> `docs/packs/quantum-dual-track-architecture.md`와 `quantum-device-status.md`를 읽고 Shared Fabrication Core 및 Superconducting Track Contract부터 작성한다. Silicon Spin은 동일 Pack의 두 번째 track이며 제외하지 않는다. 현재 frequency error 식은 placeholder로 취급한다.
