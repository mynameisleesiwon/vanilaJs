// 전역 객체

// 윈도우 화면에 경고 메세지 출력
alert("이것은 alert 창입니다");

// 진행할지, 종료할지에 대한 진행 여부 확인
if (confirm("정말 삭제하시겠습니까")) {
  console.log("삭제 실행");
}

// 문자열을 입력받을 수 있는 함수
let txt = prompt("비밀번호를 입력하세요");

if (txt == null) {
  // 취소 버튼을 클릭했을 때
} else if (txt == "") {
  txt = prompt("비밀번호를 입력하세요");
} else if (txt != "") {
  console.log(`당신의 비밀번호는 ${txt}입니다.`);
}

// 윈도우 새 창/새 탭으로 지정한 url을 오픈하는 함수
window.open("https://naver.com");

// 두 번째 파라미터로 지정한 시간 간격 이후에 첫 번째 파라미터에 정의한 함수를 실행하는 함수
let myExec;

function myFunction() {
  myExec = setTimeout(() => console.log("5초 후 프로그램 실행"), 5000);
}

function myStopFunction() {
  clearTimeout(myExec);
}

// 두 번째 파라미터로 지정한 시간 간격마다 첫 번째 파라미터에 정의한 함수를 반복적으로 실행하는 함수
let i = 0;
let fnc = setInterval(function () {
  console.log("3초마다 프로그램 실행 - " + i);
  if (i == 3) {
    clearInterval(fnc);
  }
  i++;
}, 3000);
