// 전역 함수로서 정수로 반환
// 문자열의 시작이 숫자형이면 숫자형 데이터를 반환
parseInt("-10"); // -10
parseInt("-12.33"); // -12
parseInt("10"); // 10
parseInt("12.33"); // 12
parseInt("10 20 30"); // 10
parseInt("10 years"); // 10
parseInt("years 10"); // NaN
