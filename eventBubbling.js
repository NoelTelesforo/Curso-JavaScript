
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





// De esta forma estamos identificando a que le estamos dando click:

cardDiv.addEventListener('click', e => {
    console.log(e.target);
});




// Esto nos dice las clases de lo que le estamos dando click

cardDiv.addEventListener('click', e => {
    console.log(e.target.classList);
});



// Delegation para saber a que elemento le dimos click:

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }
    if(e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
});