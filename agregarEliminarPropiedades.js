
const producto = {
    nombre: 'Laptop',
    precio: 700,
    disponible: true
}


// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";



// Eliminar propiedad del objeto
delete producto.disponible;

console.log(producto);