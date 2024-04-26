
// Cómo cambiar el CSS de un elemento

const encabezado = document.querySelector('h1');

// Cambiarle color de fondo:
encabezado.style.backgroundColor = 'red';


// Cambiarle la fuente:
encabezado.style.fontFamily = 'Arial';

// Si queremos hacer mayuscula:
encabezado.style.textTransform = 'uppercase';


// Agregar clase:

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
console.log(card.classList);


// Eliminar una clase

card.classList.remove('card');