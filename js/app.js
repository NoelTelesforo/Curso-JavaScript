// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    
    // Muestra los autos al cargar
    mostrarAutos(autos);

    // Llena las opciones de años
    llenarSelect();
    
});



// Funciones
function mostrarAutos() {

    const {marca, modelo, year, puertas, transmision, precio, color }= auto;
    const autoHMTL = document.createElement('p');

    autoHMTL.textContext = `^
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    
    
    `;

    // Insertar en el HTML
    resultado.appendChild(autoHMTL);
}

// Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        // Agrega las opciones de año al select
        year.appendChild(opcion);
    }
}