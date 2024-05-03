// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySeslector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();


function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();

    console.log('Agregando Tweet...');
}