# Firebase Storage 배포 오류 해결 기록

> 며칠을 소비한 끝에 해결한 이슈. 나중에 Storage 관련 작업할 때 반드시 참고할 것.

---

## 증상

GitHub Actions에서 `firebase deploy --only storage` 실행 시 아래 에러 반복 발생:

```
Error: Firebase Storage has not been set up on project 'youdammain'.
Go to https://console.firebase.google.com/project/youdammain/storage
and click 'Get Started' to set up Firebase Storage.
```

Firebase 콘솔에서 Storage 버킷(`gs://youdammain.firebasestorage.app`)이 **분명히 존재하는데도** 에러가 남.

---

## 원인

### 1. Firebase CLI의 구형 버킷 주소 탐색 문제

Firebase CLI는 기본적으로 **`youdammain.appspot.com`** 형식의 구형 버킷을 먼저 탐색한다.
신규 프로젝트(2024년 이후)는 **`youdammain.firebasestorage.app`** 형식을 사용하기 때문에
CLI가 구형 주소를 찾지 못하고 "Storage가 설정되지 않았다"고 판단해버림.

### 2. `firebase.json` 형식 오류 (진짜 핵심 원인)

`bucket` 필드를 추가해도 **`storage`가 object 형식이면 CLI 스키마에서 인식하지 못함**.

디버그 로그(`--debug`)로 확인한 경고:
```
Object "/storage" in "firebase.json" has unknown property: "bucket"
Field "/storage" in "firebase.json" is possibly invalid: must be array
```

`bucket` 필드가 **완전히 무시**되어, CLI는 계속 defaultBucket API를 호출하고 404를 받음:
```
GET https://firebasestorage.googleapis.com/v1alpha/projects/youdammain/defaultBucket
→ 404 NOT_FOUND
```

---

## 해결 방법

### `firebase.json` - storage를 **배열(array) 형식**으로 작성

```json
{
  "storage": [
    {
      "rules": "storage.rules",
      "bucket": "youdammain.firebasestorage.app"
    }
  ]
}
```

**절대 이렇게 쓰면 안 됨 (object 형식 → bucket 무시됨):**
```json
{
  "storage": {
    "rules": "storage.rules",
    "bucket": "youdammain.firebasestorage.app"
  }
}
```

### `.github/workflows/*.yml` - 최신 firebase-tools 사용

```yaml
- name: Install Firebase CLI
  run: npm install -g firebase-tools@latest
```

---

## 진단 방법 (다음에 비슷한 에러 나면)

워크플로우에 `--debug` 플래그를 붙여서 실행:

```yaml
- name: Deploy Storage Rules
  run: firebase deploy --only storage --project youdammain --debug 2>&1 | tee /tmp/storage-debug.log; exit ${PIPESTATUS[0]}

- name: Upload Debug Log
  if: always()
  uses: actions/upload-artifact@v4
  with:
    name: storage-debug-log
    path: /tmp/storage-debug.log
```

로그에서 확인할 것:
- `unknown property: "bucket"` → firebase.json 형식이 틀림 (array로 바꿀 것)
- `GET .../defaultBucket → 404` → bucket 지정이 무시되고 있는 것
- `GET .../appspot.com` → 구형 주소를 탐색 중인 것

---

## 핵심 요약

| 항목 | 내용 |
|------|------|
| 버킷 주소 | `youdammain.firebasestorage.app` (`gs://` 제외) |
| firebase.json 형식 | `storage`는 반드시 **배열(`[]`)** 형식 |
| CLI 버전 | `firebase-tools@latest` |
