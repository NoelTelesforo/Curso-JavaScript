

// else if.

// Cuando se tiene un if y un else if, se va a ejecutar la primer condición que se cumpla.

// else, se va a ejecutar cuando ninguna de las condiciones previas se cumpla.

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;


if(dinero >= totalAPagar) {
    console.log('Sí podemos pagar');
} else if(cheque) {
    console.log('Sí tengo un cheque');
} else if(tarjeta) {    
    console.log('Sí puedo pagar porque tengo la tarjeta');
} else {
    console.log('Fondos insuficientes');
}