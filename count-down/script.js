const countdown = () => {
  const countDate = new Date("Aug 20, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  
  const second = 1000;
  const minute = second*60;
  const hour = minute*60;
  const day = hour*24;

  const textDay = Math.floor(gap/day);
  const textHour = Math.floor((gap%day)/hour);
  const textMinute = Math.floor((gap%hour)/minute);
  const textSec = Math.floor((gap%minute)/second);
if(textDay<10){
    document.querySelector(".day").innerText=`0${textDay}`;
}else{
    document.querySelector(".day").innerText=textDay;
}
  if(textHour<10){
    document.querySelector(".hour").innerText=`0${textHour}`;
  }else{
    document.querySelector(".hour").innerText=textHour
  }
  if(textMinute<10){
    document.querySelector(".min").innerText=`0${textMinute}`;
  }else{
    document.querySelector(".min").innerText=textMinute;
  }
  if(textSec<10){
    document.querySelector(".sec").innerText=`0${textSec}`;
  }else{
    document.querySelector(".sec").innerText=textSec;
  }
  
 
  

};
setInterval(countdown,1000);

