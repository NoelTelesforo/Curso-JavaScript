// Variables
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    
    // Muestra los autos al cargar
    mostrarAutos(autos);
    
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