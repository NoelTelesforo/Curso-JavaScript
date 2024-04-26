
// Event Bubbling, es cuando presionas en un evento pero ese evento se propaga por muchos otros lugares dando resultados que no son los esperados.

// stopPropagtion, detiene el event Bobbling


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('Click en card');
});


infoDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('Click en info');
});



titulo.addEventListener('click', e => {
    e.stopPropagation()
    console.log('Click en titulo');
});