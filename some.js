


const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];


// En parametros se coloca el valor y se nombra (producto) y va a ir iterando sobre cada uno de ellos.

const existe = carrito.some( producto => 
    producto.nombre === 'Celular');

console.log(existe)    // true