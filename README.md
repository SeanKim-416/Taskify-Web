# 👨🏻‍💻 **Taskify**

## 서비스 소개

## Taskify | 스마트하게 나의 일정을 관리해보자

> 깃허브 링크 : https://github.com/SeanKim-416/Taskify-Web
>
> 데모 사이트 : https://taskify-web-five.vercel.app/


### 개발 동기
부트캠프를 진행하며 교육활동 공지 및 팀 활동을 위한 수강생용 디스코드 채널이 존재하나,
카테고리별로 산발적으로 주요 내용이 올라와 한눈에 보기 어려운 문제가 있었습니다.

대부분의 주요 공지 및 활동에 대한 내용들은 팀 단위로 공통된 다는 점에서,
대시보드 단위로 한눈에 보기 편하도록 정리하면 좋겠다는 아이디어에서 착안하였습니다.

### 프로젝트 참여자

- SeanKim 본인 : 개발 환경 구축, 배포 및 개발
- 문다님 : 팀장 및 개발
- 이나경 : 깃 전략 수립 및 개발
- 정성원 : 개발
- 정다희 : 개발

### 프로젝트 기간

#### 2024.1.25 ~ 2024.2.14

## 🛠️ 기술 스택
- SeanKim이 개발한 쉴드 메이커 서비스를 통해 제작된 뱃지입니다.

### 개발 환경
<img src='https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=typescript&logoColor=white&color=3178C6' alt='badge' /> <img src='https://img.shields.io/badge/Next.js-white?style=for-the-badge&logo=nextdotjs&logoColor=white&color=000000' alt='badge' /> <img src='https://img.shields.io/badge/ESLint-white?style=for-the-badge&logo=eslint&logoColor=white&color=4B32C3' alt='badge' /> <img src='https://img.shields.io/badge/Airbnb-black?style=for-the-badge&logo=airbnb&logoColor=black&color=FF5A5F' alt='badge' /> <img src='https://img.shields.io/badge/Prettier-black?style=for-the-badge&logo=prettier&logoColor=black&color=F7B93E' alt='badge' />
### 버전 관리
<img src='https://img.shields.io/badge/Git-white?style=for-the-badge&logo=git&logoColor=white&color=F05032' alt='badge' /> <img src='https://img.shields.io/badge/GitHub-white?style=for-the-badge&logo=github&logoColor=white&color=181717' alt='badge' />

### 배포
<img src='https://img.shields.io/badge/Vercel-white?style=for-the-badge&logo=vercel&logoColor=white&color=000000' alt='badge' />

### 사용 라이브러리
<img src='https://img.shields.io/badge/Sass-black?style=for-the-badge&logo=sass&logoColor=black&color=CC6699' alt='badge' /> <img src='https://img.shields.io/badge/React Hook Form-black?style=for-the-badge&logo=reacthookform&logoColor=black&color=EC5990' alt='badge' /> <img src='https://img.shields.io/badge/svgr-black?style=for-the-badge' alt='badge' /> <img src='https://img.shields.io/badge/classnames-black?style=for-the-badge' alt='badge' /> <img src='https://img.shields.io/badge/Axios-white?style=for-the-badge&logo=axios&logoColor=white&color=5A29E4' alt='badge' />

## ⚙️ 동작 기능
### 랜딩 페이지

![스크린샷 2024-02-20 오전 11 09 41](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/9de383db-c620-4258-a151-be1ebe48e6ec)

서비스에 대한 간단한 설명을 제공하는 페이지입니다.


### 로그인 페이지(/signin)
![스크린샷 2024-02-20 오전 11 10 28](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/b65f2273-b7d1-4950-89a2-13585250f1e8)

기존에 생성한 계정을 통해 로그인 할 수 있는 페이지입니다.
- 로그인 성공시 내 대시보드 페이지로 이동합니다.

### 회원가입 페이지(/signup)
![스크린샷 2024-02-20 오전 11 10 46](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/99a85375-f583-4066-b012-c3ebe97c156e)

새로운 계정을 만들 수 있는 페이지입니다.
- 회원가입 성공 시 로그인 페이지로 이동합니다.

### 내 대시보드 페이지(/mydashboard)
![스크린샷 2024-02-20 오전 11 13 38](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/48c295a3-184b-442b-ad12-9bb8113afa78)

내 대시보드들을 볼 수 있는 페이지입니다.
- 가입된 대시보드에 접근할 수 있습니다.
- 새로운 대시보드를 만들 수 있습니다.
- 초대받은 대시보드들을 볼 수 있습니다.

### 대시보드 상세 페이지(/dashboards/:id)
![스크린샷 2024-02-20 오전 11 15 06](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/9a2d435c-394c-4376-9945-5144ff6627a7)
![스크린샷 2024-02-20 오전 11 17 06](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/e29a8226-f5d6-4f31-bbcc-828a2cfc2589)

접근이 허가된 멤버들만 볼 수 있는 대시보드 내용입니다.
- 카드 형식으로 할 일을 올릴 수 있으며, 자유롭게 칼럼 CRUD, 할일 CRUD를 제공합니다.
- 할일 카드를 클릭시 할일에 대한 정보를 자세히 볼 수 있으며, 댓글을 통해 의견을 공유할 수 있습니다.

### 대시보드 관리 페이지(/dashboards/:id/edit)
![스크린샷 2024-02-20 오전 11 19 01](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/37143d5a-b77b-4291-a2b0-53d5ff8f140b)

대시보드의 주인만 접근할 수 있는 페이지입니다.
- 대시보드 이름을 변경할 수 있습니다.
- 멤버를 추방 또는 초대할 수 있습니다.

### 계정 관리 페이지(/mypage)
![스크린샷 2024-02-20 오전 11 19 28](https://github.com/SeanKim-416/Taskify-Web/assets/56223156/1dc5fcd7-8518-4964-adc2-7e33c2e87eb3)

내 계정을 관리 할 수 있는 페이지입니다.
- 비밀번호를 변경할 수 있습니다.
- 프로필 사진, 닉네임을 변경할 수 있습니다.
