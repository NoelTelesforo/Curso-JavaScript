// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    
    // Muestra los autos al cargar
    mostrarAutos(autos);

    // Llena las opciones de años
    llenarSelect();
    
});

// Event listener para los select de búsqueda
marca.addEventListener('Change', e => {
    datosBusqueda.marca = e.target.value;
});

year.addEventListener('Change', e => {
    datosBusqueda.year = e.target.value;
});

minimo.addEventListener('Change', e => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('Change', e => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('Change', e => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('Change', e => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('Change', e => {
    datosBusqueda.color = e.target.value;
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