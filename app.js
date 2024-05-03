// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySeslector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {

    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    })
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añade al arreglo de tweets.
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML.
    crearHTML();


    // Reinicia el formulario
    formulario.reset(); 
    
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

// Muestra un listado de los tweets
function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {

            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Función de eliminar
            btnEliminar.onClick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // Añade el texto
            li.innerText = tweet.tweet;

            // Asigna el boton
            li.appendChild(btnEliminar);

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    // almacenar los tweets a local storage
    sincronizarStorage();
}

// Argrega los tweets actuales a local Storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}