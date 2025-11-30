// assets/js/countdown.js

// Set the date we're counting down to
var countDownDate = new Date("2025-12-10T08:00:00+02:00").getTime();

// Update the count down every 1 second
var timer = setInterval(function () {
    var now = Date.now();
    var distance = countDownDate - now;
  
    var countdownEl = document.getElementById("countdown");

    if (distance <= 0) {
      clearInterval(timer);
      countdownEl.innerHTML = '<span class="expired">The Event Has Started!</span>';
      return;
    }
  
    var days    = Math.floor(distance / (1000*60*60*24));
    var hours   = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
  
    // Re-write the HTML to be clean and responsive
    // We use short labels (d, h, m, s) on mobile if needed, or just small font
    countdownEl.innerHTML = 
        '<div class="time-box"><span class="num">' + days + '</span><span class="label">Days</span></div>' +
        '<div class="time-box"><span class="num">' + hours + '</span><span class="label">Hours</span></div>' +
        '<div class="time-box"><span class="num">' + minutes + '</span><span class="label">Mins</span></div>' +
        '<div class="time-box"><span class="num">' + seconds + '</span><span class="label">Secs</span></div>';

}, 1000);