


const auto = {
    modelo: 'Mustang',
    año: 1968,
    motor: '6.0'
}


// Muestra los valores.
for(let propiedad in auto) {
    console.log(`${auto[propiedad]}`);
}



// ECMASCRIPT 6

// Muestra las llaves y los valores
for(let[llave, valor] of Object.entries(auto)) {
    console.log(llave);
    console.log(valor);
}