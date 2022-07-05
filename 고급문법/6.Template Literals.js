function hello(name) {
  // 문자열을 더하기 기호를 사용해서 하나의 문자열로 합침
  console.log("Hello " + name + ". Welcome!");
}
hello("시원");

// Template Literals
// 변수에 할당된 문자열을 하나의 문자열로 병합할 때,
// 더하기(+)를 사용하지 않고 하나의 문자열로 만들 수 있도록 해줌

function hello2(name) {
  let name2 = "John";
  // ${변수명}을 사용하면 문자열 안에서 변수 값을 사용할 수 있게 해줌
  console.log(`Hello ${name2}. Welcome! ${name}`);
}
hello2("시원");
