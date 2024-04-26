// Funciones que retornan valores

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);


console.log(resultado); // Devuelve 5

// Cuando tienes una función que retorna algo, tienes que tener otra variable la cual se le asigna el valor retornado:

// tengo const resultado, manda a llamar la función sumar, va hacia la función le pasa 2 y 3, realiza la suma  y en lugar de imprimirlo regresa hacia la función y le asigna el valor a reultado.



let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15; // Sería el impuesto (15%)
}


// Estoy agregando elementos al carrito y se van agregando al total, pero quien tiene el valor es el total.

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);


const totalPagar = calcularImpuesto(total);

// Devuelve: El total a pagar es de 1150
console.log(`El total a pagar es de: ${totalPagar}`);


console.log(total); // Devuelve 1000
