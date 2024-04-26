


// Como unir dos objetos

const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio: 700,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto); // Devuelve el objeto de producto.
console.log(medidas); // Devuelve el objeto de medidas.



// Metodo que une ambos objetos y los asigna a resultado:
const resultado = Object.assign(producto,medidas);



// Spread Operator o Rest Operator, une ambos objetos y los asigna a resultado. los tres puntos quiere decir copia esta variable, en seguida el nombre de la variable a copiar:

// toma una copia de producto y asignala dentro del objeto
// toma una copia de medidas y asignala dentro del objeto
const resultado2 = { ...producto, ...medidas }




console.log(resultado);
console.log(resultado2);