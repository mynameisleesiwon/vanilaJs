try {
  nonExistentFunction(); // 존재하지 않는 함수 호출
} catch (error) {
  console.error(error);
} finally {
  console.log(
    "try 코드 블록이 정상적으로 수행되든, 오류를 발생시키든 상관없이 무조건 실행해야할 코드 작성"
  );
}

// throw
// 의도적으로 예외 발생시킴

try {
  throw "myException"; // 예외를 의도적으로 발생시킴
} catch (e) {
  console.log(e); // myException
}
