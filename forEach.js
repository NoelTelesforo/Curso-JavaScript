



const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Va ir accediendo a cada una de ellas y los va ir listando.

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});



// Iterar con forEach en un arreglo

const carrito = [
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Tablet', precio: 7000 },
    { nombre: 'SmartWatch', precio: 10000 },
    { nombre: 'Televisión', precio: 9000 },
    { nombre: 'Bocina', precio: 400 }
];

const nuevoArreglo = carrito.forEach( producto => producto.nombre);

// Iterar con map, el resultado es el mismo. La única diferencia es que map crea un arreglo nuevo y forEach, no.

const nuevoArreglo2 = carrito.map( producto => producto.nombre);


console.log(nuevoArreglo); // Devuelve undefined

console.log(nuevoArreglo2); // Devuelve un nuevo arreglo