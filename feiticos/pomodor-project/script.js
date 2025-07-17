const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const btnReset = document.querySelector("#reset");
const timerEl = document.querySelector('#timer');
let interval
let timeLeft = 1500;

function updateTimer(){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerEl.innerHTML = formattedTime;
}

function startTimer(){
  interval = setInterval(()=>{
    timeLeft--;
    updateTimer();
    if(timeLeft === 0){
      clearInterval(interval);
      alert('Time is up!');
      timeLeft = 1500;
      updateTimer();
    }
  },1000);
}
function stopTimer(){
  clearInterval(interval);
}
function resetTimer(){
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);
