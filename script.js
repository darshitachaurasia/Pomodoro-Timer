const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

const timer = document.querySelector(".timer")

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft/60)
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2,'0')}  :  ${seconds.toString().padStart(2,"0")}`
    timer.innerHTML = formattedTime;
}

function startTimer(){
    if(!interval){
        interval = setInterval(()=>{
        timeLeft--;
      updateTimer() ;
      if(timeLeft === 0) {
        clearInterval(interval);
        alert("Time's Up");
        timeLeft = 1500;
        updateTimer();
      }
    },1000)}
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);

updateTimer();