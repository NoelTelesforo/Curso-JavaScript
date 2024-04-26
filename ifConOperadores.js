

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


// Operador (and) &&

// Revisa que se cumplan dos condiciones dentro del if

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Si puedes comprar');
}  else if (!usuario){
    console.log('Inicia sesión o crea una cuenta');
} else if(!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No puedes comprar');
}


// Operador Or.

// Revisa que se cumpla una o la otra condición.

// Con una sola condición que se cumpla con eso ejecuta el código.


const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;


if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}



// Operador Ternario. (?)

// Si la condición se cumple se ejecuta el código que hay despues del simbolo ? y  si no se cumple se ejecuta el código que hay despues de los dos puntos :

// Forma de comprobar dos condiciones,.
console.log(usuario || puedePagar ? 'Si puede pagar' : 'No esta autenticado');


// Ejemplo de if anidado:


if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if(efectivo > totalPagar) {
        console.log('pago realizado en efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos insuficientes');
}



// if anidado dentro de un ternario:

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No esta autenticado');