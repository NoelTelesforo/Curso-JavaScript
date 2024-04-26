


const nav = document.querySelector('.navegacion');


// Registrar un evento:
nav.addEventListener('click', () => {
    console.log('Click en nav');
});



// mouse enter

// Es cuando se colocar el cursor sobre la navegación
nav.addEventListener('mouseenter', () => {
    console.log('Entrando en la navegación');
});




// mouseout
// Se ejecuta al salir de navegacion o de la etiqueta seleccionada
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');
});




// mouseup
// Se ejecuta cuando se da click pero se suelta el mouse
nav.addEventListener('mouseup', () => {
    console.log('Saliendo de la navegación');
});


// dblclick
// Funciona al hacer doble click
nav.addEventListener('dblclick', () => {
    console.log('Saliendo de la navegación');
});