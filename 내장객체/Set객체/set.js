// Set 객체는 배열처럼 값들의 집합.
// 중복 값을 허용하지 않음, 유일한 값을 보장

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 이미 1이란 값이 저장되어 있기 때문에 추가되지 않음
mySet.size; // 3

// 데이터가 저장되어 있는지 확인
mySet.has(1); // true

// 특정 데이터 삭제
mySet.delete(2);

// 저장되어 있는 모든 데이터 한 번에 삭제
mySet.clear();

// 모든 데이터를 읽을 때 forEach() 사용
mySet.forEach((item) => console.log(item));
