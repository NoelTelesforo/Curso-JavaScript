

// Object Literal
const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio: 700,
    disponible: true
}




// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre; // this.nombre va a ser igual al nombre que le vamos a pasar.
    this.precio = precio; // this.precio va a ser igual al orecio que le vamos a pasar.
    this.disponible = true; // se asigna true
}

const producto2 = new Producto('Monitor 70 Pulgadas', 7000);
console.log(producto2); // Devuelve un tipo de dato Producto que es un objeto.



const producto3 = new Producto('Tablet', 900);
console.log(producto3); // Devuelve un Producto (objeto) con las propiedades definidas en Producto.