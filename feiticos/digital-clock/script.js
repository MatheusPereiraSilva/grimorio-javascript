const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");

function updateClock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let apm = "AM";
  if(h > 12){
    h = h - 12;
    apm = "PM";
  }
  h = h<10? "0" + h : h;
  m = m<10? "0" + m : m;
  s = s<10? "0" + s : s;
  hour.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = apm;
  setTimeout(updateClock, 1000);
}

updateClock();
