# SemiFab Model Packaging Prompt

아래 자료를 SemiFab Model Submission Bundle v0.1로 변환하라.

## 입력 자료

- 논문, 기술문서, 수식, 코드, CSV 또는 실험 설명
- 사용자가 명시한 목적과 적용 범위

## 출력 규칙

1. `schemas/`와 `examples/tim-kT/` 구조를 따른다.
2. 다음 파일을 생성한다.
   - `manifest.json`
   - `model.json`
   - `quantities.json`
   - `validity.json`
   - `evidence.json`
   - `test-vectors.json`
3. 출처에 없는 사실, parameter range 또는 validation 결과를 만들어내지 않는다.
4. 불명확한 값은 `null`로 두고 `open_questions`에 기록한다.
5. 문헌에 등장했다는 이유만으로 `VALIDATED`를 사용하지 않는다. 기본값은 `UNVERIFIED` 또는 `REPORTED`다.
6. SI 단위 또는 명시적인 변환 규칙을 사용한다.
7. 사용자 코드가 있으면 entry point, input/output shape, dependency를 선언한다.
8. 모델이 유효한 조건과 외삽 조건을 분리한다.
9. 라이선스와 재배포 권한을 알 수 없으면 `license: UNKNOWN`으로 기록한다.
10. 기본 visibility는 `private`다.

## 완료 전 자체 검사

- 모든 quantity에 canonical name과 unit이 있는가?
- governing relation과 실제 구현이 구분됐는가?
- evidence와 claim이 분리됐는가?
- test vector가 최소 하나 존재하는가?
- model modification 시 validation downgrade가 필요한가?

출력 후 사용자에게 다음 명령을 안내하라.

```powershell
semifab-packager validate <bundle-directory>
semifab-packager pack <bundle-directory> <name>.sfbundle
```

