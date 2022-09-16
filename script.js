const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondEl =document.getElementById('seconds');


const newYears ='1 jan 2023';

function coundown(){
    const newYearDate =new Date (newYears);
    const currentDate = new Date();

    const seconds = (newYearDate-currentDate)/1000;

    const days =Math.floor(seconds/3600/24);
    const hours =Math.floor(seconds/3600)%24;
    const minutes =Math.floor(seconds/60)%60;
    const second =Math.floor(seconds) %60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secondEl.innerHTML=second;

}

coundown();
setInterval(coundown,1000)
