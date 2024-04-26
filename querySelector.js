

// Retorna un elemento, el primero que encuentre
// Permite seleccionar clases
// Tienen una sintaxis similar a la de CSS

const card = document.querySelector('.card');
console.log(card);



// Podemos tener selectores especificos como en CSS
// Selecciona dos clases.

const info = document.querySelector('.premium .info');
console.log(info);


// Selecciona el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log(segundoCard);



// querySelector, tambien permite seleccionar id´s con la misma sintaxis de CSS, que es el signo de #. Selecciona el primero que encuentre.

// seleccionar el formulario

const formulario = document.querySelector('#formulario');
console.log(formulario);



// querySelector, tambien puede seleccionar un elemento por su etiqueta HTML

const navegacion = document.querySelector('nav');
console.log(navegacion);