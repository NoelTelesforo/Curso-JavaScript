



// Arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


// Nos dice cuánto mide el arreglo: length, inicia en 1.
console.log(meses.length); // Devuelve 5


// Recorrer un array
// for loop, es una funcioón que tiene 3 partes en el paréntesis: 1.- Valor donde va a iniciar, 2.- Cuántas veces quieres que se ejecute este código, 3.- Se incrementa de 1 en 1.

for(let i= 0; i < meses.length; i++) {
    console.log( meses[i]); // i, va ir cambiando en cada iteración
}