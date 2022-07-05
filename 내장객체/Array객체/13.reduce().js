// 배열에 담긴 데이터를 하나씩 순회하며 callback 함수의 실행 값을 누적하여 결과값을 반환하는 함수
// 누적 결과값은 숫자, 문자, 객체 모두 가능
// 주로 배열에 담긴 데이터의 합계를 구하는 데 가장 많이 사용

let points = [40, 100, 1, 5, 25, 10];
// function(누적값,현재 배열의 요소, 인덱스 번호, 배열)
let sum = points.reduce(function (
  total /*누적값*/,
  currentValue /*배열 첫 번째 값부터 들어감*/
) {
  console.log(total);
  console.log(currentValue);
  return total + currentValue;
},
0 /*누적값 처음 값*/);
