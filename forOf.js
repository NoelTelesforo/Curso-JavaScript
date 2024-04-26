

// Itera sobre arreglos
// En let a cada una de las iteraciones se le da un alias.

// Va a ir iterando sobre el arreglo original y va ir asignando a pendiente cada elemento.

// Permite recorrer un arreglo


// Arreglo tradicional
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];



// Arreglo de objetos
const carrito = [
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Tablet', precio: 7000 },
    { nombre: 'SmartWatch', precio: 10000 },
    { nombre: 'Televisión', precio: 9000 },
    { nombre: 'Bocina', precio: 400 }
];



// Muestra los cuatro elementos del array pendientes
for(let pendiente of pendientes) {
    console.log(pendiente);
}


// Muestra los nombres de los elementos (objetos del arreglo)
for(producto of carrito) {
    console.log(producto.nombre);
}