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

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;


    // Validación.
    if(tweet === '') {
        mostrarError('El mensaje no puede ir vacío');
        return;
    }

    console.log('Agregando Tweet...');
}


// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar mensaje de error en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos.
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}