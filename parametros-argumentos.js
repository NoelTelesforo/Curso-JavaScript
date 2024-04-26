

// Funciones que toman parametros y argumentos.
// Para que las funciones puedan hacer acciones más versatiles e inteligentes deberan utilizar parametros y argumentos.


function sumar(a, b) {  // a y b son parametros 
    console.log(a + b);
}

// Aquí se le pasa un valor a los parametros
sumar(2, 3); // 2 y 3 son argumentos, son los valores reales



function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan', 'De La Torre');