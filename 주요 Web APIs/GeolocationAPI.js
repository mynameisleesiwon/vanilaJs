// 현재 사용자가 이용중인 브라우저가 Geolocation API를 지원하는지 확인
if ("geolocation" in navigator) {
  // 위치 정보 사용 가능
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
  });
} else {
  // 위치정보 사용 불가능
}

// 만약 사용자가 이동중이며, 위치 정보가 바뀌었을 때에도 콜백함수를 통해 사용자의 위치정보 가져올 수 있음
const watchID = navigator.geolocation.watchPosition((position) => {
  const latitude = position.coords.latitude; // 위도
  const longitude = position.coords.longitude; // 경도
});

// WatchPosition 함수를 통해 실시간 사용자 위치 정보를 가져오는 경우에는 더 이상 사용자 위치 정보를 감지하지 않을 때는 반드시 사용자 위치를 감지하는 함수를 종료
navigator.geolocation.clearWatch(watchID);
