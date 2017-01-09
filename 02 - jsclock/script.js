const secondsHand = document.querySelector('.hand-seconds');
const minnutesHand = document.querySelector('.hand-minutes');
const hoursHand = document.querySelector('.hand-hours');

function setTime(){
  const now = new Date();
  const secondsDegrees = (360*now.getSeconds()/60) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = parseInt(360*now.getMinutes()/60) + 90;
  minnutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = parseInt(360*now.getHours()/24) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000);
