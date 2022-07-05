// 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환

let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let result = words.filter(function (word) {
  return word.length > 6; // 단어의 길이가 6자리보다 큰 단어만 추출해서 새로운 배열 반환
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

let pass = persons.filter(function (person) {
  // point가 80보다 큰 사람만 반환
  return person.point > 80;
});
