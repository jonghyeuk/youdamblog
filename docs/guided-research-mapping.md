# Guided Research Mapping

마지막 업데이트: 2026-08-10

## 제품 정의

SemiFab은 임의의 숫자 범위를 넣고 동일한 후보를 반복 생성하는 one-click optimizer가 아니다. 연구자의 질문, 보유 근거, 제약과 미지의 영역을 진단하여 첫 Design Space Prior를 만들고, 계산·실험·이론 보강으로 지도를 갱신하는 연구환경이다.

```text
Research Brief
  → Diagnostic Map 1 / Prior
  → Reduced DSE
  → Evidence Gap
  → Experiment or Theory Reinforcement
  → Diagnostic Map 2 / Posterior
  → Stop, narrow or branch
```

## LLM의 역할

LLM이 담당할 수 있는 것:

- 자연어 연구 질문을 quantity와 constraint 후보로 변환
- 문헌·코드·CSV에서 주장, 조건범위, 단위와 출처 추출
- 가능한 모델 route와 서로 다른 가설 제안
- 추가로 물어야 할 질문과 Evidence Gap 제안
- Pack manifest 초안 생성

LLM이 단독으로 담당하지 않는 것:

- 물리 계산 결과 생성
- 문헌에 없는 validity 보장
- synthetic 결과를 experimental validation으로 승격
- 독립 근거 없이 최적점 확정

## 계산과 검증의 분리

| Layer | 책임 |
|---|---|
| LLM Discovery | 질문 구조화, prior, 가설, 출처 후보 |
| Contract Engine | quantity, 단위, 범위, 입출력 검사 |
| Physics / Solver | 후보별 결정론적 계산 |
| Evidence Engine | REPORTED, BENCHMARKED, CALIBRATED, VALIDATED 상태 |
| Decision Gate | 실험, 이론 보강, 범위 축소 또는 분기 선택 |
| Westworld | 객체 ID, 버전, lineage, 권한과 변경 영향 |

## One-shot 문제

첫 실행에서 매우 좋은 후보 하나가 나오는 것은 허용한다. 다만 그것을 연구 완료로 해석하지 않는다.

- 독립 evidence가 없으면 `PROVISIONAL`이다.
- 모델 불일치가 작아도 동일 가정에서 나온 모델이면 독립 검증이 아니다.
- 결과가 충분하면 억지로 반복하지 않고 stop condition과 잔여 uncertainty를 기록한다.
- 여러 방향이 유사하면 하나를 숨기지 않고 branch로 유지한다.

따라서 반복 횟수가 연구의 깊이를 의미하지 않는다. 새로운 정보가 uncertainty 또는 decision risk를 얼마나 줄였는지가 반복의 기준이다.

## Quantum 진입 모드

1. Template: 준비된 reference vertical 선택
2. Guided Research: 연구 질문과 보유 근거로 초기 지도 생성
3. Import: 논문, 코드, CSV를 private model bundle로 변환

Josephson–Transmon은 첫 실행 템플릿일 뿐 Quantum Pack의 중심 객체가 아니다. Shared Fab Core는 공정 객체 라이브러리이고 Silicon Spin은 독립 track이다.

## 현재 데모와 향후 구현

현재 Guided Research는 로컬 규칙 기반 진단 데모이며 실제 외부 LLM 호출을 하지 않는다. 다음 구현은 source citation, multi-hypothesis proposal, 질문 응답 history, map diff, evidence-aware stop condition을 포함하는 LLM adapter다.
