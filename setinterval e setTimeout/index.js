function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', { hour12: false });
}

function funcaoDoInterval() {
    console.log(mostrarHora())
}

const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log("teste");
}, 5000);