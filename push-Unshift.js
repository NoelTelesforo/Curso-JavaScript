


const meses = ['Enero', 'Febrero', 'Marzo'];


// Agregar al final del arreglo
meses.push('Abril');

// console.log(meses);


// Ejemplo carrito de compras

const carrito = [];


// Definir producto
const producto = {
    nombre: 'Tablet',
    precio: 7000
}

const producto2 = {
    nombre: 'Audifonos',
    precio:300
}


// Agregamos al carrito producto
carrito.push(producto);
carrito.push(producto2);


// Definimos producto3

const producto3 = {
    nombre: 'Laptop',
    precio: 900
}


// Agregar elementos al inicio del array con unshift
carrito.unshift(producto3);


// Listamos el producto
console.log(carrito);