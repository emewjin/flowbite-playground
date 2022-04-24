리액트 가상돔 업데이트시 플로우바이트 미작동 문제로 인해 공식 출시 전까지 무기한 보류


## React router dom 6
- Switch가 Routes로 바뀜
- exact 삭제

## flowbite를 react에 적용하기
https://flowbite.com/docs/getting-started/react/

- 개발중이니 기다려달라
- 기다리는 동안 js 버전을 class -> className으로 바꿔서 사용해달라. 이것만 바꾸면 된다.


### 느낀점
#### 04.20 
요약 : 부정적인 첫 인상
- className 너무 길어서 정신이 혼미하다
- html이 한 눈에 안 들어온다

=> ui 컴포넌트들을 진짜 잘게 잘게 쪼개야한다. 근데 다 너무 잘게 쪼개는건 좋지않다고 생각. 아니면 주석을 다 쓰던가

- 어떻게 인터랙션이 발생하는건지 이해가 안 간다
- aria 라벨을 적극 사용하고 있어 접근성 측면에선 긍정적

## flowbite 컴포넌트
- 레이아웃은 무료 버전이라 없는건가?

### 네비게이션
- 이슈
  - react-dom과의 충돌 : svg 관련 프로퍼티
  ```
  //react-dom.development.js:67
  Warning: Invalid DOM property `fill-rule`. Did you mean `fillRule`?

  Warning: Invalid DOM property `clip-rule`. Did you mean `clipRule`?
  ```
### 모달
- 사용법 : 아래 두 개가 필수인데 까먹더라도 `Flowbite JavaScript` will still set it up for you as a fallback.
  - `data-modal-toggle="modalId"` data attribute를 꼭 넣어야 한다. modalId는 보여줄 모달의 아이디.
  - `aria-hidden="true"` 도 꼭 넣어주어야 한다. 그래야 기본적으로 모달이 숨김처리 되고, 플로우바이트가 모달이 숨겨졌는지 안 숨겨졌는지 알 수 있음

- 이슈 : route 변경 이후 모달이 동작하지 않음 - 이거 다른 컴포넌트도 마찬가지인듯
  - 리액트 버전이 정식 출시되면 해결될 문제인데 이걸 지금 우리가 해결하는데 시간을 써야 하나? 아깝다
  - 분명한 에러 상황인데 콘솔에 찍히는 것도 없다........
  - 같은 이슈로 보이는 것을 발견 : https://github.com/themesberg/flowbite/issues/86
