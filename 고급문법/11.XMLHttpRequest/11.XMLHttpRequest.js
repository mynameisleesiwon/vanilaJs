// XMLHttpRequest(XHR) 객체는 서버와 상호작용하기 위해 사용
// 전체 페이지를 새로 고침하지 않아도 URL을 통해 데이터를 전송하거나 받아올 수 있다.
// 모든 종류의 데이터를 받아올 수 있음
// 브라우저에서 제공하는 Web API이기 때문에 브라우저 환경에서만 정상적으로 동작
// node.js 환경에서는 제공X

// 객체 생성
const xhr = new XMLHttpRequest();

// 요청 전송
// HTTP Method, URL 정의, 비동기 여부(기본 값 true)
// open() 함수에서 첫 번째 매개변수는 HTTP Method, 즉 HTTP 요청 방식
xhr.open("POST", "/posts");

// 헤더 값 중 content-type 정의
xhr.setRequestHeader("content-type", "application/json");

const data = {
  id: 2,
  title: "XHLHttpRequest",
  author: "Jeremy",
};

// JSON.stringify를 통해 오브젝트 데이터를 문자열 형태로 변경해서 전송
xhr.send(JSON.stringify(data));

// 응답 처리
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", "/posts");
xhr1.setRequestHeader("content-type", "application/json");
xhr1.send();

xhr1.onload = () => {
  // 정상적으로 응답되면 status가 200
  if (xhr1.status === 200) {
    // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
    const res = JSON.parse(xhr.response);
    console.log(res);
  } else {
    // 에러 발생
    // 응답 상태와 응답 메세지를 출력
    console.error(xhr.status, xhr.statusText);
  }
};
