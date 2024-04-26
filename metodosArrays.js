

// Métodos para arreglos
// Array Methods
const carrito = [
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Tablet', precio: 7000 },
    { nombre: 'SmartWatch', precio: 10000 },
    { nombre: 'Televisión', precio: 9000 },
    { nombre: 'Bocina', precio: 400 }
];


// Método forEach()
const nuevoArreglo2 = carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});


// Método map()
const nuevoArreglo = carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});


console.log(nuevoArreglo);
console.log(nuevoArreglo2); // no va a tener nada, devuelve undefined

