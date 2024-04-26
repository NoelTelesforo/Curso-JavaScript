


// Cómo acceder a los elementos de un arreglo?

// Si tratas de acceder a una posición que no existe marca undefined.

// La posición es lo que determina como acceder a un arreglo



const numeros = [10, 20,30, 40, 50, [1, 2 ,3]];


// Acceder al arreglo por medio de la posición
console.log(numeros[2]); //Devuelve 30


// Acceder a un arreglo de arreglos: acedemos a la posición del areglo y despues al sub arreglo:

console.log(numeros[5][1]); // Devuelve 2.