// for-in
// 데이터 타입 중 배열뿐만 아니라 Object에도 사용할 수 있는 반복문
// Object 내에 정의된 키 값의 수만큼 코드 블록을 실행
let person = { fname: "john", lname: "doe", age: 25 };
// const key -> 0,1,2
for (const key in person) {
  console.log(person[key]);
}

// 배열에 사용하면 배열에 등록된 데이터 수만큼 반복문 실행
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
// consgt brand -> 0,1,2,3,4
for (const brand in brands) {
  console.log(brand); // 배열의 인덱스 번호 출력
}
