# SemiFab Physics Pack Development Index

마지막 업데이트: 2026-08-08

이 디렉터리는 Physics Pack별 현재 구현 수준, 검증 상태, 다음 작업과 재개 지점을 기록한다. 새 세션에서 작업을 시작할 때 이 문서와 대상 Pack 문서를 먼저 읽는다.

## 공통 성숙도

| 단계 | 의미 |
|---|---|
| P0 — Concept | 변수와 연구 질문만 정의된 상태 |
| P1 — Interactive Demo | UI에서 실행되지만 결과가 시연용 근사식인 상태 |
| P2 — Executable Reduced Physics | 명시적 물리 가정과 contract를 가진 실행 모델 |
| P3 — Evidence-backed | Golden case, 독립 reference와 허용오차로 검증된 상태 |
| P4 — Connected Research | 외부 solver·실험·Model Registry와 연결된 상태 |

## 현재 상태

| Pack | 단계 | 실행 모델 | 검증 | 다음 핵심 작업 |
|---|---:|---|---|---|
| [HBM Thermal](./hbm-thermal-status.md) | P2 | 0D steady-state thermal resistance network | 자동 테스트 5개, synthetic calibration | Die별 multi-node L2 + Golden Cases |
| [Cryogenic Etch](./cryogenic-etch-status.md) | P1 | 시연용 deterministic objective | 없음 | SF6/O2 reduced process model과 contract |
| [Quantum Device](./quantum-device-status.md) | P1 | 시연용 deterministic objective | 없음 | 소자 범위 확정 후 첫 governing model |

## 공통 Pack 완료 조건

모든 Pack은 다음 산출물을 갖는다.

1. Pack manifest
2. Core/quantity/validity contract
3. Model Anatomy
4. 최소 1개 실행 가능한 reduced-physics model
5. Synthetic dataset generator
6. Golden tests
7. Validity/Fidelity/Experiment Decision Gates
8. Westworld policy·trace·decision audit
9. Replaceable function 1개 이상
10. Model fork와 validation downgrade
11. CSV/JSON import·export
12. 다음 fidelity로 승격하는 adapter contract

## 재개 절차

1. 대상 Pack 상태 문서를 읽는다.
2. `git status`와 최근 커밋을 확인한다.
3. 문서의 `Next Task` 하나만 선택한다.
4. 구현 후 자동 테스트와 브라우저 end-to-end 테스트를 수행한다.
5. 완료한 항목과 새 위험을 Pack 문서에 갱신한다.

