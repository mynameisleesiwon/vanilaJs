// 현재 날짜를 지정한 포맷으로 반환하는 함수
function getCurrentDate(format) {
  let d = new Date();
  let year = d.getFullYear(); // 년도
  let month = d.getMonth() + 1; // 월
  month = month.toString().padStart(2, 0); // 월이 10보다 작을 때는 앞에 0을 추가
  let day = d.getDate(); // 일
  day = day.toString().padStart(2, 0); // 일이 10보다 작을 때는 앞에 0을 추가
  format = format.replace("YYYY", year); // 년도 부분을 실제 년도 값으로 변경
  format = format.replace("MM", month); // 월 부분을 실제 월 값으로 변경
  format = format.replace("DD", day); // 일자 부분을 실제 일자 값을 변경

  return format;
}

getCurrentDate("YYYY-MM-DD");
getCurrentDate("MM.DD.YYYY");

// getCurrentDate() 함수를 활용해서 파라미터로 날짜(문자열 8자리)와 날짜 포맷을 받고, 해당 날짜 포맷이 적용된 날짜를 반환하는 함수를 구현
function convertDateFormat(yyyymmdd, format) {
  let year = yyyymmdd.substr(0, 4); // 년도
  let month = yyyymmdd.substr(4, 2); // 월
  let day = yyyymmdd.substr(6, 2); // 일
  format = format.replace("YYYY", year); // 년도 부분을 실제 년도 값으로 변경
  format = format.replace("MM", month); // 월 부분을 실제 월 값으로 변경
  format = format.replace("DD", day); // 일자 부분을 실제 일자 값으로 변경

  return format;
}

convertDateFormat("20210721", "YYYY-MM-DD");

// 현재 날짜를 기준으로 특정 일수만큼 며칠 전, 혹은 며칠 후를 반환하는 함수
function getIntervalDate(intervalDay, format) {
  let now = new Date();
  let millisecondsOneDay = 60 * 60 * 24 * 1000;
  let d = new Date(now.getTime() + millisecondsOneDay * intervalDay); // 날짜 간격만큼 milliseconds 형태로 계산
  let year = d.getFullYear(); // 년도
  let month = d.getMonth() + 1; // 월
  month = month.toString().padStart(2, 0); // 월이 10보다 작을 때는 앞에 0을 추가
  let day = d.getDate(); // 일
  day = day.toString().padStart(2, 0); // 일이 10보다 작을 때는 앞에 0을 추가
  format = format.replace("YYYY", year); // 년도 부분을 실제 년도 값으로 변경
  format = format.replace("MM", month); // 월 부분을 실제 월 값으로 변경
  format = format.replace("DD", day); // 일자 부분을 실제 일자 값으로 변경

  return format;
}

getIntervalDate(5, "YYYY-MM-DD");
getIntervalDate(-5, "YYYY-MM-DD");
