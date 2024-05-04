
// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




// Eventos (cuando demos click o el documento este listo)
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

}


// Clases

class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {

}


// Instanciar
const ui = new UI();
let presupuesto;


// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    // console.log(presupuestoUsuario);

    // Recarga la ventana actual
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario ) || presupuestoUsuario <= 0) {
        window.location.reload();
    }


    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
}