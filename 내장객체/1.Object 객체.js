// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.firstName = "John";
person.lastName = "Doe";
person.age = 1200;
person.getFullName = function () {
  return this.firstName + "" + this.lastName;
};
console.log(person.getFullName());
