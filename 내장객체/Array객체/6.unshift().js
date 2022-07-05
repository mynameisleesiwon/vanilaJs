// 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Lemon을 fruits 배열 맨 앞에 추가하고 배열의 길이 반환

let cities = [
  // 지역 목록
  { code: "02", title: "서울" },
  { code: "21", title: "부산" },
  { code: "064", title: "제주" },
];

// 배열의 첫 번째 요소로 추가
cities.unshift({ code: "", title: "지역을 선택하세요" });

let options = [];
for (const city of cities) {
  // option 태그 구성
  options.push('<option value="' + city.code + '">' + city.title + "</option>");
}
