const deg = 6;

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const digitalTime = document.querySelector(".digital-time");
const ampm = document.querySelector(".ampm");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    const amPm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12 || 12;
    digitalTime.textContent = `${formatTime(hh)} : ${formatTime(mm)} : ${formatTime(ss)}`;
    ampm.textContent = amPm;

    hour.style.transform = `rotateZ(${hh * 30 + mm / 2}deg)`;
    min.style.transform = `rotateZ(${mm * deg}deg)`;
    sec.style.transform = `rotateZ(${ss * deg}deg)`;
};

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};
setClock();
setInterval(setClock, 1000);
