// Object와 매우 유사. 키(key)와 값(value)을 맵핑시켜서 값을 저장하며 저장된 순서대로 각 요소에 접근 가능
let userMap = new Map();
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");
userMap.size;

userMap.get("name"); // 홍길동

// 특정 키의 값이 저장되어 있는지 확인
userMap.has("name"); // true

// 특정 데이터 삭제
userMap.delete("name");

// 모든 데이터 삭제
userMap.clear();

// 모든 데이터 읽을 때는 forEach() 함수 사용
userMap.forEach(function (item) {
  console.log(item);
});
