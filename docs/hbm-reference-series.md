# HBM Thermal Reference Series v1

SemiFab 데모의 첫 번째 완전 실행 기준 시리즈다. UI 장식용 수치가 아니라 동일한 입력과 seed에서 같은 결과를 만드는 결정론적 흐름으로 구성한다.

## 전체 흐름

1. **Synthetic Data** — 고정 seed `20260808`로 HBM 가상 측정 데이터 120행을 생성한다.
2. **Contract Gate** — 단위, 입력 범위, 필수 lineage를 검사한다.
3. **Model Registry** — `semifab.physics.hbm_thermal.v1`을 reduced-physics 모델로 등록한다.
4. **Design Space** — microbump pitch `28–56 μm`, TIM thickness `8–38 μm`에서 144개 후보를 만든다.
5. **Physics DSE** — 모든 후보를 열저항 네트워크 모델로 평가한다.
6. **Shortlist** — peak temperature와 평가 비용의 결합 점수로 후보 6개를 압축한다.
7. **Virtual Experiment** — 압축된 후보에 재현 가능한 측정 residual을 더해 가상 실험을 수행한다.
8. **Calibration** — 90행을 보정에, 30행을 검증에 사용하고 RMSE 전후를 기록한다.

최종 산출물은 후보, 가상 실험값, calibration 결과, contract, registry snapshot, trace를 포함한 JSON으로 내보낼 수 있다.

## HBM 기본 물리 모듈

모델은 정상상태 열저항 네트워크를 사용한다.

```text
R_total = R_die + R_TIM + R_bumps + R_interfaces + R_spreading
T_peak = T_ambient + P_effective × R_total
R_layer = thickness / (thermal_conductivity × effective_area)
```

Microbump는 병렬 열전도 경로로 계산하며, 온도 상승에 따른 leakage 증가는 고정점 반복으로 근사한다.

### 기본 입력

- microbump pitch
- TIM thickness
- power
- HBM stack layer 수
- die/effective thermal area
- Si, TIM, bump의 열전도도

### 주요 출력

- peak temperature
- thermal gradient
- total thermal resistance
- 열저항 구성요소별 기여
- 유효 microbump 수
- contract 및 validity 결과

## 제한

이 모델은 제품 플로우와 model contract를 검증하기 위한 reduced-physics 모델이다. CFD/FEA를 대체하지 않는다. 실제 설계 판단에는 재료의 온도 의존성, 비균일 power map, TSV 구조, package boundary condition, convection 및 실측 calibration을 포함한 고충실도 solver adapter가 필요하다.

## 확장 원칙

Cryogenic Etch와 Quantum Device 팩도 동일한 인터페이스를 따른다.

```text
contract → validate → simulate → shortlist → experiment → calibrate → trace
```

분야별로 바뀌는 것은 물리 모듈과 입력 contract이며, registry, DSE, trace, calibration 흐름은 재사용한다.
