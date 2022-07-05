// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP Method, URL 정의
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

// 헤더 값 중 content-type 정의
xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");

// 요청 전송
xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));

xhr.onload = () => {
  // 201 상태 코드는 요청이 성공적으로 처리되었으며, 자원이 생성되었음을 나타내는 성공 상태 응답 코드
  // 일반적으로 POST 요청에 대한 응답 결과로 사용
  if (xhr.status === 201) {
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
