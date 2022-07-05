// Object는 키-값 쌍으로 데이터
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// 데이터 변경 방법
person["age"] = 51;
person.age = 51;

// 데이터 가져오기
console.log(person["firstName"]);
console.log(person.firstName);
