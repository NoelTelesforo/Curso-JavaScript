


const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 700,
    disponible: true
}


// Una variable aunque este declarada con const, al estar en un objeto sus propiedades si se pueden reescribir o eliminar:

producto.disponible = false; // Devuelve false.

// Elimina la propiedad de precio:
delete producto.precio;

console.log(producto);