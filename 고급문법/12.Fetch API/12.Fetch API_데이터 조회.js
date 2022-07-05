// GET의 경우 따로 HTTP 요청 방법을 명시하지 않아도 된다

fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
  response.json().then((json) => console.log(json))
);
// 첫 번째 then() 함수는 서버 요청에 대한 응답이 왔을 때 실행
// 이때 응답받은 데이터는 문자열 형식이기 때문에 response.json()함수를 호출해서 json epdlxjfh qusruddmf tlfgod
// json 데이터로 변경이 완료되면 두 번째 then() 함수의 매개변수로 변경된 json 데이터를 전달
