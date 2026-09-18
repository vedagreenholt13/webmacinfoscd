
// Countdown Timer
let seconds = 60;
const countdown = document.getElementById('countdown');

const timer = setInterval(() => {
    seconds--;
    countdown.textContent = `0 minutes and ${seconds} seconds`;
    if (seconds <= 0) {
        clearInterval(timer);
        countdown.textContent = "Time's up!";
    }
}, 1000);
