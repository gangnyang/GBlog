# GBLOG

개인 소개와 게시글 소개에 초점을 둔 개발 블로그의 초기 구조입니다.

## 추천 폴더 구조

```text
GBLOG/
├─ frontend/        # Next.js + TypeScript + Tailwind CSS
├─ backend/         # Spring Boot + JPA
└─ README.md
```

프론트엔드와 백엔드를 물리적으로 분리해서 시작합니다. 지금 단계에서는 게시글 조회만 다루고, 관리자/인증/댓글/검색 같은 기능은 넣지 않았습니다.

## 현재 포함된 기능

- Home 페이지
- About 페이지
- Posts 목록 페이지
- Post 상세 페이지
- 게시글 목록 조회 API
- 게시글 상세 조회 API
- MySQL 기반 게시글 엔티티와 최소 테이블 구조
- 프론트엔드에서 백엔드 API 연동

## 실행 전 준비

### 1. MySQL 데이터베이스 준비

아래 예시처럼 로컬 MySQL에 데이터베이스를 준비합니다.

```sql
CREATE DATABASE gblog
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

### 2. 환경 변수 설정

백엔드 기본값은 아래와 같습니다.

- `DB_URL=jdbc:mysql://localhost:3306/gblog?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8`
- `DB_USERNAME=root`
- `DB_PASSWORD=root`

프론트엔드는 `frontend/.env.local`을 만들고 아래 값을 넣으면 됩니다.

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

## 실행 방법

### Backend

Windows 기준:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

이 프로젝트의 `mvnw.cmd`는 로컬에 Maven이 없으면 Maven 3.9.9를 내려받아 실행합니다.

### Frontend

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.
로컬 개발 기준으로만 구성했습니다.

## API

- `GET /api/posts`
- `GET /api/posts/{slug}`

## 다음 단계 제안

- 게시글 작성 방식을 DB 입력 대신 Markdown 또는 관리자 화면으로 확장
- 소개 영역과 게시글 카드 디자인 보강
- 운영 환경을 고려한 환경 변수 분리와 예외 응답 정리
