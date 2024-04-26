


const producto = {
    nombre: 'Tablet',
    precio: 700,
    disponible: true
}


// Destructuring, estamos esxtrayendo el valor y creando la variable, todo en un mismo paso
const { nombre } = producto;
console.log(nombre); //  Devuelve Tablet


// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];


// Accede al primer valor, se crea la variable y tengo el valor. Las variables se pueden nombrar como quieres, porque su valor esta definido por su posición, en los objetos no.
const [primero] = numeros;


console.log(primero); // Devuelve 10