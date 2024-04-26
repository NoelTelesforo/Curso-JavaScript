

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


// Arreglo de objetos
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

// Encontrar que elemento del arreglo custa 300
const busqueda = carrito.findIndex(producto => producto === 300);
console.log(busqueda);


// Encontrar que elemento del arreglo que sea igual a Abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(i); // 3


