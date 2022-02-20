# cryptotracker
study with Nomad Coders

React와 TypeScript를 사용해 만든 코인 시세 확인 웹페이지입니다.
'Nomad Coders'의 강의를 보며 만든 사이트에 추가적으로 몇가지 기능을 추가했습니다.

[cryptotracker](https://wjdgus541.github.io/cryptotracker/#/)

---

## React 챌린지(추가한 기능)
- 다크모드 토글버튼 추가(Recoil 사용)
- /:coinId 에서 뒤로가기 버튼 추가
- /:coinId/price 탭 추가
- /:coinId/chart 탭의 차트 CandleStick 차트로 변경

---

## 사용(공부)한 라이브러리
- react-query(useQuery) : Http 요청으로 받은 데이터를 간편하게 사용, 관리할 수 있게 해주는 라이브러리
- react-router-dom
- styled-components
- react-helmet : 페이지 별 타이틀을 동적으로 설정할 수 있게 해주는 라이브러리
- react-apexcharts : 차트를 보다 쉽게 그릴 수 있게 해주는 라이브러리. [공식 사이트](https://apexcharts.com/)


---

## 수정해야 할 부분
- 다크모드 토글버튼 온오프 상태 저장
- /:coinId/chart 탭의 차트 테마 변경

---

## 후기
- TypeScript를 사용하니 실수가 확실히 줄어서 편했다. 사용하기가 쉬운 것 같으면서도 헷갈리는 부분이 많다. 아직 자유롭게 사용할 정도는 되지 못한다.
- 다크모드 기능 구현을 어떻게 해야하는 지 몰라 애를 먹었는데 '전역 상태 관리'에 대해 알게 되었다. 사용하기 비교적 간단한 Recoil을 배울 수 있었다.
- react-router-dom에 대해 배우고 공부할 수 있었다.
- fetch()를 이용해 API를 요청하고 받은 데이터를 활용하는 방법을 배울 수 있었다.
