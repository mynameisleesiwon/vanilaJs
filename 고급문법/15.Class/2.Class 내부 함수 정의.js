class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  getModelName() {
    return this.modelName;
  }

  getModelYear() {
    return this.modelYear;
  }

  getType() {
    return this.type;
  }

  getPrice() {
    return this.price;
  }

  setModelName(modelName) {
    this.modelName = modelName;
  }

  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }

  setType(type) {
    this.type = type;
  }

  setPrice(price) {
    this.price = price;
  }
}

let ionic = new Car("아이오닉", "2021", "e", 4000); // 아이오닉 차량 생성
let modelName = ionic.getModelName(); // 차량 모델명 가져오기
ionic.setPrice(4300); // 차량 가격 변경
