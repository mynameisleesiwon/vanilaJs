// switch문은 상수값만 올 수 있음. 비교 구문 안 됨
// 상수 - 숫자 혹은 특정 문자
let d = new Date();
let day = d.getDay(); // 일요일이면 0, 월요일이면 1, 토요일이면 6을 반환
let dayName = "";
switch (
  day // 조건식에 상수값을 전달
) {
  case 0:
    dayName = "일요일";
    break;
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  case 6:
    dayName = "토요일";
    break;
  default: // case절의 상수 값이 모두 일치하지 않는 경우
    dayName = "";
    break;
}
