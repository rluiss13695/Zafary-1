
const Home = document.querySelector('#Home');
const whatzApp = document.querySelector('#whatzApp');
const Zpotify = document.querySelector('#Zpotify');
const titulo = document.querySelector('#Titulo');


Home.addEventListener('click', LlamarHome);

function LlamarHome() {
    document.getElementById("iFrame").src = "../Home/index.html";
    titulo.innerHTML = "Zafary<br>La mejor forma<br>de ver los sitios web.";
}

whatzApp.addEventListener('click', LlamarwhatzApp);

function LlamarwhatzApp() {
    document.getElementById("iFrame").src = "../whatzApp/index.html";
    titulo.innerHTML = "whatzApp";
}

Zpotify.addEventListener('click', LlamarZpotify);

function LlamarZpotify() {
    document.getElementById("iFrame").src = "../Zpotify/index.html";
    titulo.innerHTML = "Zpotify";
}