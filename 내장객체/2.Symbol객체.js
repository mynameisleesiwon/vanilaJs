let person = {
  firstName: "jeremy",
  lastName: "Go",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

for (const key in person) {
  console.log(key); // fristName, lastName, getFullName 출력
}

console.log(person.getFullName()); // Jeremy go

// Symbol
// 자바스크립트에서 절대 충돌이 일어나지 않는 유일한 key값을 만들어줌
let person2 = {
  firstName: "Jeremy",
  lastName: "Go",
};

let getFullName2 = Symbol("getFullName2"); // 유일한 Key 생성
person2[getFullName2] = function () {
  return this.firstName + " " + this.lastName;
};

// 오브젝트의 key를 출력하면 firstName, lastName만 출력
// Symbol로 추가한 key를 노출시키지 않고 감출 수 있다.
for (const key in person2) {
  console.log(key); // firstName, lastName 출력
}

console.log(person2[getFullName2]()); // Jeremy Go
