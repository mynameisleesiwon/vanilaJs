function getInterValDate(day) {
  let now = new Date();
  let dayMilliseconds = 60 * 60 * 24 * 1000;

  return new Date(now.getTime() + dayMilliseconds * day);
}

getInterValDate(2);
// Thu Jul 07 2022 20:01:51 GMT+0900 (한국 표준시)

getInterValDate(3);
// Fri Jul 08 2022 20:01:56 GMT+0900 (한국 표준시)
