


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

const producto3 = {
    nombre: 'Laptop',
    precio: 900
}


// Devuelve el objeto producto
let resultado;
resultado = [ ...carrito, producto]; 


// Devuelve el objeto Audifonos
resultado = [...resultado, producto2];

// Devuelve el objeto Laptop
resultado = [...resultado, producto3];



console.log(resultado);