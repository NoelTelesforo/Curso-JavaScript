


const producto = 'Monitor 20 Pulgadas';


// Métodos para los strings:


// Metodo para saber cuantas letras tiene una variable (cadena de texto o string):
console.log(producto.length);


// Nos dice si la variable producto tiene la palabra monitor
console.log(producto.indexOf('Monitor'));


// Este metodo nos devuelve un boolean, busca un string Monitor en la variable producto.
console.log(producto.includes('Monitor'));


// Métodos que nos permitan eliminar espacio en blanco al inicio y al final de una cadena de texto.

console.log(producto);
console.log(producto.length);


// Eliminar espacio del inicio
console.log( producto.trimStart() );


// Eliminar espacio al final
console.log( producto.trimEnd() );


// Se pueden utilizar los metodfos de forma en cadenada, eso se conoce como cheining. Colocar un metodo y despues el otro. Esto eleimina todo el espacio en blanco en todas las direcciones.
console.log( producto.trimStart().trimEnd() );




// Tambien elimina los espacios en todas las direcciones
console.log(producto.trim() );


// replace, permite reemplazar un texto de una cadena
console.log(producto.replace('Pulgadas', '"'));

console.log(producto.replace('Monitor', 'Monitor Curvo'));


// Slice, permite extraer o cortar una parte de una cadena de texto, se le pasa la posicion del inicio y del final donde va a empezar y terminar de cortar:
console.log(producto.slice(0, 10) );


// Si solo le pasas una posicion va a comenzar en esa posicion hasta el final si no se pasa el segundo valor.
console.log(producto.slice(8) );



// Alternaitva a slice, se comporta igual
console.log(producto.substring(0, 10) );



// Si le pasas un numero mayor de inicio y la extencion, slice no hace nada pero substrting lo modifica (el orden de las posiciones)
console.log(producto.substring(1, 2));


// Método repeat, permite repetir una cadena de texto, en los parentesis va el numero de veces que se repetira.


const texto = 'En Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);




// Split, permite dividir un string, se le tiene que pasar porque parte o que va buscar en el strig para dividirlo y crear diferentes partes de ese string:

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));


// En este ejemplo se dividen los string por la coma que tienen:
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));


// Como hace twiter para resaltar el hastag:

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));



// Transforma el texto en mayuscula
console.log(producto.toUpperCase());

// Transforma todo a minusculas:
// Se utiliza en los formularios al colocar su email.

const email = "CORREO@CORREO.COM";
console.log(email.toLowerCase());



// Metodo para convertir un número a string:
const precio = 300;
console.log(precio);
console.log(precio.toString());