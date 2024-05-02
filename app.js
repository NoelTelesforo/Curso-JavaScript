// Se ejecuta una vez que todo el contenido de la página se ha cargado.

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos a los elementos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target,id} es obligatorio`);
        } else {
            e.target.classList.remove('error');
        }
    }

    function mostrarAlerta(mensaje) {
        // Genera alerta HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyecta el error al formulario
        formulario.appendChild(error);
        

    }
});