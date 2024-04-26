


// submit, cuando alguien preciona el input, el button que tiene el type submit

// preventDeFault, nos permite consultar una api...
// prevención por default

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormaulario);

function validarFormaulario(e) {
    e.preventDeFault();

    console.log('Consultar API');

    console.log(e.target.action);
}