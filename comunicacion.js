
// Una función manda a llamar otra función dentro de ella.
// Siempre tiene que haber una función que inicie todo.



iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');    //Iniciando app

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');    // Desde la segunda función

    usuarioAutenticado('Juan');
}


// Autenticand usuario... espere...
// Usuario autenticado exitosamente: Noel

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}