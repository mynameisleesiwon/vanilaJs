// new Date()
let now = new Date(); // 사용자의 브라우저의 시간
console.log(now);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let d = new Date(2021, 6, 24, 10, 33, 30, 0); // 특정 날짜, 시간을 지정해서 Date 객체 생성
console.log(d);

// new Date(milliseconds)
let d2 = new Date(0); // 1970년 1월 1일
let d3 = new Date(100000000000); // 1970년 1월 1일 + 100000000000 = 대략 1973년 3월 3일

// new Date(date string)
let d4 = new Date("October 13, 2014 11:13:00"); // 날짜 문자열로 Date객체 생성
