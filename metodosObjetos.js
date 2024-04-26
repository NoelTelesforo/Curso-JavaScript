


// Métodos para objetos




// Un objeto no puede ser modificado, se habilta el modo estricto, este exige que cumplas ciertas reglas a la hora de escribir código de JavaScript.
'use struict';

const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio: 700,
    disponible: false
}

// No permite reasignar propiedades del objeto ni agregar propiedades al objeto:

Object.freeze(producto);

console.log(producto);


// Metodo para saber si un objeto esta congelado o no.

console.log(Object.isFrozen(producto));


// No se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes.

Object.seal(producto);

console.log(producto);


// Para saber si un objeto esta sellado:
console.log(Object.isSealed(producto)); // Devuelve un boolean

// Método que retorna un arreglo con los keys del objeto que son nombre, precio y disponible
console.log( Object.keys(producto));


// Método que retorna los valores del objeto: Monitor 20 Pulgadas y true.
console.log( Object.values(producto));



// Método que retorna todo el objeto en pares.
console.log( Object.entries(producto));