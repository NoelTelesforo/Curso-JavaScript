

// Switch Case
// Cuando hay múltiples condiciones que revisar es mejor hacerlo con un switch.


const metodoPago = '';

// En el paréntesis va a revisar (una variable) el valor que queremos comprobar.

// En caso de que el valor de esa variable sea efectivo se ejecuta el código

// Con break detenemos la ejecución de nuestro switch.

// default, se ejecuta si ninguna de las condiciones se cumple.

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aún no has seleccionado un método de pago');
}