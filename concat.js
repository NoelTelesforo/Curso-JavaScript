

// Concatenar dos strings


const producto = 'Monitor 20 Pulgadas';
const precio = ' 30 USD';

console.log(producto.concat(precio));


// Se puede concatenar un string:
console.log(producto.concat('En descuento'));


// Otra forma de concatenar:
console.log(producto + " Con un precio de: " + precio);

console.log("El producto" , producto , "tiene un precio de " , precio);


// Template string, las variables se agegan con la sintaxis ${} y lo demas sigue siendo una cadena de texto.

console.log(`El producto ${producto} tiene un precio de $ ${precio}`);