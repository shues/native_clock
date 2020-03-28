let clock = {
  year: null,
  month: null,
  day: null,
  hour: null,
  minutes: null,
  seconds: null,
  conteiner: null,
  settings: null,
}

function initClock(conteiner, settings){
  clock.conteiner = conteiner;
  clock.settings = settings;

  let dateNow = new Date();
  clock.year = dateNow.getFullYear();
  clock.month = dateNow.getMonth();
  clock.day = dateNow.getDate();
  clock.hour = dateNow.getHours();
  clock.minutes = dateNow.getMinutes();
  clock.seconds = dateNow.getSeconds();

  setInterval(updateClock,1000);
}

function updateClock(){
  clock.seconds++;
  if(clock.seconds === 60){
    clock.seconds = 0;
    clock.minutes++;
  }
  if(clock.minutes === 60){
    clock.minutes = 0;
    clock.hour++;
  }
  visualizeClock();
}

function visualizeClock(){
  let res = addZero(clock.hour) + ':' + addZero(clock.minutes) + ':' + addZero(clock.seconds);
  document.getElementById(clock.conteiner).textContent = res;
}

function addZero(par){
  if(par < 10){
    par = '0' + par;
  }
  return par;
}
