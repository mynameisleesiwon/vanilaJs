// 배열 안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join("*"); // Banana*Orange*Apple*Mango

let userList = [
  {
    name: "siwon",
    email: "seoil1221@naver.com",
  },
  {
    name: "junsik",
    email: "junsik@naver.com",
  },
];

let userHtml = [];
for (const user of userList) {
  userHtml.push("<tr>");
  userHtml.push("<td>" + user.name + "</td>");
  userHtml.push("<td>" + user.email + "</td>");
  userHtml.push("</tr>");
}

document.querySelector("#userTableTbody").innerHTML = userHtml.join("");
