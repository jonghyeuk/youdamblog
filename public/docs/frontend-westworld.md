# SemiFab Scientific AI Workspace
## Frontend UX / Control Plane / Validation Harness 설계서
### DSE Orchestra UI + Research X-Ray + Supervisor Console + Engine Harness + R&D Westworld

---

# 0. 문서 목적

이 문서는 SemiFab Scientific AI Workspace의 **구체적인 프론트엔드 구조와 검증·관제 UI**를 정의한다.

SemiFab R&D는 하나의 화면이 아니라 다음 네 개의 시야를 동시에 가져야 한다.

1. **Research Workspace** — 연구자가 실제로 모델을 연결하고 DSE를 수행하는 화면
2. **Research X-Ray** — 연구자가 모델·근거·신뢰도·Validity·Lineage를 보는 화면
3. **Supervisor / Operations Console** — PI·연구책임자·기관관리자가 프로젝트·AI·비용·실패를 감시하는 화면
4. **R&D Westworld / Engine Harness** — 개발자가 모델·엔진·State·Contract·Trace·검증을 뜯어보는 내부 관제실

핵심 철학은 **같은 Scientific Core를 역할별 View로 투영하는 것**이다. 모든 복잡성을 하나의 Graph에 억지로 표현하지 않는다.

---

# 1. 기존 MiniFab 검증철학에서 가져올 원칙

## 1.1 WORLD / EYES / BRAIN 파티션

```text
WORLD
모델·엔진·DSE·측정·State

EYES
AI가 읽는 Snapshot / Contract / State Serialization

BRAIN
LLM의 해석·계획·설명
```

- 결과값은 WORLD에서 생성한다.
- EYES는 Bandi가 실제로 읽은 데이터만 직렬화한다.
- BRAIN은 검증된 입력을 해석하되 숫자 진실원천이 되지 않는다.
- 프론트엔드는 세 층을 명시적으로 분리한다.

## 1.2 공통 Lineage Layer

```text
공통 Lineage Layer
├── Research X-Ray
│   근거·신뢰·영향
└── R&D Westworld
    코드·스키마·도구·액션·테스트·런타임
```

Researcher와 Developer가 보는 깊이는 다르지만 진실원천은 하나다.

---

# 2. 전체 Frontend Information Architecture

```text
SemiFab Scientific AI Workspace
│
├── 1. Workspace
│   ├── Project Home
│   ├── Research Canvas
│   ├── Model Library
│   ├── Model Onboarding
│   ├── Design Space
│   ├── Runs
│   ├── Experiments
│   ├── Results
│   └── Bandi
│
├── 2. Research X-Ray
│   ├── Model Lineage
│   ├── Quantity / State
│   ├── Fidelity
│   ├── Validity
│   ├── Evidence
│   └── Candidate Explanation
│
├── 3. Supervisor Console
│   ├── Portfolio
│   ├── Project Health
│   ├── AI Activity
│   ├── Model Usage
│   ├── Experiment Queue
│   ├── Cost
│   ├── Alerts
│   └── Approvals
│
└── 4. R&D Westworld
    ├── Overview
    ├── System Circuit
    ├── Runtime Graph
    ├── Flight Recorder
    ├── Trace Replay
    ├── Contracts
    ├── Engine Harness
    ├── Golden / Fuzz
    ├── Coverage
    ├── Cost / Performance
    ├── Doctor
    └── Pack Diagnostics
```

---

# 3. 역할별 권한

| Persona | 목적 | 기본 접근 |
|---|---|---|
| Researcher | 모델 연결·DSE·실험 | Workspace + X-Ray |
| PI / Project Lead | 연구 판단·승인 | Workspace + X-Ray + Supervisor |
| Facility / R&D Manager | 운영·비용·Queue | Supervisor |
| Developer | 엔진 검토·디버깅 | Westworld + Harness |
| Owner / Admin | 전체 시스템 | 전체 View |
| Bandi | 사용자 보조 | 허용된 Action Bus만 |

---

# 4. Global Shell

```text
┌─────────────────────────────────────────────────────────────────────┐
│ SemiFab | Project ▼ | Mode: Research | Sync ● | Cost | Alerts      │
├──────────────┬──────────────────────────────────────┬───────────────┤
│ Left Nav     │ Main Workspace                       │ Context Rail  │
│              │                                      │               │
│ Workspace    │                                      │ Inspector     │
│ Models       │                                      │ Bandi         │
│ Design Space │                                      │ Validation    │
│ Runs         │                                      │ Alerts        │
│ Experiments  │                                      │               │
│ X-Ray        │                                      │               │
├──────────────┴──────────────────────────────────────┴───────────────┤
│ Run Timeline / Event Strip / Cost / Validation Status              │
└─────────────────────────────────────────────────────────────────────┘
```

Global Shell은 Project, Mode, Sync, Cost, Alert를 항상 유지한다.

---

# 5. Project Home

첫 화면은 단순 KPI Dashboard가 아니라 **현재 연구 상태**를 보여준다.

```text
HBM Thermal Optimization

Goal
Tmax < 85°C
Warpage < 70 µm

Design Space
4 variables
1,000 candidates
3 fidelity levels

Models
4 connected
1 validity warning

Experiments
8 imported
2 candidate gaps

Next
Run high-fidelity check on Candidates 42, 57, 81
```

핵심 카드:
- Research Goal
- Current Design Space
- Connected Models
- Experimental Data
- Best Candidates
- Open Questions
- Next Action

---

# 6. Research Canvas

Scientific AI Workspace의 중심 화면.

Canvas 객체:
- Goal
- Variable
- Model
- Solver
- Data
- Experiment
- Measurement
- Objective
- Constraint
- Calibration

예:

```text
[Power Density] ─────┐
[TIM Thickness] ─────┤
[Cooling Temp] ──────┤
                     ▼
              [User Thermal Model]
                     │
          junction_temperature
                     ▼
              [HF Simulation CSV]
                     │
                     ▼
              [Experiment Data]
                     │
                     ▼
                [Calibration]
```

---

# 7. Canvas Node 규칙

```text
┌─────────────────────────────┐
│ USER THERMAL MODEL          │
│ Python · USER MODEL         │
│                             │
│ IN  4     OUT 2             │
│ Validity  UNKNOWN ⚠         │
│ Confidence MEDIUM           │
│ Cost       LOW              │
│ Runtime    23 ms            │
└─────────────────────────────┘
```

상태:
- VALIDATED
- READY
- WARNING
- EXTRAPOLATED
- UNKNOWN
- BROKEN

노드에는 최소한 `type / inputs / outputs / validity / confidence / runtime / cost`를 보여준다.

---

# 8. Edge UI

연결선도 객체다.

```text
Connection

From
User Thermal Model

Output
junction_temperature [°C]

To
Reliability Model

Input
device_temperature [K]

Adapter
Celsius → Kelvin

Semantic Mapping
Confirmed

Validation
PASS
```

연결선:
- solid = confirmed
- dashed = proposed
- amber = adapter required
- red = broken
- gray = unused

---

# 9. Model Library

분류:
- My Models
- Lab Models
- Open Source
- SemiFab Models
- External Solvers
- Surrogates
- Data Models
- Experiments

필터:
- Domain
- Input / Output Quantity
- Fidelity
- Validity
- Runtime
- Cost
- Owner
- License
- Validation

---

# 10. Model Onboarding Wizard

## Step 1 Import

```text
Add Scientific Asset

[ Upload Python ]
[ Upload CSV ]
[ Add Equation ]
[ External Solver ]
[ Paste Repository ]
[ Experimental Data ]
```

## Step 2 Deterministic Parse

```text
Parsing structure...

✓ 3 functions found
✓ 4 input arguments
✓ 2 outputs
✓ 5 imports
✓ docstring found
```

## Step 3 AI Semantic Interpretation

```text
power_density
→ thermal.power_density       98%

tim_um
→ thermal.tim_thickness       96%

T
→ thermal.coolant_temperature 62% ⚠
```

Low confidence는 자동등록 금지.

## Step 4 Contract Review

왼쪽 Original / 오른쪽 SemiFab Contract.

## Step 5 Validation

```text
Structure       PASS
Execution       PASS
Unit            WARNING
Validity        UNKNOWN
Determinism     PASS
Golden          NOT PROVIDED
License         USER PROVIDED
```

## Step 6 Register

Registry ID 생성.

---

# 11. Progressive Contract UI

```text
MODEL COMPLETENESS 63%

✓ Input / Output
✓ Units
✓ Execution
○ Valid Range
○ Uncertainty
✓ Source
○ Calibration
```

표현은 반드시 분리한다.

```text
This model can run.
This model is not yet safe for unrestricted DSE.
```

---

# 12. Design Space Builder

```text
Variables
TIM Thickness      10 ───────── 50 µm
Die Thickness      30 ───────── 80 µm
Power Density      20 ───────── 80 W/cm²
Cooling Temp       20 ───────── 40 °C

Objectives
Minimize junction_temperature
Minimize warpage

Constraints
TIM ≤ 50 µm
Tmax ≤ 90 °C
```

---

# 13. Fidelity Route Builder

```text
ALL 1000
   ↓
L1 Analytical
   ↓ top 10%
100
   ↓
User Python
   ↓ top 20
20
   ↓
HF Solver / Table
   ↓
5
   ↓
Experiment
```

각 Stage Inspector:
- evaluator
- selection rule
- cost
- runtime
- confidence
- validity

---

# 14. Bandi 위치와 행동

Bandi는 오른쪽 Context Rail에서 현재 선택 객체를 읽는다.

예:

```text
Selected
User Thermal Model

Bandi
이 모델은 junction_temperature를 직접 출력하지만
warpage는 출력하지 않습니다.

현재 목적함수에 warpage가 포함되어 있으므로:
1. warpage 모델 연결
2. HF table의 warpage 사용
3. objective 비활성화
```

구조를 변경할 때는 반드시 Action Preview:

```text
Proposed Actions
+ Add HF Table evaluator
+ Map thermal.junction_temperature
+ Select top 20 candidates

Expected effect
Estimated high-fidelity evaluations: 20

[Apply] [Edit] [Reject]
```

---

# 15. Run 화면

```text
DSE RUN #1042

Stage 1
1000 / 1000 complete ✓

Stage 2
100 / 100 complete ✓

Stage 3
17 / 20 running...

Cost
LLM       0 calls
Python    1,100 evals
HF Lookup 17 evals

Warnings
2 candidates outside Model B validity
```

---

# 16. Result Explorer

필수 View:
- Candidate Table
- Scatter
- Pareto Frontier
- Model Disagreement
- Fidelity Comparison
- Experiment Gap

초기에는 3D 시각화보다 2D + Table을 우선한다.

---

# 17. Candidate Inspector

```text
Candidate #042

TIM          24 µm
Die          55 µm
Power        46 W/cm²
Cooling      25 °C

L1           78.1°C
User         82.4°C
HF           83.0°C
Measured     82.7°C

Validity
L1    VALID
User  VALID
HF    IN-DOMAIN

Disagreement
L1 → HF   +4.9°C
User → HF +0.6°C

Recommendation
KEEP
```

---

# 18. Research X-Ray

메뉴:
- Lineage
- State
- Model
- Evidence
- Validity
- Fidelity
- Impact

## Lineage

```text
Candidate #042
    ↓
Analytical Thermal
    ↓
User Python
    ↓
HF Table row 187
    ↓
Measurement HBM-008
    ↓
Calibration v1
```

## Quantity

```text
thermal.junction_temperature

Producers
- Analytical Model
- User Thermal Model
- HF Table
- Measurement

Current Authority
Measurement HBM-008

Consumers
- Reliability Model
- Objective Function
- Result Chart
- Bandi Snapshot
```

---

# 19. Model Disagreement

```text
Candidate     L1     User     HF     Exp
#042          78.1   82.4     83.0   82.7
#057          80.2   84.0     84.5   —
#081          79.9   83.8     84.2   —
```

목적:
- model drift
- systematic bias
- calibration
- high-fidelity promotion

---

# 20. Supervisor / Operations Console

사용자 위의 감시 계층은 감시 자체보다 **Research Governance / Operations**로 설계한다.

메뉴:
- Portfolio
- Projects
- People
- AI Activity
- Models
- Runs
- Experiments
- Cost
- Alerts
- Approvals

## Portfolio

```text
HBM Thermal
Health        GOOD
Runs          24
Models        5
Experiments   8
Warnings      1

Cryogenic Etch
Health        WARNING
Runs          32
Models        7
Experiments   12
Warnings      4
```

## Project Health

```text
Model Contract         92%
Quantity Mapping       96%
Validity Coverage      81%
Experimental Coverage  42%
Golden Coverage        68%
Trace Completeness    100%

Warnings
▲ 2 models validity unknown
▲ 11 candidates extrapolated
▲ 1 dataset missing units
```

---

# 21. AI Activity Monitor

보여줄 것:
- model onboarding
- semantic mapping
- research goal parse
- action proposal
- final interpretation

숨겨진 chain-of-thought는 표시하지 않는다.

```text
17:21 Bandi
Action Proposal
Add Model HF_Table_01

Grounding
Model Registry
Design Space
Current Run

Result
User approved
```

---

# 22. Cost Monitor

```text
AI COST

Today
Onboarding      34%
Semantic Map    18%
Research Plan   21%
Explanation     27%

DSE Evaluation
LLM Calls       0

Cache Hit
86%
```

비용은 user / project / model / agent / solver 별로 drill-down 가능해야 한다.

---

# 23. Approval Queue

승인이 필요한 Action:
- External Solver execution
- Large-cost Run
- Model Contract promotion
- Calibration promotion
- Shared Lab Model publish
- Delete model
- Canonical mapping 변경

---

# 24. Doctor

Doctor = 규칙 기반 시스템 진단기 + 해석 layer.

검사:
- broken model
- missing mapping
- contract drift
- failed run
- invalid range
- orphan quantity
- unused model
- stale calibration
- high LLM cost
- repeated solver failure

```text
DOCTOR

HIGH
Model "Thermal_v3" output unit changed
°C → K
3 downstream mappings affected

MEDIUM
HF_Table_01 has no points above 70 W/cm²

INFO
Model onboarding cache hit rate 91%
```

---

# 25. R&D Westworld

개발자용 내부 관제실.

핵심 질문:
- 이 값은 어디서 생성됐는가?
- 누가 소비하는가?
- 어떤 Action이 실행됐는가?
- 어떤 Snapshot을 AI가 봤는가?
- 어느 Contract가 깨졌는가?
- 어떤 Test가 이 연결을 잠그는가?

메뉴:
- Overview
- System Circuit
- Runtime Graph
- Flight Recorder
- Trace Replay
- Contracts
- Engine Harness
- Golden / Fuzz
- Coverage
- Performance / Cost
- Doctor
- Pack Diagnostics

---

# 26. Static Graph vs Runtime Graph

```text
Static Graph
코드·스키마·레지스트리상 예상 연결

Runtime Graph
실제 실행 중 관측된 연결
```

Diff 상태:
- DEAD EDGE
- SHADOW EDGE
- ORPHAN STATE
- UNGUARDED CONSUMER
- UNGUARDED ACTION
- UNUSED EYE FIELD
- CONTRACT DRIFT

---

# 27. Westworld Overview

```text
SYSTEM HEALTH

Model Registry      ●
Quantity Registry   ●
DSE Engine          ●
Model Runner        ▲
LLM Mapper          ●
Trace Store         ●
Experiment Import   ●

Contracts
PASS 124
WARN 7
FAIL 2

Runtime
Runs 1,382
Failed 3
```

---

# 28. System Circuit UI

```text
[Model Registry]
      ↓
[Quantity Bus]
      ↓
[DSE Engine]
      ↓
[Model Runner]
      ↓
[Result Store]
      ↓
[UI]
      ↓
[Bandi Snapshot]
```

노드 Inspector:
- reads
- writes
- runtime calls
- errors
- tests
- owners
- schema
- source symbol

---

# 29. Blast Radius

```text
thermal.junction_temperature

Direct Consumers
- Objective Engine
- Reliability Model
- Result Explorer
- Bandi Snapshot

Indirect
- Recommendation
- Project Health
- Report

Tests
- quantity-contract
- dse-golden
- xray-lineage
```

---

# 30. Flight Recorder

```text
17:21:01 user.goal_submitted
17:21:02 bandi.goal_parsed
17:21:02 design_space.created
17:21:04 dse.started
17:21:05 model.l1.executed
17:21:08 candidate.promoted
17:21:11 model.user.executed
17:21:14 hf.lookup
17:21:18 result.completed
```

---

# 31. Trace Detail

```text
Trace ID
Session ID
Project ID
Actor
Event Type
Input Ref
Output Ref
State Before
State After
Schema Version
Prompt Version
Model Version
Duration
Cost
Status
Error
```

---

# 32. Trace Replay

Run을 시간순으로 재생한다.

```text
00:00 ───────────────────────── 01:42
```

재현:
- Canvas State
- Candidate State
- Model Status
- Bandi Action
- Warning
- Cost
- State Diff

---

# 33. Engine Review Harness

Westworld 내부의 개발 하네스.

목적:

> **Model Runner / Adapter / DSE / Contract / Mapping을 작은 Fixture로 즉시 시험한다.**

Layout:

```text
┌ Input Fixture ──────────────┐
│ JSON / Form / Scenario      │
└─────────────────────────────┘

┌ Execution ──────────────────┐
│ Model A → Adapter → Model B │
└─────────────────────────────┘

┌ Output ─────────────────────┐
│ States / Result / Trace     │
└─────────────────────────────┘

┌ Assertions ─────────────────┐
│ PASS / FAIL                 │
└─────────────────────────────┘
```

---

# 34. Model Harness

```text
Input
power_density 46
tim_um        24
die_um        55
cooling       25

Output
junction_temperature 82.4
thermal_resistance    1.24
```

Assertions:
- finite
- deterministic
- unit compatible
- output contract
- valid range
- no hidden side effect

---

# 35. Adapter Harness

단위 변환:

```text
82.4 °C
→ CelsiusToKelvin
→ 355.55 K
PASS
```

물리 Adapter:

```text
radical_density
→ transport adapter
→ surface_flux
```

---

# 36. DSE Harness

작은 candidate set으로:
- candidate generation
- range validation
- ranking
- stage promotion
- fidelity routing
- result lineage
- deterministic repeatability

검사.

---

# 37. Model Onboarding Harness

동일 파일 반복 입력으로:
- parser determinism
- contract draft structural stability
- mapping confidence
- cache hit
- manual approval persistence

검증.

LLM 산문 exact match가 아니라 JSON Schema와 불변식으로 검사한다.

---

# 38. Golden UI

```text
GOLDEN CASES

HBM-THERMAL-001      PASS
HBM-THERMAL-002      PASS
MODEL-IMPORT-001     PASS
MAPPING-UNIT-001     FAIL
CALIBRATION-001      PASS
```

클릭:
- Expected
- Actual
- Diff
- Code Version
- Model Version
- Prompt Version

---

# 39. Fuzz UI

무한 조합은 전수 대신 법칙을 잠근다.

대상:
- Random Model Contract
- Random Quantity Mapping
- Random Candidate
- Random Fidelity Route
- Random Action Sequence

불변식:
- crash 0
- NaN 0
- Inf 0
- invalid unit connection 0
- unowned state 0
- broken lineage 0

---

# 40. Coverage Cloud

Coverage 축:
- Model Type
- Quantity
- Fidelity
- Design Variable
- Validity Region
- Adapter
- UI Consumer
- Domain Pack

예:

```text
Thermal / table / L3      dense
Thermal / experiment      medium
Mechanical / surrogate    thin
Plasma / external solver  gap
```

---

# 41. UI Consumer Verification

새 State가 생기면 소비자 연결을 검사한다.

```text
thermal.junction_temperature

Engine               ✓
Result Store          ✓
Scatter               ✓
X-Ray                 ✓
Bandi Snapshot        ✓
Supervisor Health     ✓
Report                ✓
```

새 소비자에는 새 법칙 그물이 있는지 확인한다.

---

# 42. Snapshot Inspector — Bandi Eyes

```text
BANDI EYES

Project
Goal
Selected Candidate
Connected Models
Warnings
Current State
Allowed Actions

Token Size
3,842
```

AI 응답과 Snapshot을 나란히 비교 가능하게 한다.

---

# 43. Action Bus Inspector

허용 Action 예:
- add_model
- connect_quantity
- create_design_space
- run_dse
- promote_candidate
- compare_models
- attach_measurement
- create_calibration

Action마다:
- permission
- reversible
- approval_required
- validation
- recent execution
- failures

---

# 44. Runtime Status Board

개발 검증과 런타임 안전망은 같은 코어를 사용한다.

연구자 화면:

```text
PROJECT STATUS

Design Space          READY
Model Connections     READY
Validity              WARNING
Experiment Coverage   PARTIAL
AI Action             READY
```

클릭하면 X-Ray로 이동.

---

# 45. 오류 UX

오류를 다음으로 구분한다.

- MODEL ERROR
- CONTRACT ERROR
- VALIDITY ERROR
- MAPPING ERROR
- SOLVER ERROR
- AI INTERPRETATION ERROR
- EXPERIMENT DATA ERROR

예:

```text
Cannot evaluate Candidate #57

Reason
User Thermal Model is outside validated range.

Power density
82 W/cm²

Model Valid Range
20–70 W/cm²

Options
[Skip Candidate]
[Allow Extrapolation]
[Use L1 Model]
[Add Another Model]
```

---

# 46. 사용자 오류 vs 개발자 오류

Researcher:

```text
이 후보는 현재 모델의 검증범위를 벗어났습니다.
```

Developer:

```text
VALIDITY_INTERSECTION_FAIL
model=user_thermal_v3
quantity=thermal.power_density
value=82
range=[20,70]
```

---

# 47. Frontend State Architecture

```text
UI State
- selected panel
- zoom
- drawer
- sort

Scientific State
- model
- quantity
- candidate
- result
- measurement
- calibration

Runtime State
- running
- queued
- failed
- trace

AI State
- snapshot
- proposal
- approval
```

Scientific truth는 frontend store가 소유하지 않는다. 서버/엔진이 truth source다.

---

# 48. Frontend Store

```text
stores/
├── uiStore
├── workspaceStore
├── modelStore
├── quantityStore
├── designSpaceStore
├── runStore
├── experimentStore
├── validationStore
├── traceStore
└── bandiStore
```

---

# 49. Component Architecture

```text
src/scientificWorkspace/
├── shell/
├── workspace/
├── canvas/
├── models/
├── onboarding/
├── designSpace/
├── runs/
├── results/
├── experiments/
├── xray/
├── supervisor/
├── westworld/
├── harness/
├── bandi/
└── shared/
```

Shared:
- ModelCard
- QuantityBadge
- ValidityBadge
- FidelityBadge
- ConfidenceBadge
- StateInspector
- ContractPanel
- TraceTimeline
- DiffViewer
- CostBadge
- WarningPanel
- ActionPreview
- ApprovalDialog
- LineageGraph
- RuntimeStatus

---

# 50. Graph 재사용 원칙

Research Canvas와 Westworld Graph는 같은 렌더링 컴포넌트를 재사용할 수 있다.

하지만 데이터 의미는 다르다.

```text
Research Canvas
사용자가 연구 구조를 조작

Westworld Graph
시스템이 실제로 어떻게 연결됐는지 관찰
```

Graph source를 섞지 않는다.

---

# 51. UI Design Language

Research Workspace:
- 밝고 깨끗함
- 실험노트와 engineering CAD의 중간
- 작업 중심

X-Ray:
- transparency / lineage
- confidence / validity 강조

Supervisor:
- 운영 대시보드
- 상태·위험·비용 중심

Westworld:
- engineering console
- graph / trace / diff 중심
- 장식보다 진단성

Semantic Color:
- Green = VALID / PASS
- Amber = WARNING / PARTIAL / EXTRAPOLATED
- Red = FAIL / BROKEN
- Blue = MODEL / SYSTEM
- Purple = AI / Bandi
- Gray = UNKNOWN / UNUSED

---

# 52. v0.1 구현 View

Researcher:
1. Project Home
2. Model Import
3. Contract Review
4. Model Registry
5. Research Canvas
6. Design Space Builder
7. Run Progress
8. Result Explorer
9. Candidate Inspector
10. X-Ray Lineage

Supervisor:
11. Project Health
12. AI / Cost Monitor

Developer:
13. Westworld Overview
14. Trace Detail
15. Model Harness
16. Golden Result

총 16개 View.

---

# 53. v0.1 Researcher Demo Flow

```text
Project Open
↓
Python Model Import
↓
Contract Review
↓
Registry
↓
Canvas 배치
↓
CSV HF Model 연결
↓
Experiment Data 연결
↓
Design Space 생성
↓
Fidelity Route
↓
DSE Run
↓
Result
↓
Candidate X-Ray
↓
Measurement 추가
↓
Calibration
```

---

# 54. v0.1 Developer Demo Flow

```text
Westworld
↓
Run #1042
↓
Trace
↓
Model A 실행
↓
Quantity mapping
↓
Candidate promotion
↓
HF lookup
↓
Result lineage
↓
Harness에서 Model B 재실행
↓
Golden comparison
```

---

# 55. v0.1 Supervisor Demo Flow

```text
Portfolio
↓
HBM Project
↓
Health Warning
↓
Validity Coverage
↓
Extrapolated Candidates
↓
Run #1042
↓
Researcher / Bandi Actions
↓
Approval History
↓
Cost
```

---

# 56. Telemetry 필수 항목

첫날부터 저장:
- Audit Event
- Action Log
- Agent Tool Trace
- Research Snapshot
- State Diff
- Model Contract Version
- Quantity Mapping Version
- Prompt Version
- Model Version
- Golden Result
- Evidence Reference
- Approval
- Cost
- Latency

---

# 57. Frontend에서 절대로 하지 않을 것

1. UI가 scientific result를 재계산
2. Bandi가 임의 숫자 생성
3. Graph를 손으로 복제해서 이중관리
4. Validity를 숨기고 결과만 표시
5. UNKNOWN을 자동으로 VALID 처리
6. 숨겨진 chain-of-thought 노출
7. 모든 복잡성을 한 화면에 몰기
8. 사용자 UI에 개발자 raw log 그대로 노출

---

# 58. Acceptance Criteria — Research Workspace

- 모델 하나를 5분 내 등록
- Contract UNKNOWN을 명시
- 모델 두 개 연결
- Design Space 생성
- DSE 실행
- fidelity별 결과 비교
- 실험데이터 연결
- lineage 확인

---

# 59. Acceptance Criteria — Supervisor

- 프로젝트 상태를 30초 내 파악
- 실패 Run 확인
- LLM 비용 확인
- validity gap 확인
- Bandi Action 기록 확인
- 승인 내역 확인

---

# 60. Acceptance Criteria — Westworld

1분 안에 답할 수 있어야 한다.

- 이 값은 어디서 생성됐는가?
- 누가 소비하는가?
- 어떤 모델 버전인가?
- 어떤 mapping을 거쳤는가?
- 왜 이 candidate가 승격됐는가?
- 어떤 Action이 실행됐는가?
- 어떤 Snapshot을 AI가 봤는가?
- 어느 Contract가 깨졌는가?
- 어떤 테스트가 이 연결을 잠그는가?

---

# 61. 개발 우선순위

## Phase F0 — Shell / Contract UI
- Global Shell
- Model Library
- Import
- Contract Review
- Registry

## Phase F1 — Research Execution
- Canvas
- Design Space
- Fidelity Route
- Run
- Results

## Phase F2 — X-Ray
- Lineage
- Quantity
- Validity
- Model Disagreement

## Phase F3 — Control Plane
- Supervisor
- Cost
- AI Activity
- Approval
- Doctor

## Phase F4 — Developer Observatory
- Westworld Overview
- Trace
- Harness
- Golden
- System Circuit

## Phase F5 — Advanced
- Blast Radius
- Coverage Cloud
- Trace Replay
- Pack Diagnostics
- Prompt Regression

---

# 62. 최종 구조

```text
                    SEMIFAB SCIENTIFIC AI WORKSPACE
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
        RESEARCHER             SUPERVISOR          DEVELOPER
             │                    │                    │
             ▼                    ▼                    ▼
        Workspace            Operations            Westworld
             │                    │                    │
             ├─ Models            ├─ Projects          ├─ System
             ├─ Canvas            ├─ Health            ├─ Runtime
             ├─ DSE               ├─ AI                ├─ Contract
             ├─ Results           ├─ Cost              ├─ Trace
             └─ X-Ray             └─ Approval           └─ Harness
             │                    │                    │
             └────────────────────┴────────────────────┘
                                  │
                           SAME SCIENTIFIC CORE
                                  │
               Model Registry / Quantity / State / DSE
                                  │
                        Trace / Validation / Audit
```

---

# 63. 최종 정의

> **SemiFab Scientific AI Workspace의 프론트엔드는 단순 DSE Dashboard가 아니다. 연구자가 모델을 조립하고 탐색하는 Workspace, 연구책임자가 진행·AI·비용을 감시하는 Supervisor Console, 개발자가 엔진·계약·Trace를 검증하는 Westworld Harness가 같은 Scientific Core를 바라보는 다층 연구 운영환경이다.**
