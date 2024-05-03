localStorage.setItem('nombre', 1);


const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
}

// Para agregar elementos al local storage, lo hacemos con localStorage.setItem.


const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);


const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
