


// Objetos dentro de objetos


const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: { 
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto); // Devuelve todo el objeto en forma de arbol.

console.log(producto.informacion); // Devuelve peso y medida.

console.log(producto.informacion.peso); // Devuelve peso.

conosole.log(producto.informacion.fabricacion.pais) // Devuelve China.