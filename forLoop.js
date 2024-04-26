
// For Loop

// Se ejecuta hasta que el código deja de cumplir una condición.

// El paréntesis consta de 3 partes

// 1.- El inicializador, en que lugar va empezar a contar o repetirse nuestro código.

// 2.- La condición que vamos a revisar.

// 3.- El incremento, vamos a ir incrementando de uno en uno.

// En las llaves se coloca lo que se va a ejecutar de nuestro código.


for(let i = 0; i < 10; i++) {
    console.log(`Número: ${i}`);
}



// En un for loop, como identificas los números que son pares y los que son nones:

for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}


// Acceder a los elementos de un arreglo con for loop.

const carrito = [
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Tablet', precio: 7000 },
    { nombre: 'SmartWatch', precio: 10000 },
    { nombre: 'Televisión', precio: 9000 },
    { nombre: 'Bocina', precio: 400 }
];

// Muestra cuantos elementos hay en el arreglo
console.log(carrito.length);


// el i++ es para listar los elementos del array para irnos de 1 en 1.

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}