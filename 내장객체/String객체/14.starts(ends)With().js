// 문자열의 시작이 파라미터로 전달된 문자열로 시작되는지를 확인하는 함수
let url = "http://website.com";
if (url.startsWith("http://") || url.startsWith("https://")) {
  // 올바른 형식의 웹사이트 url
} else {
  // 잘못된 형식의 웹사이트 url
}

// 문자열의 끝이 파라미터로 전달된 문자열로 종료되는지를 확인하는 함수
let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  // pdf 파일
} else {
  // 다른 형식의 파일
}
