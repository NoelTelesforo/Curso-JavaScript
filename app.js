// Se ejecuta una vez que todo el contenido de la página se ha cargado.

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos a los elementos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
});