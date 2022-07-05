// 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수
// 이때 바꾸려는 문자열이 하나 이상 있더라도 처음 발견된 문자열만 바꾸게 됨
// 대소문자 구분함
let str = "Please visit Seoul and Seoul";
let n = str.replace("Seoul", "Jeju");

let str1 = "Please visit Seoul and Seoul";
let n1 = str1.replace(/Seoul/i, "Jeju"); // i -> insensitive의 약자로 대소문자를 구분하지 않겠다는 뜻
