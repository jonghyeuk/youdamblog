# Quantum Device Pack — Development Status

마지막 업데이트: 2026-08-08  
현재 성숙도: **P1 — Interactive Demo**

## 제품 목표

양자소자의 geometry, material, electrostatic/control parameter와 측정 데이터를 연결해 목표 동작점, 민감도, 공정 변동 위험과 다음 측정 후보를 탐색한다.

## 현재 구현

- DSE Run의 Expansion Pack 선택 가능
- 입력: junction area, critical current density, sample count
- 출력: 시연용 frequency error와 evaluation cost
- Pareto scatter, 후보 표, CSV export
- 결정론적으로 반복 가능한 UI 계산

## 가장 먼저 결정할 문제

현재 `Quantum Device`는 범위가 지나치게 넓다. 다음 중 첫 vertical을 하나만 선택해야 한다.

1. Superconducting Josephson junction / transmon
2. Silicon/SiGe quantum dot
3. Single-electron device
4. Cryogenic SFQ device

현재 UI 변수인 junction area와 critical current density는 **Josephson junction / superconducting device**에 가장 가깝다. 별도 결정이 없다면 첫 Pack을 `Josephson Junction Device Pack`으로 좁힌다.

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

## Next Task — Pack scope decision + Core Contract

사용자가 제공한 공정 장비 목록과 해석은 [Quantum Fabrication Requirements](./quantum-fabrication-requirements.md)에 정리했다. 이후 Quantum Pack 작업은 해당 문서의 장비 capability와 12-step reference process flow를 함께 사용한다.

### 권장 첫 scope

`Josephson Junction / Transmon Reduced Design Pack`

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

1. 소자 scope 확정
2. Core/quantity/validity contract
3. 12-step fabrication process contract
4. Equipment capability registry와 mapping
5. Josephson/transmon reduced model
6. 단위 및 상수 registry
7. Synthetic fabrication distribution
8. Model Anatomy와 capacitance/Jc replaceable functions
9. Golden Cases와 uncertainty
10. Guided Gates와 Westworld 연결
11. SPICE/QuTiP/외부 eigensolver adapter

## P2 승격 기준

- 소자 종류와 목적이 하나로 제한됨
- SI 단위와 물리상수가 명시됨
- Governing relations 기반 실행 결과
- 알려진 limiting behavior 테스트
- fabrication variation에 대한 sensitivity 출력
- Validity Envelope와 evidence 상태 표시
- Model Anatomy와 function fork 작동

## 다음 세션 시작 문장

> `docs/packs/quantum-device-status.md`를 읽고 Quantum Device의 첫 scope를 Josephson/Transmon으로 확정할지 결정한 뒤 Core Contract를 작성한다. 현재 frequency error 식은 제품 시연용 placeholder로 취급한다.
