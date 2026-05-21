# 팀 배포 가이드

로컬 커밋은 완료되었습니다. **GitHub에 push**하면 Actions가 자동으로 Pages에 배포합니다.

## 1단계: GitHub 저장소 만들기

1. https://github.com/new 접속
2. Repository name 예: `commerce-dashboard` (Public 권장 — Pages 무료)
3. **README / .gitignore 추가하지 않음** (이미 로컬에 있음)
4. Create repository

## 2단계: push (PowerShell)

```powershell
cd "c:\Users\han_jiwoong\Desktop\cursor\need"

git remote add origin https://github.com/woong1-cloud/NEED.git
git push -u origin main
```

## 3단계: GitHub Pages 켜기

1. 저장소 → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Actions 탭에서 `Deploy GitHub Pages` 워크플로가 초록색으로 끝나면 완료

## 팀 공유 URL

```
https://woong1-cloud.github.io/NEED/
```

또는

```
https://woong1-cloud.github.io/NEED/commerce_dashboard_report_detail.html
```

## 시트 권한 (필수)

[데이터 시트](https://docs.google.com/spreadsheets/d/1yialQ3E-BoqLcr9WSjncdVpf0KkDgLYWS8xq9tOw6Z8/edit) → **공유 → 링크가 있는 모든 사용자 · 뷰어**

## 업데이트 방법

코드 수정 후:

```powershell
git add -A
git commit -m "update: 대시보드 수정 내용"
git push
```

push 후 1~2분 뒤 Pages URL 새로고침하면 반영됩니다.
