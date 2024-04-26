

// En que valores una variale declarada en const se puede modificar sus valores? En objetos y en arreglos


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


// Agrear valor nuevo a un array:
meses[0] = 'Nuevo Mes';


// Forma de agregar elementos a un arreglo:
// La estamos creando y le estamos asignando un valor. 
meses[5] = 'Ultimo mes';

// Devuelve Nuevo Mensaje en la posisción 0.
console.log(meses); 