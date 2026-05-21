# 커머스 지표 대시보드 (상세판)

구글 시트 실시간 연동 + 보고용 HTML 대시보드입니다.

## 팀 공유 URL (Railway — 권장)

Railway에 배포된 서비스 URL을 사용합니다. (저장소 연결 후 자동 배포)

- 메인: `https://<서비스명>.up.railway.app/`
- 상세판: `https://<서비스명>.up.railway.app/commerce_dashboard_report_detail.html`

Railway 대시보드 → **NEED** 서비스 → **Settings → Networking → Generate Domain** 으로 공개 URL을 발급하세요.

## GitHub Pages (보조)

**https://woong1-cloud.github.io/NEED/** (Settings → Pages에서 gh-pages 브랜치 설정 필요)

## 데이터 소스

- [스파오 주문데이터 시트](https://docs.google.com/spreadsheets/d/1yialQ3E-BoqLcr9WSjncdVpf0KkDgLYWS8xq9tOw6Z8/edit)
- 시트: `목표값`, `전년 비교`, `올해값`
- 컬럼: A일자 · B매출 · C주문 · D품목 · E유입 · F전환율 · G객단가

시트는 **링크가 있는 모든 사용자 · 보기** 권한이어야 합니다.

## 로컬 실행

```bash
# 백업 데이터 갱신 (선택)
node build_dashboard_data.js

# 브라우저에서 열기
npx serve . -p 3000
# http://localhost:3000/commerce_dashboard_report_detail.html
```

## GitHub에 올리고 Pages 배포

```bash
git remote add origin https://github.com/<ORG>/<REPO>.git
git push -u origin main
```

저장소 **Settings → Pages → Build and deployment → GitHub Actions** 선택 후, `main` 브랜치에 push하면 자동 배포됩니다.

## 주요 파일

| 파일 | 설명 |
|------|------|
| `commerce_dashboard_report_detail.html` | 메인 대시보드 |
| `dashboard_data.js` | 시트 실패 시 로컬 백업 |
| `build_dashboard_data.js` | CSV → 백업 생성 |
| `지표정의_계산기준.md` | 지표·비교 규칙 PRD |
