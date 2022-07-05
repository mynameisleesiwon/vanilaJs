// 숫자형 데이터를 문자형 데이터로 반환해주는 함수
let x = 123;
x.toString();
(123).toString();

let now = new Date();
let year = now.getFullYear(); // 현재 년도
// 1월인 경우 0 반환, 2월은 1을, 12월은 11을 반환하기 때문에 +1 해야함
let month = now.getMonth() + 1; // 현재 월
let day = now.getDate(); // 현재 일

console.log(
  year +
    "-" +
    month.toString().padStart(2, 0) +
    "-" +
    day.toString().padStart(2, 0)
);
