# SemiFab Scientific AI Workspace
## DSE Orchestra 가이드 문서
### Bring your models. Connect them. Explore what to try next.

---

# 1. 문서 목적

이 문서는 SemiFab R&D 확장의 제품 방향을 **Scientific AI Workspace + Multi-Model DSE Orchestra**로 정리한 가이드다.

제품의 핵심 목적은 연구자에게 새로운 단일 시뮬레이터를 강요하는 것이 아니다.

> **연구자가 이미 보유한 이론·수식·Python/MATLAB 코드·오픈소스 모델·상용 시뮬레이터 결과·실험 데이터를 하나의 연구공간에 연결하고, 설계공간을 탐색하며, 다음 계산 또는 실제 실험을 선택할 수 있게 하는 것**

SemiFab은 모든 계산을 직접 수행하는 Solver가 아니라, 다양한 모델과 데이터를 연결하고 탐색 전략을 실행하는 **Scientific AI Workspace**다.

---

# 2. 문제 정의

실제 연구실에는 이미 많은 자산이 존재한다.

- 논문 속 이론과 수식
- 연구실 내부 Python / MATLAB 코드
- GitHub·공개 저장소의 오픈소스 모델
- COMSOL / ANSYS / TCAD 등 상용 Solver
- Excel 기반 경험식
- 장비 로그와 Recipe
- SEM / OES / PL / I-V 등의 실험 데이터
- 실험 데이터 기반 Surrogate
- 연구자의 경험적 판단

문제는 이들이 서로 다른 형식과 의미체계를 사용하며 분리되어 있다는 점이다.

```text
Model A ─┐
Model B ─┤
COMSOL ──┤
TCAD ────┤      서로 연결되지 않음
Excel ───┤
Experiment ─┘
```

SemiFab은 이를 다음과 같이 바꾼다.

```text
Raw Scientific Assets
        ↓
Model Onboarding
        ↓
Model Contract
        ↓
Validation
        ↓
Model Registry
        ↓
State / Quantity Mapping
        ↓
DSE Orchestra
        ↓
Design Space Exploration
        ↓
High-Fidelity Simulation / Experiment
        ↓
Calibration & Learning
```

---

# 3. 제품 정체성

## 3.1 상위 제품명

**SemiFab Scientific AI Workspace**

## 3.2 핵심 엔진

**SemiFab DSE Orchestra**

> Semiconductor Multi-Fidelity Exploration Engine

## 3.3 제품 한 줄 설명

> **Bring your models, simulations and experimental data into one design space.**

한국어:

> **자체 모델·시뮬레이터·실험 데이터를 연결해 다음 설계와 실험을 탐색하는 연구환경**

---

# 4. SemiFab이 아닌 것

SemiFab은 다음 제품을 직접 대체하려 하지 않는다.

- COMSOL 대체 PDE Solver
- TCAD 대체 소자 Solver
- ANSYS 대체 구조/열 Solver
- ELN 대체 기록 시스템
- 범용 논문 검색 AI

대신 이 도구들을 **연결 가능한 연구 자산**으로 취급한다.

```text
COMSOL
TCAD
ANSYS
Python
MATLAB
Open Source
Surrogate
Experiment
    ↓
SemiFab Orchestra
```

---

# 5. 핵심 개념 — DSE

DSE는 Design Space Exploration의 약자다.

사용자는 먼저 연구 목적과 탐색공간을 정의한다.

```text
Objective
Constraint
Design Variable
Candidate
```

예: HBM thermal exploration

```text
Objective
- Tmax 최소화
- Warpage 최소화

Variables
- Die thickness
- TIM thickness
- TSV pitch
- Power density
- Cooling condition

Constraints
- Package height
- Manufacturable pitch
- Maximum junction temperature
```

SemiFab은 이 설계공간을 여러 수준의 모델로 탐색한다.

---

# 6. 핵심 개념 — Multi-Fidelity

모든 후보에 가장 비싼 Solver를 사용할 필요는 없다.

```text
100,000 candidates
        ↓
Fast reduced model
        ↓
10,000 candidates
        ↓
Surrogate
        ↓
500 candidates
        ↓
COMSOL / TCAD / ANSYS
        ↓
20 candidates
        ↓
Real Experiment
```

Fidelity는 예를 들어 다음과 같이 분류할 수 있다.

```text
L0  Prior / Empirical Model
L1  Reduced / 0D Physics
L2  Surrogate
L3  High-Fidelity External Solver
L4  Experiment-Calibrated Model / Real Experiment
```

핵심은 정확도 하나가 아니라 **비용·속도·적용범위·신뢰도에 따라 모델을 배치하는 것**이다.

---

# 7. Orchestra의 역할

DSE가 “어디를 탐색할 것인가”라면 Orchestra는 다음을 결정한다.

> **이 후보를 무엇으로 평가할 것인가?**

Orchestra가 관리하는 것:

- Model Registry
- Model Fidelity
- Valid Range
- State Mapping
- Unit Mapping
- Model Cost
- Confidence
- Execution Adapter
- Experimental Data
- Calibration
- Dependency Graph

전체 흐름:

```text
Research Goal
    ↓
Design Space
    ↓
DSE Planner
    ↓
Orchestra
├─ Reduced Physics
├─ User Model
├─ Open-source Model
├─ Surrogate
├─ COMSOL
├─ TCAD
├─ ANSYS
└─ Experimental Data
    ↓
Candidate Evaluation
    ↓
Optimizer
    ↓
Promising Region
    ↓
Higher Fidelity
    ↓
Experiment
    ↓
Calibration
```

---

# 8. 연구자의 모델은 어떤 형태여도 된다

입력 형태는 다양하다.

## Theory / Equation
- 논문의 식
- analytical equation
- empirical equation
- reduced order relation

## Executable Code
- Python
- MATLAB
- Julia
- C/C++
- notebook
- command line program

## External Solver
- COMSOL
- ANSYS
- Sentaurus
- Silvaco
- custom institutional solver

## Data Model
- CSV
- Excel
- DOE table
- lookup table
- response surface
- surrogate

## Experiment
- measurement data
- equipment logs
- metrology results
- calibrated response

중요한 것은 내부 구현이 아니라 **SemiFab과 연결할 최소한의 계약**이다.

---

# 9. Model Onboarding

모델을 SemiFab에 넣는 과정은 다음과 같다.

```text
Raw Model
    ↓
Deterministic Parser
    ↓
LLM Semantic Interpretation
    ↓
Model Contract Draft
    ↓
User Review
    ↓
Validation
    ↓
Model Registry
```

핵심 원칙:

> **LLM을 parser로 사용하지 않는다.**

가능한 정보는 deterministic parser가 먼저 추출한다.

### 코드
AST / static analysis:
- function
- arguments
- returns
- imports
- type hints

### 문서
- equation candidate
- parameter table
- method section
- assumptions
- stated validity

### 결과파일
- column
- unit
- parameter sweep
- metadata

LLM은 의미론적 판단만 담당한다.

예:
```text
"T"가 무엇인가?
→ wafer temperature?
→ gas temperature?
→ electron temperature?
```

---

# 10. Progressive Model Contract

모든 모델을 처음부터 완전하게 구조화하지 않는다.

첫 등록:

```text
Known
- Input
- Output
- Unit
- Execution

Unknown
- Valid range
- Uncertainty
- Assumption
```

필요할 때 점진적으로 채운다.

```text
Model imported
↓
DSE 사용 시도
↓
Validity 정보 필요
↓
논문/사용자에게 확인
↓
Contract 강화
```

이를 **Progressive Model Contract**라 정의한다.

---

# 11. Model Core Contract

모든 모델이 최소한 공유하는 공통 규격은 작아야 한다.

```text
Identity
Interface
Execution
Validity
Provenance
Confidence
```

권장 최소 필드:

```yaml
model:
  id:
  name:
  type:
  version:

inputs: []
outputs: []

execution:
  type:

validity:
  status:

source:
  type:
  reference:

confidence:
  status:
```

---

# 12. 타입별 확장 Schema

Core는 작게 유지하고 세부 내용은 extension으로 추가한다.

```text
core.model
├── equation.extension
├── executable.extension
├── solver.extension
├── surrogate.extension
├── experiment.extension
├── physics.extension
├── device.extension
└── packaging.extension
```

---

# 13. State / Quantity Contract

서로 다른 모델을 연결하려면 출력과 입력의 의미를 맞춰야 한다.

```text
Model A: ne
Model B: electron_density
Model C: plasma_density
```

Canonical Quantity 예:

```yaml
quantity_id: plasma.electron_density
unit: m^-3
spatial_basis: volume_average
reference_region: bulk_plasma
```

한 번 승인된 mapping은 저장하여 다시 LLM을 호출하지 않는다.

---

# 14. Adapter

모델 연결은 단순 이름 연결이 아닐 수 있다.

```text
volume radical density
↓
transport model
↓
surface radical flux
```

Adapter 종류:
- unit conversion
- basis conversion
- interpolation
- transport relation
- calibration mapping
- temporal resampling
- feature transformation

---

# 15. Validity

모델은 항상 적용가능 범위를 가진다.

```text
Model A range
∩ Model B range
∩ Hardware range
∩ Material range
= Valid Exploration Region
```

상태:
- VALID
- PARTIAL
- EXTRAPOLATED
- UNKNOWN
- INVALID

SemiFab은 “계산 가능”과 “믿을 수 있음”을 분리한다.

---

# 16. 실제 실험의 역할

실험은 단순 결과 저장이 아니다.

```text
Model Prediction
vs
Real Measurement
↓
Difference
↓
Calibration
↓
Updated Confidence
↓
Next DSE
```

---

# 17. LLM의 정확한 역할

LLM의 역할은 세 가지로 제한한다.

1. Model Onboarding
2. Semantic Mapping
3. Research Strategy

반복 계산은 LLM이 수행하지 않는다.

---

# 18. 비용 구조

절대 피해야 할 구조:

```text
DSE 후보 1개 → LLM
다음 후보 → LLM
10,000 candidates → 10,000 LLM calls
```

권장 구조:

```text
User Request
↓
LLM planning 1회
↓
Deterministic DSE Engine
↓
10,000 model executions
↓
Rule / Optimizer
↓
중요한 전환점에서만 LLM
↓
Final interpretation
```

한번 생성된 Model Contract, Quantity Mapping, Adapter Mapping, Validity Rule은 캐시하고 재사용한다.

---

# 19. MiniFab과의 연결

기존 MiniFab:

```text
Equipment
→ Recipe
→ Wafer State
→ Measurement
```

Scientific AI Workspace:

```text
Model / Equipment / Solver
→ Design Variable
→ Evaluation
→ Sample / Device / Package State
→ Measurement
→ Calibration
```

---

# 20. 활용 분야

### Process DSE
- Etch
- Deposition
- Annealing
- Cleaning
- CMP

### Device / Structure DSE
- transistor
- sensor
- MEMS
- quantum device
- photonic device

### Package / System DSE
- HBM
- chiplet
- 2.5D / 3D IC
- thermal
- warpage
- reliability

장기적으로:

```text
Process
↓
Device
↓
Package
↓
System
```

---

# 21. 연구자가 느껴야 하는 가치

> **“우리 모델을 버리고 새로운 플랫폼 모델을 써야 하는 것이 아니다.”**

대신:

> **“우리가 이미 가진 모델을 그대로 가져와 다른 모델·상용 Solver·실험데이터와 연결할 수 있다.”**

그리고:

> **“전체 설계공간을 빠른 모델로 먼저 탐색하고, 중요한 후보에만 비싼 계산과 실제 실험을 사용할 수 있다.”**

---

# 22. 제품 검증 질문

> **“지금 연구실에서 쓰는 자체 모델·오픈소스 코드·상용 시뮬레이터·실험 데이터를 하나의 연구공간에 연결하고, AI가 어떤 모델을 언제 쓸지 선택하며 다음 계산 또는 실험까지 설계해준다면 실제 연구에 쓰시겠습니까?”**

좋은 신호는 “좋네요”가 아니다.

다음 질문이 나오면 강한 신호다.

- 우리 MATLAB 코드도 되나요?
- COMSOL 결과만 연결해도 되나요?
- 모델 두 개 결과가 다르면 어떻게 하나요?
- 우리 장비 데이터로 보정할 수 있나요?
- 어떤 모델이 더 신뢰도가 높은지 보여주나요?

---

# 23. 개발 철학

1. 모든 Solver를 직접 만들지 않는다.
2. 모든 과학을 하나의 거대한 Schema로 표현하지 않는다.
3. Core Contract는 작게 유지한다.
4. 분야별 extension으로 확장한다.
5. 한번 승인된 의미 mapping은 재사용한다.
6. LLM은 고부가가치 판단에만 사용한다.
7. 반복 실행은 deterministic core가 담당한다.
8. 모델의 유효범위와 uncertainty를 숨기지 않는다.
9. 실제 실험은 calibration과 model selection에 사용한다.
10. 검증된 자산이 쌓일수록 Workspace의 가치가 증가해야 한다.

---

# 24. 최종 정의

> **SemiFab Scientific AI Workspace는 연구자가 가진 다양한 과학모델·시뮬레이터·실험데이터를 공통 Model Contract로 연결하고, Multi-Fidelity DSE를 통해 가장 효율적인 계산·설계·실험 경로를 탐색하는 반도체 연구개발 환경이다.**
