

// Solamente se debe utilizar un id una vez por documento.

const formulario = document.getElementById('formulario');
console.log(formulario);



// Qué pasa cuando seleccionas algo que no existe
// Retorna un null
// Cuando hay varios id, selecciona el primero que enuentre
// Solo retorna un elemento.


const noExiste = DOMMatrix.getElementById('no-existe');
console.log(noExiste);