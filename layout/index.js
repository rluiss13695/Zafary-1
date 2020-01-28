
const home = document.querySelector('#Home');
const wazapp = document.querySelector('#wazapp');
const Zpotify = document.querySelector('#Zpotify');
const titulo = document.querySelector('#Titulo');


home.addEventListener('click', LlamarHome);

function LlamarHome() {
    document.getElementById("iFrame").src = "../Home/index.html";
    titulo.innerHTML = "Zafary<br>La mejor forma<br>de ver los sitios web.";
}

wazapp.addEventListener('click', LlamarWazapp);

function LlamarWazapp() {
    document.getElementById("iFrame").src = "../wazapp/index.html";
    titulo.innerHTML = "WhatzApp";
}

Zpotify.addEventListener('click', LlamarZpotify);

function LlamarZpotify() {
    document.getElementById("iFrame").src = "../zpotify-html/index.html";
    titulo.innerHTML = "Zpotify";
}