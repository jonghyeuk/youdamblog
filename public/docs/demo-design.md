# SemiFab Scientific AI Workspace
## DSE Orchestra Demo v0.1 개발 설계서

---

# 1. 데모의 목적

이 데모의 목표는 완성형 Scientific AI Workspace를 만드는 것이 아니다.

다음 가설을 실제 동작으로 증명한다.

> **서로 다른 형태의 연구모델을 SemiFab에 가져와 공통 Contract로 등록하고, 두 개 이상의 모델과 실험 데이터를 연결해 작은 Design Space를 탐색할 수 있는가?**

데모 성공 기준:

```text
1. 사용자 모델 Import
2. Model Contract 자동 초안 생성
3. 사용자 확인
4. Model Registry 등록
5. 다른 모델과 연결
6. Design Space 정의
7. DSE 실행
8. 결과 비교
9. 실험 데이터 입력
10. Calibration / 재탐색
```

---

# 2. 데모 시나리오

첫 데모는 과도하게 복잡한 플라즈마 화학을 사용하지 않는다.

권장 시나리오:

## HBM Thermal Design Space Demo

이유:
- 연구자에게 직관적
- 시장성이 넓음
- 모델 연결 개념을 보여주기 좋음
- 0D / reduced model 구현이 쉬움
- 외부 Solver 결과파일을 mock으로 연결 가능
- 실험/고정밀 결과를 calibration 데이터로 표현하기 쉬움

---

# 3. 사용자 Story

사용자:

> “HBM stack의 최고 온도를 낮추고 싶은데 TIM을 너무 두껍게 하고 싶지 않다.”

SemiFab:

```text
Goal
Minimize Tmax

Constraint
TIM thickness <= 50 µm

Variables
- TIM thickness
- Die thickness
- Power density
- Cooling temperature
```

사용자는 자신의 Python thermal model을 업로드한다.

추가로:
- 공개된 간단한 analytical thermal model
- CSV 형태의 high-fidelity simulation results
- 몇 개의 experimental measurement points

를 등록한다.

SemiFab이 이를 연결해 DSE를 실행한다.

---

# 4. 데모 구성

```text
Scientific AI Workspace Demo

├── Model Import
├── Model Onboarding
├── Contract Editor
├── Model Registry
├── Quantity Registry
├── Adapter Registry
├── Design Space Builder
├── DSE Engine
├── Fidelity Planner
├── Result Explorer
├── Experiment Import
├── Calibration
└── Trace / Validation
```

---

# 5. Demo Model Set

## Model A — Analytical Thermal Model

입력:
- power_density
- thermal_resistance
- coolant_temperature

출력:
- junction_temperature

Fidelity:
```text
L0 / L1
```

## Model B — User Python Model

예:

```python
def hbm_thermal(power_density, tim_um, die_um, cooling_c):
    ...
    return {
        "junction_temperature": tj,
        "thermal_resistance": rth
    }
```

Fidelity:
```text
USER_MODEL
```

## Model C — High Fidelity CSV

COMSOL / ANSYS 결과라고 가정한 CSV.

```text
tim_um
die_um
power_density
cooling_c
junction_temperature
warpage
```

Fidelity:
```text
L3
```

## Model D — Experiment Data

```text
sample_id
tim_um
power_density
cooling_c
measured_temperature
```

Fidelity:
```text
L4 / MEASURED
```

---

# 6. Core Contract v0.1

```ts
type ModelContract = {
  id: string
  name: string
  type: "equation" | "python" | "table" | "experiment"

  inputs: QuantityRef[]
  outputs: QuantityRef[]

  execution: ExecutionContract

  validity?: ValidityContract
  source?: ProvenanceContract
  confidence?: ConfidenceContract

  extensions?: Record<string, unknown>
}
```

---

# 7. Quantity Contract

```ts
type QuantityRef = {
  quantityId: string
  label: string
  unit: string

  basis?: string
  region?: string
}
```

초기 Canonical Quantities:

```text
thermal.power_density
thermal.tim_thickness
geometry.die_thickness
thermal.coolant_temperature
thermal.junction_temperature
thermal.resistance
mechanical.warpage
```

---

# 8. Execution Contract

```ts
type ExecutionContract = {
  runner:
    | "native"
    | "python"
    | "table_lookup"
    | "experiment"

  entrypoint?: string
  file?: string
}
```

---

# 9. Progressive Contract

필수:
```text
id
name
type
inputs
outputs
execution
```

선택:
```text
validity
uncertainty
source
assumptions
fidelity
```

정보가 없으면:
```yaml
validity:
  status: UNKNOWN
```

---

# 10. Model Import 화면

```text
Drop your model

[Python]
[CSV]
[Equation]
[Experiment]
```

---

# 11. Deterministic Parser

## Python

Python AST로 추출:
- functions
- arguments
- returns
- imports
- docstrings
- constants

LLM에 원문 전체를 던지지 않는다.

## CSV

LLM 불필요.

추출:
- column names
- data types
- ranges
- missing values
- units if available

## Equation

v0.1에서는 사용자가 직접 식을 입력한다.

---

# 12. LLM Model Interpreter

LLM 입력:

```text
Parser 결과
+ file metadata
+ 사용자 설명
```

출력은 JSON Schema로 제한한다.

역할:
- 모델 타입 추정
- argument 의미 추정
- canonical quantity 후보
- output 의미 추정
- 불확실한 항목 표시

LLM은 자동 등록하지 않는다.

---

# 13. Contract Review UI

```text
Detected Model
────────────────────

hbm_thermal.py

Inputs
✓ power_density → thermal.power_density
✓ tim_um → thermal.tim_thickness
✓ die_um → geometry.die_thickness
? cooling_c → thermal.coolant_temperature

Outputs
✓ junction_temperature
✓ thermal_resistance

Validity
⚠ Not found

Confidence
Structure: HIGH
Semantics: MEDIUM

[Edit]
[Validate]
[Register Model]
```

---

# 14. Model Registry

```text
HBM Analytical v1
L1
Validated

User Thermal Model
USER MODEL
Validity Unknown

High Fidelity Table
L3
240 points

Experiment Data
L4
8 measurements
```

---

# 15. Design Space Builder

```text
TIM Thickness
10 – 50 µm

Die Thickness
30 – 80 µm

Power Density
20 – 80 W/cm²

Cooling
20 – 40°C
```

Objective:
```text
Minimize Junction Temperature
```

Constraint:
```text
TIM <= 50 µm
```

---

# 16. DSE Engine v0.1

v0.1:
- Grid
- Latin Hypercube
- Random

예:
```text
N = 1000 candidates
```

---

# 17. Fidelity Planner v0.1

LLM이 매 후보마다 판단하지 않는다.

결정적 Rule:

```text
Stage 1
All candidates
→ Model A

Stage 2
Top 10%
→ Model B

Stage 3
Top 20 candidates
→ Model C lookup

Stage 4
available experimental points
→ compare
```

Config:

```yaml
fidelity_plan:
  - evaluator: analytical
    fraction: 1.0

  - evaluator: user_python
    select: top_10_percent

  - evaluator: high_fidelity_table
    select: top_20
```

---

# 18. DSE 실행

```text
Generate Candidates
↓
Validate Input Range
↓
Stage 1 Model
↓
Rank
↓
Stage 2 Model
↓
Rank
↓
High Fidelity
↓
Result Store
```

각 결과에 기록:
```text
candidate_id
model_id
fidelity
inputs
outputs
execution_time
validity
```

---

# 19. 결과 화면

v0.1 필수:
```text
X = TIM Thickness
Y = Junction Temperature
Label = Fidelity
```

추가:
- candidate ranking
- best region
- model disagreement

---

# 20. Candidate Inspector

```text
Candidate #042

TIM          24 µm
Die          55 µm
Power        46 W/cm²
Cooling      25°C

Analytical     78.1°C
User Model     82.4°C
High Fidelity  83.0°C
Experiment     82.7°C

Difference
Analytical → HF: +4.9°C
User → HF: +0.6°C
```

---

# 21. Calibration Demo

```text
Measured Tj = 82.7°C
```

v0.1 calibration:
```text
T_calibrated = a × T_model + b
```

Calibration model도 Registry에 새 모델로 등록한다.

---

# 22. Trace

```text
Candidate 042
↓
Analytical Model v1
↓
User Python v3
↓
HF Table row 187
↓
Experiment Sample HBM-008
↓
Calibration v1
```

---

# 23. LLM 호출 지점

1. Model Import
2. Optional Semantic Mapping
3. 자연어 연구목표 → Objective / Variable / Constraint
4. 최종 설명

반복 DSE 동안 LLM 호출:
```text
0
```

---

# 24. 비용 제한

LLM 요청은 캐시한다.

```text
model_hash
parser_result_hash
contract_version
```

같은 모델을 다시 업로드하면 기존 Contract 사용.

Canonical mapping과 사용자 승인 mapping은 재사용한다.

---

# 25. Backend 구조

```text
apps/
└── scientific-workspace/

packages/
├── model-contract/
├── quantity-registry/
├── model-registry/
├── model-import/
├── python-parser/
├── table-parser/
├── semantic-mapper/
├── model-runner/
├── design-space/
├── dse-engine/
├── fidelity-planner/
├── result-store/
├── calibration/
└── scientific-westworld/
```

---

# 26. API

```http
POST /api/models/import
POST /api/models/{draft_id}/interpret
POST /api/models/register
POST /api/dse/spaces
POST /api/dse/runs
GET  /api/dse/runs/{id}
POST /api/dse/runs/{id}/measurements
```

---

# 27. 데이터 구조

```text
Model
Quantity
Mapping
Adapter
DesignSpace
Candidate
Evaluation
Measurement
Calibration
Trace
```

---

# 28. Westworld / Validation

## Contract Gate
- input/output 비어 있음 금지
- unit missing warning
- unknown quantity warning
- runner executable 확인

## DSE Gate
- NaN 0
- Inf 0
- invalid range 실행 금지
- 동일 input + 동일 model = 동일 output

## Mapping Gate
- incompatible unit 차단
- 승인 안 된 semantic mapping 경고

## Trace Gate
- 모든 Evaluation에 producer model 존재
- result lineage 추적 가능

---

# 29. Demo UI

메뉴:
```text
Workspace
Models
Design Space
Runs
Experiments
Trace
```

Workspace:

```text
왼쪽
Model Library

중앙
Model / Data Canvas

오른쪽
Inspector + Bandi
```

---

# 30. Bandi 역할

예:

> “현재 사용자 Python 모델은 4개의 입력과 2개의 출력을 노출합니다. 적용범위 정보는 발견되지 않았습니다. 우선 제한 없는 사용자 모델로 등록할 수 있지만, DSE 외삽 경고를 위해 범위를 지정하는 것을 권장합니다.”

결정적 엔진이 계산한 값만 설명한다.

---

# 31. 개발 단계

## Phase 0 — Skeleton
- Contract
- Quantity
- Registry
- basic UI

## Phase 1 — Python Import
- AST parser
- semantic interpretation
- Contract review

## Phase 2 — Table Import
- CSV
- lookup evaluator
- experiment

## Phase 3 — DSE
- design space
- candidate generation
- staged evaluation

## Phase 4 — Calibration
- measurement comparison
- simple correction model

## Phase 5 — Westworld
- contract
- range
- mapping
- lineage gates

---

# 32. 데모 완료 기준

```text
1. Python 파일 Drag & Drop
2. SemiFab이 입출력 구조 추출
3. AI가 의미 mapping 초안 생성
4. 사용자 승인
5. Model Registry 등록
6. CSV High Fidelity Model 등록
7. Experimental CSV 등록
8. Design Space 정의
9. 1000 candidate 생성
10. L1 → User Model → HF 단계 탐색
11. Top candidate 확인
12. 실제 측정값과 비교
13. Calibration 생성
14. 재실행
15. Trace에서 모든 경로 확인
```

---

# 33. v0.1에서 하지 않을 것

- COMSOL 실제 API 연결
- TCAD 실제 실행
- 임의 Python sandbox 완성
- 자동 논문 수식 실행
- 복잡한 multi-objective optimizer
- autonomous experiment execution
- 범용 science ontology
- 모든 모델 자동 validation

---

# 34. 성공 판단

연구자 데모 후 다음 질문이 나오는지 본다.

```text
“우리 코드도 넣을 수 있나?”
“우리 데이터는 어떤 형식이면 되나?”
“COMSOL을 붙일 수 있나?”
“모델 신뢰도는 어떻게 비교하나?”
“다음 실험을 추천할 수 있나?”
```

이 질문이 자연스럽게 나오면 제품 방향은 유효하다.

---

# 35. 이후 확장

```text
External Solver Adapter
├─ COMSOL
├─ ANSYS
├─ TCAD
└─ Custom API

Domain Packs
├─ Plasma
├─ Process
├─ Device
├─ HBM
├─ Packaging
└─ Thermal

DSE
├─ Bayesian Optimization
├─ Active Learning
├─ Multi-objective Pareto
└─ Cost-aware Fidelity Selection
```

---

# 36. 데모 제품 문구

**SemiFab Scientific AI Workspace**

> **Bring your models. Connect them. Explore what to try next.**

> Python, equations, simulation results and experimental data — connected in one design space.

한국어:

> **연구실의 모델과 데이터를 그대로 가져오십시오. SemiFab이 연결하고, 넓은 설계공간에서 다음 계산과 실험을 찾습니다.**
