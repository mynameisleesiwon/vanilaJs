// Class
// 객체를 생성하기 위한 템플릿
// 데이터와 이를 조작하는 코드를 하나로 추상화

// 클래스명 앞에 class 라는 키워드 사용해서 정의
// 반드시 constructor 함수를 가짐
// constructor 함수 : class로 생성된 객체를 생성하고 초기화하기 위한 특수 함수
// 클래스 안에 한 개만 존재 가능

// Class 정의
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
}

// Class 사용
let ionic = new Car("아이오닉", "2021", "e", 4000); // 아이오닉 차량 생성
let genesis = new Car("제네시스", "2021", "g", 7000); // 제네시스 차량 생성
