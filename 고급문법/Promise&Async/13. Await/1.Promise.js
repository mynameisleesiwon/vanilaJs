// 자바스크립트에서 비동기 처리에 사용되는 객체
// 비동기 처리
// : 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행할 수 있게 해주는 방식
const promise = new Promise((resolve, reject) => {
  if (/* 처리 성공 */ a) {
    resolve("결과 데이터");
  } else {
    reject(new Error("에러"));
  }
});

// XMLHttpRequest는 비동기 통신이고, 요청에 대한 응답이 없더라도 자바스크립트에 작성된 코드가 바로 실행
function getData() {
  // XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  // HTTP Method, URL 정의
  xhr.open("GET", "https://jsonplaceholder.typicode.com/post1/1");

  // 헤더 값 중 content-type 정의
  xhr.setRequestHeader("content-type", "application/json");

  // 요청 전송
  xhr.send();

  xhr.onload = () => {
    // 정상적으로 응답되면 status가 200
    if (xhr.status === 200) {
      // 응답 데이터를 JSON.parse함수의 JSON 객체로 변경
      const res = JSON.parse(xhr.response);
      console.log(res);
      return res;
    } else {
      // 에러 발생
      // 응답 상태와 응답 메세지 출력
      console.error(xhr.status, xhr.statusText);
      return;
    }
  };
}

// 함수 호출
const res = getData();

// 코드가 바로 실행되고, 이 시점에는 서버로부터 응답이 오지 않은 시점이기 때문에 undefined
console.log(res);
console.log("다음 코드를 실행합니다");

// Promise를 사용하면, 응답이 완료된 후 호출되는 then()함수를 통해 결과를 받고 나서 구현해야 할 코드를 작성
function getDataPromise() {
  // Promise 생성
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send();

    xhr.onload = () => {
      // 정상적으로 응답되면 status가 200
      if (xhr.status === 200) {
        // 응답 데이터를 JSON.parse함수의 JSON 객체로 변경
        const res = JSON.parse(xhr.response);
        resolve(res);
      } else {
        // 에러 발생
        // 응답 상태와 응답 메세지 출력
        console.error(xhr.status, xhr.statusText);
        reject(new Error(xhr.status));
      }
    };
  });
}

getDataPromise().then((res) => {
  console.log(res); // 서버 응답이 완료된 후 코드가 실행됨
  console.log("다음 코드를 실행합니다.");
});
