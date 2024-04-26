


const navegacion = document.querySelector('.navegacion');

console.log(navegacion);


// Trae el primer elemento de la navegación:
console.log(navegacion.firstElementChild);



// Trae el último elemento de navegación:
console.log(navegacion.lastElementChild);



// Los espacios en blanco son considerados elementos.
console.log(navegacion.childNodes);



// Children enlista solo los elementos HTML. Se recorrern los hijos
console.log(navegacion.children[0]);





// Traversing del hijo al padre:

// parentElement, verifica por elementos vaildos. Se pueden colocar los que queramos siempre y cuando haya un padre que recorrer.

console.log(card.parentElement.parentElement);




// nextElementSibling, selecciona elementos hermanos. Se pueden colocar los que queramos mientras haya elementos.

console.log(card.nextElementSibling);




// previusElementSibling,permite ir al elemento previo

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);