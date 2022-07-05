// local scope
// 함수 내에 선언된 변수는 함수 안에서 참조되며 함수 밖에서는 참조할 수 없다
// 이런 변수에 대한 접근성을 local scope라고 합니다

function myFunction() {
  let carName = "볼보";
  console.log(carName);
}

// 함수 내에서는 carName에 접근이 가능하기 때문에, carName에 할당된 값을 콘솔에 출력
myFunction();

// 에러
// 함수 내에서 선언된 carName은 함수 밖에서는 접근할 수 없으므로 에러
console.log(carName);

// global scope
// 함수 밖에서 선언된 변수는 함수 밖은 물론 함수 안에서도 참조할 수 있다
// 이런 변수에 대한 접근성을 global scope라고 한다.
let carName2 = "기아";

function myFunction2() {
  console.log(carName2);
}

// carName2는 global scope로 어디서든 접근이 가능, carName2에 할당된 값을 콘솔에 출력
myFunction2();
