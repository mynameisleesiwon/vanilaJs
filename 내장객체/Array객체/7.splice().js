// 새로운 요소를 특정 위치에 추가, 추가 시에는 기존 요소를 삭제할 수도 있다.

// splice(새로운 요소를 추가할 인덱스 번호, 첫 번째 파라미터에 해당하는 인덱스에 요소를 추가하기 전에 삭제할 요소 수, 추가할 요소...)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
