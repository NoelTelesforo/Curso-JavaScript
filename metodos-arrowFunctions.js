// map y forEach en una arrow function



const carrito = [
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Tablet', precio: 7000 },
    { nombre: 'SmartWatch', precio: 10000 },
    { nombre: 'Televisión', precio: 9000 },
    { nombre: 'Bocina', precio: 400 }
];


// Método map()
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`
);


// Método forEach()
carrito.forEach( producto =>
    console.log(`${producto.nombre} - Precio: ${producto.precio}`));




console.log(nuevoArreglo);

