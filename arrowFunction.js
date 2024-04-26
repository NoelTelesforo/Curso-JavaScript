

// Funciones Flecha (Arrow functions).
// Son otra forma de declarar funciones.

// Función de tipo expresión, se crea como una variable:

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}


// Arrow Function
// Cuando tienen una sola línea dan por implicito el return.
// Cuando tienes una función con una línea las llaves no son necesarias.


const aprendiendo2 = () => 'Aprendiendo JavaScript';

console.log(aprendiendo2());