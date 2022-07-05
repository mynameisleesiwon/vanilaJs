class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
}

class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // super키워드로 부모클래스 생성자 호출
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }

  setChargeTime(time) {
    this.chargeTime = time;
  }
  getChargeTime() {
    return this.chargeTime;
  }
}
