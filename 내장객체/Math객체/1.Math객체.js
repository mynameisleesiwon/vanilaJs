// 수학적인 상수와 내장 함수를 가진 객체
// 다른 객체와 다르게 Math는 생성자가 아닌 숫자 자료형만 지원

// 반올림
Math.round(4.9); // returns 5
Math.round(4.7); // returns 5
Math.round(4.4); // returns 4
Math.round(4.2); // returns 4
Math.round(-4.2); // returns -4

// 올림
Math.ceil(4.9); // 5
Math.ceil(4.7); // 5
Math.ceil(4.4); // 5
Math.ceil(4.2); // 5
Math.ceil(-4.2); // -4

// 내림
Math.floor(4.9); // 4
Math.floor(4.7); // 4
Math.floor(4.4); // 4
Math.floor(4.2); // 4
Math.floor(-4.2); // -4

// 숫자가 양수인지 음수인지 확인
// 양수면 1, 음수면 -1, 0이면 0 반환
Math.sign(-4); // -1
Math.sign(0); // 0
Math.sign(4); // 1

// 제곱근 값 반환
Math.pow(8, 2); // 64

// 루트 값 반환
Math.sqrt(64); // 8

// 무적권 양수
Math.abs(-4.7); // 4.7

// 가장 작은 값, 가장 큰 값 반환
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150

// 0보다 크고 1보다 작은 숫자형 값 반환
Math.random();

Math.floor(Math.random() * 10); // 0과 9사이의 정수
Math.floor(Math.random() * 101); // 0과 100사이의 정수
Math.floor(Math.random() * 10) + 1; // 1과 10사이의 정수
