
// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




// Eventos (cuando demos click o el documento este listo)
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);

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
    insertarPresupuesto(cantidad) {
        
        // Extrae el valor
        const {presupuesto, restante} = cantidad;

        // Agrega al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    // Imprime un mensaje (error o correcto)
    imprimirAlerta(mensaje, tipo) {

        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'errro') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alerta-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').onsertBefore(divMensaje, formulario);

        // Quita el mensaje del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
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

    ui.insertarPresupuesto(presupuesto);
}


// Añade gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leé los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Valida el formulario
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if(cantidad <=0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }
}