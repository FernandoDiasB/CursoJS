function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function initClock() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    initClock();
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    seconds = 0;
});