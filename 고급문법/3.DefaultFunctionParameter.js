function say(message) {
  if (message != undefined) {
    // 파라미터에 값이 전달되었는지 확인
    console.log(message);
  } else {
    console.log("파라미터가 넘어오지 않았어요");
  }
}

say(); // 파라미터 값을 전달하지 않음

// Default Function Parameter
// 함수 호출 시 파라미터가 전달되지 않았을 시 사용할 기본값을 설정하는 기능

function say2(message = "파라미터가 넘어오지 않았어요") {
  // 기본값이 파라미터에 선언되어 있어서 함수를 호출할 때 파라미터 값을 전달하지 않아도 사용할 수 있음
  // 파라미터 값이 전달되지 않으면, 기본값인 "파라미터가 넘어오지 않았어요"을 출력하게 됨
  console.log(message);
}

say2(); // 파라미터 값을 전달하지 않음
