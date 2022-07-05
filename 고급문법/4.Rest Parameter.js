function sum(x1, x2) {
  // 파라미터를 2개만 전달 받을 수 있음
  let y = x1 + x2;
  return y;
}
sum(5, 7);

function sum2(x1, x2, x3, x4) {
  // 파라미터를 4개만 전달 받을 수 있음
  let y = x1 + x2 + x3 + x4;
  return y;
}
sum2(5, 7, 3, 9);

//Rest Parameter
// 파라미터로 몇 개의 파라미터가 전달될 지 모르는 경우 매우 유용하게 사용
// 이때 전달받은 파라미터 값은 배열로 저장
function sum3(...args) {
  // 파라미터를 이렇게 선언하면, 함수 호출시 파라미터를 개수에 상관없이 할당 할 수 있고,
  // 이렇게 할당된 값을 배열로 저장
  let total = 0;
  for (let x of args) {
    // 파라미터가 배열로 저장이 되기 때문에 for-of문을 사용해서 전달받은 파라미터 값을 모두 확인해야함
    total += x;
  }
  return total;
}
sum3(3, 2, 5, 7, 4, 23);
sum3(3, 2);
sum3(21, 17, 38);
