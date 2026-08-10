# SemiFab Model Packaging Kit v0.1

논문, 코드, CSV 또는 사내 모델을 SemiFab Private Registry에 올리기 전에 표준 Submission Bundle로 만드는 로컬 도구입니다.

## 설치

Node.js 18 이상이 필요합니다.

```powershell
Expand-Archive semifab-model-packaging-kit-v0.1.zip
cd semifab-model-packaging-kit-v0.1
npm.cmd install -g .
semifab-packager help
```

전역 설치 없이 사용할 수도 있습니다.

```powershell
node bin/semifab-packager.js validate examples/tim-kT
```

## 사용 흐름

```powershell
# 1. 빈 모델 템플릿 생성
semifab-packager init my-model

# 2. PACKAGING_PROMPT.md와 자료를 Codex/로컬 LLM에 제공

# 3. 구조·단위·test vector 검증
semifab-packager validate my-model

# 4. 단일 업로드 파일 생성
semifab-packager pack my-model my-model.sfbundle
```

## 중요한 상태 구분

CLI의 `PASS`는 시스템 호환성을 뜻할 뿐 과학적 정확도를 검증하지 않습니다.

```text
Compatibility: SCHEMA_VALID / EXECUTION_CHECKED
Scientific trust: UNVERIFIED / REPORTED / BENCHMARKED / CALIBRATED / VALIDATED
Visibility: PRIVATE by default
```

사용자 모델은 canonical Pack을 덮어쓰지 않고 project overlay 또는 derived model로 등록됩니다.

