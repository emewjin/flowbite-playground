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
### 모달
- 사용법 : 아래 두 개가 필수인데 까먹더라도 `Flowbite JavaScript` will still set it up for you as a fallback.
  - `data-modal-toggle="modalId"` data attribute를 꼭 넣어야 한다. modalId는 보여줄 모달의 아이디.
  - `aria-hidden="true"` 도 꼭 넣어주어야 한다. 그래야 기본적으로 모달이 숨김처리 되고, 플로우바이트가 모달이 숨겨졌는지 안 숨겨졌는지 알 수 있음