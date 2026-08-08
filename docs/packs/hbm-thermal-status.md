# HBM Thermal Pack — Development Status

마지막 업데이트: 2026-08-08  
현재 성숙도: **P2 — Executable Reduced Physics**  
최근 기준 커밋: `262b75d`

## 제품 목표

HBM stack의 geometry, material, power, cooling model을 연결해 넓은 설계공간을 빠르게 선별하고, 불확실하거나 중요한 후보만 고충실도 solver와 실험으로 승격한다.

## 현재 실제 구현

### Physics core

- 정상상태 0D lumped thermal resistance network
- Die, TIM, microbump, interface, spreading resistance 분리 계산
- Microbump 병렬 열전도
- 온도 기반 leakage fixed-point iteration
- TIM conductivity의 constant, linear `k(T)`, table 모델
- 입력 validity gate
- 구성요소별 열저항, peak temperature, gradient 출력

### Product flow

- 고정 seed synthetic HBM data 120행 생성
- Design candidates 144개 계산
- 후보 shortlist 및 가상 실험
- Calibration 전후 RMSE
- Auto demo와 Guided Research Mode
- Validity, Fidelity, Experiment Decision Gates
- Westworld policy registry, decision audit, runtime trace
- Model Anatomy와 Pack manifest
- Pack merge preview
- TIM function preview와 Model Fork
- Fork 후 `USER_MODIFIED / REQUIRES_REVIEW` 강등

### 검증

- 자동 테스트: 5/5 PASS
- 브라우저 Guided HBM 8단계 PASS
- Westworld decision audit 3건 및 trace 연결 확인
- Synthetic validation RMSE만 존재하며 실제 물리 정확도 검증은 아직 없음

## 주요 파일

| 역할 | 파일 |
|---|---|
| 물리 모델 | `public/physics/hbm-thermal.js` |
| Pack manifest | `public/physics/hbm-pack-manifest.json` |
| Decision 정책 | `public/policies/hbm-decision-gates.json` |
| UI 및 orchestration | `public/app.js`, `public/index.html` |
| 자동 테스트 | `tests/hbm-thermal.test.cjs` |
| 상세 흐름 | `docs/hbm-reference-series.md` |

## 현재 가정과 제한

- 전체 stack을 하나의 등가 수직 열경로로 축약한다.
- 정상상태만 계산한다.
- Power는 전체 합계이며 die별 power map이 없다.
- Effective thermal area와 spreading resistance가 강한 보정 손잡이다.
- TSV, underfill, interposer, substrate가 독립 node로 분리되지 않았다.
- Silicon/Copper 물성의 온도 의존성이 기본값에 포함되지 않았다.
- Cooling은 equivalent sink이며 실제 convection/cold plate가 아니다.
- 공개 benchmark, COMSOL/ANSYS reference, 실측 데이터 검증이 없다.
- Firebase Model Registry 영속화가 없다.

## Roadmap

### Next Task — HBM Thermal L2 multi-node network

- Logic die와 각 memory die를 독립 temperature node로 구성
- Die별 power 입력
- Layer별 thermal capacitance 준비
- Logic die → memory dies → TIM → heat sink 경로
- Layer별 온도, 최고온도 layer, 층간 gradient 출력
- 기존 L1 모델과 regression 비교

### 이후 작업

1. Die별 CSV power map
2. Transient thermal RC
3. TSV/underfill/interposer equivalent submodels
4. `kSi(T)`, `kCu(T)`, `Rcontact(P,T)` replaceable functions
5. Convection 및 cold-plate boundary
6. Sensitivity와 uncertainty propagation
7. 공개 reference + 고충실도 + 실측 Golden Cases
8. COMSOL/ANSYS/CSV adapter
9. Firebase Model Registry와 fork 영속화

## P3 승격 기준

- 최소 3종 Golden Case: 공개 reference, 고충실도 solver, 독립 측정
- 각 case 입력과 boundary가 재현 가능
- Peak/layer temperature 허용오차 명시
- Validity Envelope에 evidence source와 tolerance 저장
- L1/L2/HF disagreement가 Westworld에서 비교 가능
- Synthetic data가 아닌 독립 validation set으로 PASS

## 다음 세션 시작 문장

> `docs/packs/hbm-thermal-status.md`를 읽고 Next Task인 HBM Thermal L2 multi-node network부터 구현한다. 기존 L1 API와 테스트를 깨뜨리지 않는다.

