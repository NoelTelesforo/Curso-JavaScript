const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('clcik', agregarCurso);
}

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


function leerDatosCurso(curso) {
    console.log(curso)

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        // Actualiza la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso ) {
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    carritoHTML();
}


function carritoHTML() {
    
    articulosCarrito.forEach(curso => {

        // Limpia el HTML
        limpiarHTML();

        const {imagen, titulo, precio, cantidad, id} = curso;

        // Recorre el carrito y genera el HTML
        const row = documment.createElement('tr');
        row.innerHTML = `
            <td> <img src="${imagen}" width="100"> </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}