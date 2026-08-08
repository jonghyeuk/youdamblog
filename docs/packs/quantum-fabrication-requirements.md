# Quantum Device Fabrication Pack — Equipment Requirements

마지막 업데이트: 2026-08-08  
입력 출처: 사용자 제공 양자소자 공정 장비 목록

## Pack 방향

Quantum Device Pack은 소자 방정식만 계산하는 Pack이 아니라 다음 네 계층을 연결한다.

```text
Device Physics
    ↓ 요구 geometry/material
Process Flow
    ↓ 공정 step과 허용 window
Equipment Capability
    ↓ 실제 장비의 resolution/material/damage/throughput
Metrology & Evidence
    ↓ 측정값으로 model calibration/validation
```

첫 vertical은 기존 상태 문서의 권장안대로 `Superconducting Josephson Junction / Transmon`을 사용한다. 이후 quantum dot과 다른 소자 유형은 별도 Pack으로 분리한다.

## 장비군과 역할

### 1. Lithography

#### E-beam Lithography I & II

- Josephson junction, nanowire, sub-micron constriction 등 초미세 critical layer
- Pack capability 항목: 최소 CD, overlay, field stitching, resist stack, dose window, proximity correction, write time
- DSE 연결: junction area, linewidth, overlay error, dose variation, throughput

#### I-line Stepper II

- 4-inch wafer의 resonator, ground plane, feedline, pad, alignment mark 등 반복 정밀 layer
- Pack capability 항목: wafer size, exposure wavelength, minimum CD, overlay, field size, focus/exposure window
- Junction critical layer와 coarse layer를 구분해야 한다.

#### Maskless Lithography

- 빠른 prototype, test structure, coarse routing, process split
- Pack capability 항목: minimum feature, alignment accuracy, write speed, resist/process compatibility
- nm-scale junction pattern의 기본 장비로 가정하지 않는다.

### 2. Deposition / Growth

#### Superconductor ALD

- 원자층 수준 thickness control과 conformal film이 필요한 초전도체 또는 관련 박막 후보
- Pack capability 항목: material, precursor, substrate temperature, growth-per-cycle, thickness uniformity, impurity, stress, superconducting transition data
- 모든 superconducting qubit에 필수인 장비로 가정하지 않는다. 실제 material stack에 따라 선택한다.

#### LT-HDPCVD

- 저온 절연막/passivation 형성
- Pack capability 항목: film material, deposition temperature, plasma damage proxy, thickness, uniformity, stress, dielectric loss evidence
- 양자소자에서는 단순 막질뿐 아니라 interface loss와 plasma damage 근거가 필요하다.

#### E-beam Evaporator

- Al/Nb 등 금속·초전도 박막과 junction electrode 형성
- Pack capability 항목: material, base pressure, rate, angle, thickness, uniformity, in-situ oxidation capability, vacuum break
- Al/AlOx/Al junction vertical에서는 double-angle evaporation과 oxidation 조건이 핵심이다.

### 3. Dry Etch / Surface Treatment

#### Deep-Si Reactive Ion Etcher

- Through-wafer/trench, release, substrate isolation, packaging structure
- Capability 항목: depth, sidewall angle, selectivity, scallop/roughness, mask compatibility, damage
- 모든 qubit fabrication의 기본 step은 아니며 packaging·MEMS 구조에서 선택한다.

#### ICP Etcher I & II

- Metal, dielectric, superconducting film의 pattern transfer
- Capability 항목: supported materials, chemistry, bias/ICP range, etch rate, selectivity, sidewall, residue, surface damage
- Cryogenic Etch Pack의 plasma/etch submodel을 재사용할 수 있다.

#### Microwave Plasma Asher

- PR residue 제거와 surface preparation
- Capability 항목: chemistry, plasma power, process time, residue removal, oxide/interface modification, damage evidence
- 양자소자에서는 과도한 plasma exposure가 coherence에 영향을 줄 수 있으므로 clean과 damage를 함께 평가한다.

### 4. Analysis / Inspection

#### FIB III

- 단면 분석, failure localization, 제한적인 구조 수정
- Capability 항목: ion species, beam energy/current, milling resolution, redeposition, implantation/damage zone
- 기본 생산 flow가 아니라 `analysis/rework branch`로 모델링한다.
- FIB 처리된 양자소자는 원본과 같은 validation을 상속하지 않는다.

## 첫 Reference Process Flow

```text
01 Substrate preparation
02 Alignment / coarse layer lithography
03 Ground plane / resonator deposition or etch
04 E-beam critical junction lithography
05 Descum / surface preparation
06 Junction electrode deposition
07 Controlled oxidation / barrier formation
08 Second electrode / lift-off
09 Optional dielectric / passivation
10 Inspection and room-temperature electrical test
11 Dicing / packaging / wire bonding
12 Cryogenic measurement
```

장비 목록에는 7, 10, 11, 12 단계의 capability가 충분히 정의되지 않았다. 실제 Pack을 만들 때 다음 정보를 추가로 확보해야 한다.

- Controlled oxidation 또는 junction barrier 형성 조건
- Wet clean/lift-off capability
- Film thickness/roughness/composition metrology
- SEM/AFM/ellipsometry/profilometry
- Room-temperature junction resistance measurement
- Dicing, packaging, wire bonding
- Cryogenic microwave/electrical measurement

## Equipment Capability Contract

장비를 이름으로만 등록하지 않고 다음 contract로 저장한다.

```yaml
equipment_id: string
equipment_class: lithography | deposition | etch | clean | inspection
supported_materials: []
geometry_range: {}
process_window: {}
damage_proxies: {}
measured_quantities: []
calibration_status: REPORTED | BENCHMARKED | CALIBRATED | VALIDATED
last_calibrated_at: datetime
adapter: manual | csv | python | api
```

## Model Merge 예

Quantum Pack 추가 시 다음과 같이 모델을 흡수한다.

```text
Existing project: ICP Etch Recipe v3
Quantum Pack requires: Low-damage Metal Etch >= v1

Compatibility
  material        PASS
  CD range        PASS
  damage evidence MISSING

Decision
  REUSE WITH REVIEW
  ADD surface-damage validation gate
```

## DSE 변수와 목적함수

### 설계 변수

- Junction area
- Critical current density
- Oxidation dose/time/pressure proxy
- Electrode thickness
- Shunt/total capacitance
- Lithography dose and CD bias
- Etch/clean exposure

### 목적 및 제약

- Target transition frequency
- Target anharmonicity
- Junction resistance/yield
- CD and overlay robustness
- Fabrication variation sensitivity
- Surface/interface loss risk
- Process time and equipment cost

## 다음 작업

1. Josephson/Transmon Device Core Contract
2. 12-step Process Flow Contract
3. 장비 capability schema와 demo equipment registry
4. `device requirement → process step → equipment` mapping UI
5. 누락 capability와 incompatibility Decision Gate
6. 공정 variation을 device parameter distribution으로 전달하는 lineage

