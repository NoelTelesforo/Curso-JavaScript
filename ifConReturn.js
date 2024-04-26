

const autenticado = true;

if(autenticado) {
    console.log('El usuario esta autenticado');
}



const puntaje = 450;

// Los return solo funcionan dentro de las funciones.
// Return, comprueba que se cumpla la condición, imprime el mensaje y se sale del if y ya no se ejecuta la siguiente líenea. (verifica y/o ejecuta lo que hay en el if)

function revisarPuntaje(){
    if(puntaje > 400) {
        console.log('Excelente!!!');
        return;
    } else if(puntaje > 300) {
        console.log('Buen puntaje... Felicidades');
        return;
    }
}