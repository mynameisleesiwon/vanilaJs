const regexp = /World/;

const regexp2 = new RegExp("World");

let str = "Hello World! world!";
const re = /World/; // 문자열에 World에 대응되는 문자열을 찾는 패턴 정의
console.log(re.test(str)); // test 함수를 통해 대응되는 문자열이 있으므로 true 반환
console.log(str.search(re)); // 6 - String 객체의 내장 함수인 search 함수에 정규식을 적용해서 대응되는 문자열이 발견되면 인덱스 번호 반환

// 반드시 010으로 시작하고, 그 다음 하이픈(-), 숫자 4자리, 하이픈(-), 숫자 4가지가 차례대로 입력된 형식
const regexp_mobile = /^(010)-\d{4}-\d{4}$/;
console.log(regexp_mobile.test("010-5575-6208")); // true

// 이메일 주소가 올바른 형식인지를 체크하는 정규식
// ^([a-z]+\d*) : 반드시 알파벳 소문자로 시작하고 숫자는 0회 이상
// (\.?\w+)+ 는 점(.)은 없거나 1번만 사용할 수 있고
// 뒤에하나 이상의 문자가오고, @은 반드시 @가 있고
// \w+ 하나 이상의 문자가 오고
// (\.\w{2,3})+는 점(.)과 2~3개의 문자가 1회 이상 반복되어 종료한다는 것을 의미
const regexp_email = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
console.log(regexp_email.test("seoil1221@gmail.com"));
