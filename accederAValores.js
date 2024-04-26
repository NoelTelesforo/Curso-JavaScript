


// Aceder a los valores de un objeto

const producto = {
    nombre: 'Laptop',
    precio: 700,
    disponible: true
}

console.log(producto);


// Con la sinstaxis de punto podemos acceder a las propiedades de los objetos.
console.log(producto.precio); // 700


// Con [] tambien se puede acceder a las propiedades de los objetos pero no es muy comun:

console.log(producto['precio']); //700



// Acceder a las propiedasdes del objeto y asignarlos a una variable:

// Se extrae la propiedad nombre y se asigna a la variable nombre.
const nombre = producto.nombre;
console.log(producto.nombre);



// Destructuring: Extraer del objeto y crear la variable todo en un mismo paso:

// Permite extraer la propiedad con su valor y crea la variable, todo en un solo paso

const { precio, disponible } = producto;
console.log(precio); //700
console.log(disponible); //true


