# Cryogenic Etch Pack — Development Status

마지막 업데이트: 2026-08-08  
현재 성숙도: **P1 — Interactive Demo**

## 제품 목표

저온 SF6/O2 기반 Silicon etch에서 wafer temperature, gas composition, bias/plasma 조건과 geometry를 연결해 etch rate, sidewall profile, selectivity, roughness 위험을 탐색하고 다음 고충실도 계산 또는 실험 recipe를 선택한다.

## 현재 구현

- DSE Run의 Expansion Pack 선택 가능
- 입력: wafer temperature, O2 fraction, sample count
- 출력: 시연용 profile error와 process cost
- Pareto scatter, 후보 표, CSV export
- 결정론적으로 반복 가능한 UI 계산

## 아직 실제가 아닌 부분

- 현재 objective는 제품 시연용 수학식이며 plasma/표면반응 물리 모델이 아니다.
- SF6 flow, pressure, ICP power, RF bias, feature aspect ratio가 contract에 없다.
- Etch rate, selectivity, sidewall angle의 quantity contract가 없다.
- Passivation/etch competition, ion-assisted reaction, transport 모델이 없다.
- Model Anatomy, Pack manifest, synthetic dataset, Golden test가 없다.
- Guided Gates와 Westworld는 HBM 전용이며 Etch 실행과 연결되지 않았다.

## 제안 Physics Anatomy

```text
Cryogenic Etch System
├─ Plasma source
│  ├─ radical flux
│  └─ ion flux / energy
├─ Surface chemistry
│  ├─ fluorine-driven Si removal
│  ├─ oxygen passivation
│  └─ ion-assisted passivation removal
├─ Feature transport
│  ├─ aspect-ratio transport
│  └─ sidewall sticking
├─ Thermal boundary
│  └─ wafer temperature
└─ Outputs
   ├─ etch rate
   ├─ sidewall angle
   ├─ selectivity
   └─ profile/roughness risk
```

## Next Task — Etch Core Contract v0.1

먼저 모델을 만들기보다 contract와 reference case를 확정한다.

### 입력 후보

- wafer temperature
- SF6/O2 flow 또는 fraction
- chamber pressure
- ICP power
- RF bias power 또는 ion energy proxy
- etch time
- mask/material
- feature width/depth/aspect ratio

### 출력 후보

- etch rate
- sidewall angle
- selectivity
- critical dimension loss
- passivation risk
- black-silicon/roughness risk

### 첫 reduced model

- Arrhenius/temperature sensitivity
- F radical removal term
- Oxygen passivation competition term
- Bias-assisted bottom clearing term
- Aspect-ratio transport correction

처음부터 full plasma solver를 만들지 않는다. 현상론적 reduced model과 validity envelope를 만든 뒤 공개 data로 calibration한다.

## Roadmap

1. Core/quantity/validity contract
2. 논문 기반 reference dataset 정리
3. Reduced surface-balance model
4. Synthetic recipe generator
5. Model Anatomy와 replaceable reaction-rate function
6. Golden Cases와 uncertainty
7. Validity/Fidelity/Experiment Gates
8. Westworld 연결
9. Plasma/feature-profile external solver adapter

## P2 승격 기준

- Governing relations와 단위가 명시된 실행 모델
- 입력 유효범위와 외삽 표시
- 최소 3개 reference recipe 재현
- 온도 또는 O2 변화에 대한 방향성 테스트
- Model Anatomy에서 각 반응항과 수정 가능성을 확인
- 결과를 단순 `profile error`가 아닌 물리 quantity로 출력

## 다음 세션 시작 문장

> `docs/packs/cryogenic-etch-status.md`를 읽고 Etch Core Contract v0.1과 reference data schema부터 작성한다. 현재 UI 근사식을 물리 모델로 오인하지 않는다.

