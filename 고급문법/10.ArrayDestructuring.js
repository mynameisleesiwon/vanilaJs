function getScore() {
  return [70, 80, 90];
}

let scores = getScore();

let x = scores[0];
y = scores[1];
z = scores[2];

// Array Destructuring
// 배열에 저장된 요소를 분해해서 배열의 순서에 따라 변수를 정의해서 사용할 수 있게 해줌
let [a, b, c] = getScore();

// 위도, 경도 데이터를 반환받아 사용할 떄 가장 많이 씀
// getCoordinates() 함수는 위도, 경도정보를 제공하는 외부 라이브러리라고 가정
let coordinate = getCoordinates();
console.log(coordinate[0]); // 경도
console.log(coordinate[1]); // 위도

// Array Destructuring 사용
let [longitude, latitude] = getCoordinates();
console.log(longitude); // 경도
console.log(latitude); // 위도

// 데이터가 많을 경우 특정 요소는 바로 변수에 할당, 나머지 요소는 모두 배열에 할당
// q,w는 변수로 할당. 나머지는 args라는 배열에 할당
let [q, w, ...args] = getScore();

// 배열안에 배열이 있는 경우도 Array Destructuring을 사용해서 분해
function getProfile() {
  return ["John", "Doe", ["Red", "Green", "Blue"]];
}

let [firstName, lastName, [color1, color2, color3]] = getProfile();
