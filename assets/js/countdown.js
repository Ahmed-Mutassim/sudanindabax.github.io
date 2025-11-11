// assets/js/countdown.js
// Set the date and time we're counting down to
var countDownDate = new Date("2025-12-10T08:00:00+02:00").getTime();

// Update the count down every 1 second
var timer = setInterval(function () {
    var now = Date.now();
    var distance = countDownDate - now;
  
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").textContent = "EXPIRED";
      return;
    }
  
    var days    = Math.floor(distance / (1000*60*60*24));
    var hours   = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
  
    document.getElementById("days").textContent    = days;
    document.getElementById("hours").textContent   = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
