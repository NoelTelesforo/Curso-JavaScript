

// Eliminar por si mismo, es decir estoy seleccionado un elemento:

const primerEnlace = document.querySelector('a');
primerEnlace.remove();



// El padre se encarga de eliminar al hijo

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);