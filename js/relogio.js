const daysEl = document.getElementById("dias");
const hoursEl = document.getElementById("horas");
const minEl = document.getElementById("minutos");
const secondsEl = document.getElementById("segundos");

const wedding = "27 April 2024";

function countdown(){

        const weddingsDate = new Date(wedding);
        const currentDate = new Date();

        const totalSeconds = (weddingsDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time){ 
    return time < 10 ? `0${time}` : time;
}

 countdown();

 setInterval(countdown, 1000);
    


  