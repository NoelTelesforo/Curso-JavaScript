

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];



// Traer todos los productos que cuesten más de 400

let resultado;

resultado = carrito.filter(producto => producto.precio > 400);


// Traer todos los productos que sean menor a 600
resultado = carrito.filter(producto => producto.precio < 600);


// Sacar del arreglo Audifonos
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');


console.log(resultado); 