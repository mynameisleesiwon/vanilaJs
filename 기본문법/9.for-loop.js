let productList = [
  // 음료 리스트
  {
    name: "솔의눈",
    price: 700,
  },
  {
    name: "커피",
    price: 700,
  },
  {
    name: "파워에이드",
    price: 1200,
  },
  {
    name: "오렌지",
    price: 1000,
  },
  {
    name: "보리차",
    price: 1200,
  },
  {
    name: "밀키스",
    price: 800,
  },
];

let inputCoin = 800;
let len = productList.length;
let outputList = []; // 고객이 구매할 수 있는 음료 목록을 저장할 새로운 배열
for (let i = 0; i < len; i++) {
  if (productList[i].price <= inputCoin) {
    outputList.push(productList[i]);
  }
}
