// 파라미터로 시작 위치와 종료 위치를 주면 문자열에서 해당 부분은 잘라내서 반환하는 함수

let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13); // 7부터 시작해서 13앞까지 자름

let res1 = str.slice(7); // 7부터 끝까지

let res2 = str.slice(-12); // 문자열의 끝에서부터 거꾸로 읽기
