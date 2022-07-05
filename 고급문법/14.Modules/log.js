// Modules
// 분리된 각각의 자바스크립트 파일이고 각 파일은 특정한 목적을 가진 여러 개의 함수로 구성된 라이브러리

// export - export 지시자를 변수나 함수 앞에 붙이면 다른 외부 모듈에서 해당 변수나 함수를 import해서 사용할 수 있다
// import - import 지시자를 사용해서 다른 외부 모듈을 가져와서 사용할 수 있다.
export function log(message) {
  console.log(message);
}

export function error(message) {
  console.error(message);
}
