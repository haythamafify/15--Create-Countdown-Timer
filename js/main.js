let countdownDate = new Date("Dec 31 ,2023 23:59:59").getTime();
console.log(countdownDate);

let count = setInterval(() => {
  // Get Date Now
  let datenow = new Date().getTime();
  let datediff = countdownDate - datenow;
  //   let days = Math.floor(datediff / 1000 / 60 / 60 / 24);
  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  let minute = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minute < 10 ? `0${minute}` : minute;
  let seconds = Math.floor((datediff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (datediff < 0) {
    clearInterval(count);
  }
}, 1000);
