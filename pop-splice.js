

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


// Eliminar ultimo elemento de un arreglo
carrito.pop();
console.log(carrito);


// Eliminar elemento del inicio del arreglo
carrito.shift();
console.log(carrito);


// Splice(), toma dos parametros uno donde va a iniciar a cortar, y cuantos elementos quieres eliminar una vez llegado a ese elemento: Quiero eliminar ese elemento nadamas.

carrito.splice(1, 1);
console.log(carrito);