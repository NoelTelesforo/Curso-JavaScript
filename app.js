
// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




// Eventos (cuando demos click o el documento este listo)
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

}



// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    console.log(presupuestoUsuario);

    // Recarga la ventana actual
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario ) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
}