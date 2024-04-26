

// Nos dice en que lugar se encuentra un elemento
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = document.querySelector();


    if(ubicacion.top < 784) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da más croll');
    }
});