// 배열에 문자형 데이터가 있는 경우 오름차순 정렬
// 역순 : reverse();
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

// 숫자 오름차순
let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

// 숫자 내림차순
let points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) {
  return b - a;
});

let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

persons.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});
