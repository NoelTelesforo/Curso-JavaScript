

const puntaje = 1000;

// Condición: puntaje es diferente a 1000
if(puntaje != 1000) {
    console.log('Sí!, es diferente');
}


// == operador que no es estricto.
// === Operador estricto, compara que sean iguales. (valor y tipo)
// !== operador estricto que sean diferentes. (valor y tipo)

if(puntaje !== '1000') {
    console.log('Sí es diferente');
} else {
    console.log('No, no es diferente');
}



// Operador de mayor (>) y menor que (<)

const dinero = 300;
const totalAPagar = 300;

if(dinero >= totalAPagar) {
    console.log('Sí podemos pagar');
} else {
    console.log('Fondos insuficientes');
}