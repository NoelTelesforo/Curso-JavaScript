


// Crerar nuevo enlace con createElement


// Se crea la etiqueta
const enlace = document.createElement('A');


// Se agrega texto al enlace
enlace.textContent = 'Nuevo Enlace';


// Añadiendo href
enlace.href = '/nuevo-enlace';


console.log(enlace);



// Donde se mostrara la etiqueta creada.

// Seleccionar la navegacion:
const navegacion = document.querySelector('.navegacion');

// Se agrega un nuevo hijo a la navegación que va a ser enlace
navegacion.appendChild(enlace);


// Insertar antes de la posicición número 1
navegacion.insertBefore(enlace, navegacion.children[1]);





// Crear un card de forma dinamica

// primero se crean 3 parrafos:

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Conciert';
parrafo1.classList.add('titulo');


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');



// Crear un div con la clase de info:

const info = document.createElement('div');
info.classList.add('info');

// Se agregan los parrafos en el orden que queremos:
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


// Crear la imagen:

const imagen = document.createElement('img');

// Donde vamos a encontrar laimagen
imagen.src = 'img/hacer2.jpg';

// Texto alternativo con .alt
imagen.alt = 'Texto Alternativo';



// Crear el card
const card = document.createElement(div);
card.classList.add('card');


// Asignar la imagen:
card.appendChild(imagen);


// Asiganr la info:
card.appendChild(info);


// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');

// Se agrega el card.
contenedor.appendChild(card);