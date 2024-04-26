

//  Convertir strings a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// muestra 20 en string
console.log(numero1); 


// muestra el 20 como número entero.
console.log(Number.parseInt(numero1)); 


// muestra el número con décimales
console.log(Number.parseFloat(numero2)); 


// Podemos revisar si un número es entero o no:
console.log(Number.isInteger(numero4));