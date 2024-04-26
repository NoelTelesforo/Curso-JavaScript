

// keydown, se ejecuta cuando presionas una tecla

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...') // Muestra en la pantalla
});



// keyup, se ejecuta cuando presionas y sueltas la tecla.
busqueda.addEventListener('keyup', () => {
    console.log('Escribiendo...') // Muestra en la pantalla
});



// blur, se ejecuta cuando te colocas en un input y se da click por fuera. EXCELENTE PARA VALIDACIONES
busqueda.addEventListener('blur', () => {
    console.log('Escribiendo...') // Muestra en la pantalla
});


// Nos dice sobre que elementos estamos trabajando
busqueda.addEventListener('input', (e) => {
    console.log(e.target) // Muestra en la pantalla
});



// Nos dice lo que el usuario esta escribiendo:
// Ideal para una busqueda en un sitio web
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value); // Muestra en la pantalla
});