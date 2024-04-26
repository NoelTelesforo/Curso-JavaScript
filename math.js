

// Math, existe en la ventana global de JavaScript por eso se puede acceder a él en la consola.

let resultado;

// PI
resultado = Math.PI;

// Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);
resultado = Math.round(2.4);

// Redondear hacia arriba
resultado = Math.ceil(2.1);

// Redondea hacia abajo
resultado = Math.floor(2.9);

// Raiz cuadrada
resultado = Math.sqrt(144);

// Valor absoluto, va a traerse ignorando el menos
resultado = Math.abs(-500);

// Potencia
resultado = Math.pow(8, 3);


// Para saber cual es el mínimo en una serie de números
resultado = Math.min(3,5,12,1,-3);


// Máximo, para acceder al máximo valor
resultado = Math.max(3,5,7,0,6,3,9);

// Aleatorio, pocas veces da números enteros:
resultado = Math.random();


// Aleatorio dentro de un rango... se obtiene como resultado un valor que va del 0 al 30.
resultado = Math.floor( Math.random() * 30);