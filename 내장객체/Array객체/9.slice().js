// 2개의 파라미터를 사용
// 첫 번째 파라미터는 시작 인덱스
// 두 번째 파라미터는 종료 인덱스, 생략 가능. 생략하면 시작 인덱스에서 마지막 배열 요소까지 잘라내서 배열형태로 반환
// 두 번째 파라미터를 사용하는 경우 종료 인덱스에 해당하는 요소는 반환하지 않는다.

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3); // [Apple, Mango]
let citrus2 = fruits.slice(1, 3); // [Orange, Lemon]
