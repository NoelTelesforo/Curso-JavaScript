


// Destructuring a objetos grandes

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 700,
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


// Crea la variable y va a asiganarle o extraer el valor del nombre del producto:

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;


// Imprime el valor de la variable:
console.log(nombre); 

console.log(informacion); 

console.log(fabricacion);

console.log(pais);