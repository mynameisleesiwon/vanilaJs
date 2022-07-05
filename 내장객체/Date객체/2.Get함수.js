let today = new Date();
today.getFullYear();
today.getMonth(); // 원래 달보다 -1로 나옴. 그래서 + 1 해야함
today.getDate();
today.getHours();
today.getMinutes();
today.getSeconds();
today.getMilliseconds();
today.getTime(); // 1970년대 1월 1일 이후에 해당하는 밀리초 정보
today.getDay(); // 일요일 0 , 월요일 1
Date.now(); // 현재를 기준으로 getTime()함수에 해당하는 정보를 가져옵니다
