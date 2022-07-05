// Object에서는 변수에 할당된 값을 키로 치환해서 사용X
let firstName = "John";
let lastName = "Doe";

let person = {
  firstName: firstName,
  lastName: lastName,
};
// {firstName: 'John', lastName: 'Doe'}

// Object Literal Syntax Extension 문법을 사용하면
// Object의 키로 변수에 할당된 문자열 값을 사용할 수 있게 됨
// 이때 키를 대괄호([])안에 넣어주면 이때의 키는 할당된 변수 값을 의미

let type = "student";

let score = {
  // 변수에 할당된 값을 Object의 키로 사용
  [type]: "John",
  score: 95,
};
