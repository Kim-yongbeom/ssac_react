# ssac_react

- node module : node.js module folder
- public : 실제 브라우저에 표시되는 리소스들이 저장되는 폴더
- src : html 파일에 반영된 콘텐츠, 기능이 구현되어 있는 파일들이 저장되어 있는 폴더
- index.html <= index.js <= App.js(component)

## react

https://ko.reactjs.org/

## React의 특징

- Virtual DOM
- SPA(Single Page Application)
- component : 작은 단위로 나누어준 코드 블럭(단위, 조각)

### JSX(Javascript Syntax Extension / Javascript XML)

- HTML 마크업 언어를 별다른 기호 사용없이 그대로 Javascript 구문처럼 사용할 수 있는것
- Bable.js 라이브러리가 JSX를 사용 가능하게 해줌
- JSX는 return 키워드 ()안에 입력을 하게 될때 하나의 Element 영역으로 그룹화 되어있어야 함
- 하나의 영역으로 그룹화 할 때 특정 Element로 그룹화 해서 반영하지 않을 때 -Fragment 사용
- JSX에서 Javascript 변수 값 사용하기
    - {변수이름}
- JSX에서 class와 id 지정하기
    - class => className 속성 사용
    - id => id 속성 사용
- JSX 주석 : {/* 주석내용 */}

### 구조 분해 할당



### Todo Markup
https://dev.to/hariramjp777/todo-app-using-html-css-and-js-local-storage-design-html-and-css-1m0j

### Todo Component

- header
- main
    - todo-list
        - todo-item
    - status
- footer


### React에서 css를 작성/사용하는 방식

- App.css에 전체 css를 구성하고 전역으로 사용하는 방식
- module css 방식 : css를 하나로 구성하지 않고 component별로 구성
    - component와 css 파일이 분리되어 있음
    - 작성 방법
        - 폰트 설정, reset css 등...은 App.css에 전역으로 사용
        - 하나의 요소를 선택해서 css를 적용하는 경우 module css로 활용
- styled-component : 스타일링된 컴포넌트 => component별로 css를 구성
    - 인라인 방식처럼 사용 => component 파일에 css, component, contents 같이 작성
    - Internal 방식으로 렌더링됨
