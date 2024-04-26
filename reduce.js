

// En el parametro se le pasan 2 valores, uno es el valor anterior y el segundo sería el valor actual.

// El total del parametro se inicia en cero, que se coloca al final de la función.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


let resultado = carrito.reduce((total, producto) => 
    total + producto.precio, 0);

console.log(resultado); // 2200
