// 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환하는 함수
// 문자열을 발견하지 못하면 -1 반환

let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate"); // 21

let str1 = "Please locate where 'locate' occurs!";
let pos1 = str.indexOf("locate", 15); // 15번째 index부터 찾기 시작
