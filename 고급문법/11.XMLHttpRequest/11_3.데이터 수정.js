// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP Method, URL 정의
xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");

// 헤더 값 중 content-type 정의
xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");

// 요청 전송
xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));

xhr.onload = () => {
  // PUT 요청이 정상적으로 완료되면 200
  if (xhr.status === 200) {
    // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
    const res = JSON.parse(xhr.response);
    // 100개의 데이터를 받아옴
    console.log(res);
  } else {
    // 에러 발생
    // 응답 상태와 응답 메세지를 출력
    console.error(xhr.status, xhr.statusText);
  }
};
