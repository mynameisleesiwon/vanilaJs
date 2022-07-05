fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT", // HTTP 요청방법
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    // 헤더 값 정의
    "content-type": "application/json; charset=UTF-8", // content-type 정의
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
