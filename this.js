


// La palabra this: Se refiere a los valores que existen en el mismo objeto.

// this, es una forma de referirse al objeto en si mismo

const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio: 700,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

// Devuelve: El producto: Monitor 20 Pulgadas tiene un precio de: 700
producto.mostrarInfo();