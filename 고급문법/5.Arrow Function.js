// 함수 선언식
function hello(name) {
  return "Hello " + name;
}
// 함수 표현식
const hello2 = function (name) {
  return "Hello " + name;
};
hello2("시원");

// Arrow Function(화살표 함수)
const hello3 = (name) => {
  return "Hello " + name;
};

// 파라미터가 하나만 있을 때는 주변 괄호를 생략할 수 있다.
const hello4 = (name) => {
  return "Hello " + name;
};

// 화살표 함수의 유일한 문장이 'return'일 때 'return'과 중괄호({})를 생략 가능
const hello5 = (name) => "Hello " + name;
