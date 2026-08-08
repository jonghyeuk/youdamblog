# Quantum Fab Pack — Dual-Track Architecture

마지막 업데이트: 2026-08-08  
Target alignment: 한국나노기술원(KANC) 양자팹의 사용자 제공 목표를 참고한 내부 제품 설계  
주의: SemiFab은 KANC의 공식 제품이나 제휴 Pack이 아니다.

## 확정 범위

Quantum Fab Pack은 기존 반도체 미세공정 인프라와 결합 가능한 두 양자소자 계열을 함께 지원한다.

```text
Quantum Fab Pack
├─ Shared Fabrication Core
│  ├─ Lithography
│  ├─ Deposition / Growth
│  ├─ Etch / Clean
│  ├─ Metrology
│  ├─ Packaging
│  └─ Cryogenic Measurement
├─ Track A — Superconducting Devices
│  ├─ Josephson Junction
│  ├─ Resonator / Feedline
│  └─ Transmon / Superconducting Circuit
└─ Track B — Silicon Spin Devices
   ├─ MOS or Si/SiGe Quantum Dot
   ├─ Gate Stack / Tunnel Barrier
   ├─ Charge Sensor
   └─ Spin Qubit Control Structure
```

Pack 하나에 두 track을 넣지만 하나의 모델로 섞지 않는다. 공정·장비·material library는 공유하고 device physics contract, quantity, validity, measurement protocol은 track별로 분리한다.

## Shared Fabrication Core

### 공통 공정

- Alignment and overlay
- Optical/maskless coarse lithography
- E-beam critical lithography
- Metal/superconductor deposition
- Dielectric deposition
- ICP/RIE pattern transfer
- Plasma clean/ashing
- SEM/FIB/film metrology
- Dicing, packaging and wire bonding
- Room-temperature and cryogenic electrical test

### 공통 capability contract

- Critical dimension and variation
- Overlay error
- Film thickness, uniformity and stress
- Surface/interface damage
- Etch selectivity and profile
- Contamination and residue
- Equipment calibration state
- Process history and wafer lineage

## Track A — Superconducting Devices

### Device Physics Anatomy

```text
Junction
├─ Ic = Jc A
├─ EJ = Φ0 Ic / 2π
├─ Junction capacitance
└─ Barrier/resistance model

Circuit
├─ Total capacitance CΣ
├─ EC = e² / 2CΣ
├─ Transition frequency f01
└─ Anharmonicity
```

### 핵심 공정

- Ground plane/resonator pattern
- Junction E-beam lithography
- Surface preparation/descum
- Superconductor electrode deposition
- Controlled barrier oxidation or selected junction process
- Lift-off or subtractive pattern transfer
- Packaging and microwave measurement

### 주요 DSE quantity

- Junction area, Jc and Ic
- Junction/total capacitance
- EJ/EC
- Transition frequency and anharmonicity
- Junction resistance/yield
- CD/overlay variation sensitivity
- Surface/interface loss risk

## Track B — Silicon Spin Devices

### Device Physics Anatomy

```text
Electrostatics
├─ Gate-induced confinement
├─ Dot chemical potential
├─ Tunnel barrier
└─ Cross-capacitance

Quantum Dot
├─ Charging energy
├─ Orbital / valley splitting
├─ Inter-dot tunnel coupling
└─ Charge stability

Readout / Control
├─ Charge sensor response
├─ Lever arm
└─ Gate-voltage operating window
```

### 핵심 공정

- High-quality Si/SiGe heterostructure 또는 Si-MOS substrate 준비
- Mesa/isolation and ohmic contact
- Gate dielectric/interface preparation
- Multi-layer fine gate lithography
- Gate metal deposition and lift-off
- Inter-layer dielectric and alignment
- Charge sensor/control routing
- Packaging, magnetic-field-compatible cryogenic measurement

### 주요 DSE quantity

- Gate geometry and overlay
- Oxide/interface properties
- Dot size and electron occupancy proxy
- Charging energy
- Lever arm and cross-capacitance
- Tunnel coupling and barrier control
- Valley/orbital splitting evidence
- Fabrication variation and operating-window robustness

## Track 간 공유와 분리

| 객체 | 공유 여부 | 설명 |
|---|---|---|
| E-beam/stepper/maskless capability | 공유 | Geometry 범위와 overlay contract 재사용 |
| ALD/CVD/evaporation equipment | 공유 | Material recipe와 damage evidence는 track별 선택 |
| Etch/clean equipment | 공유 | Material stack과 damage tolerance는 분리 |
| Geometry/wafer lineage | 공유 | 동일 provenance layer 사용 |
| Device physics | 분리 | Superconducting과 spin model을 합치지 않음 |
| Validity Envelope | 분리 | Quantity와 evidence가 다름 |
| Cryogenic measurement | 부분 공유 | Instrument는 공유 가능, protocol은 분리 |
| DSE engine/Westworld | 공유 | Contract와 adapter만 track별 교체 |

## Pack 설치와 Merge

사용자가 Quantum Fab Pack을 추가하면 먼저 두 track과 shared core를 preview한다.

```text
ADD Quantum Fab Pack

Shared Core
  Lithography capability       REUSE 3
  Deposition capability        REUSE 2 / MISSING 1
  Etch capability              REUSE 3
  Cryogenic measurement        MISSING

Superconducting Track
  Josephson reduced physics    ADD
  Barrier oxidation            MISSING

Silicon Spin Track
  Quantum-dot electrostatics   ADD
  Heterostructure source        MISSING
  Magnet/cryo control           MISSING
```

Track은 독립적으로 활성화할 수 있으며 shared core의 변경은 두 track에 미치는 blast radius를 Westworld에서 보여준다.

## 개발 순서

두 track을 최종 지원하지만 동시에 구현하지 않는다.

1. Shared Fabrication Core contract
2. Superconducting Track P2 vertical
3. Silicon Spin Track Core Contract
4. Silicon Spin reduced electrostatic/capacitance model
5. 두 track 공통 Equipment Registry
6. Shared process change의 cross-track blast radius

Superconducting Track을 먼저 구현하는 이유는 현재 UI 변수와 기존 문서가 junction area/Jc를 이미 사용하고 있기 때문이다. 이는 범위 우선순위이며 Silicon Spin을 Pack 밖으로 제외하는 결정이 아니다.

## 완료 정의

- 두 track이 Pack preview에서 명시적으로 보임
- Shared/track-specific 모델이 구분됨
- 각 track에 독립 Core/Quantity/Validity Contract 존재
- 최소 하나의 replaceable function과 Model Fork 존재
- Equipment capability gap이 track별로 계산됨
- 공정 변화가 device quantity에 전달되는 lineage 존재
- Westworld가 shared model 변경의 양쪽 track 영향도를 표시

