


// Ejercicios se cambió a arrow functions


const reproductor = {

    cancion: '',

    reproducir: id => console.log(`Reproduciendo canción con el id: ${id}`),

    pausar: () => console.log('pausando...'),

    borrar: id => console.log(`Borrando la canción... ${id}`),
    
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    
    reproducirPLaylist: nombre => console.log(`Se esta reproduciendo la playlist: ${nombre}`),



    // MÉTODOS DE PROPIEDAD GET Y SET

    // set, es una forma de agregar valores
    // el this es para que busque dentro del objeto
    set nuevaCacion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    // get, es una forma de obtener devuelta esos valores
    get obtenerCancion() {
        this.cancion = cancion;
        console.log(`${this.cancion}`);
    }
}

// Se usan como si fueran un objeto:
// Devuelve: Añadiendo Enter Sandman
reproductor.nuevaCacion = 'Enter Sandman';

// Deuelve: Enter Sandman
reproductor.obtenerCancion;



// Reproduciendo canción con el id 30
reproductor.reproducir(30);

// Reproduciendo canción con el id 20
reproductor.reproducir(20);

// Devuelve pausando...
reproductor.pausar();

// Devuelve Borrando la canción... 30
reproductor.borrar(30);

// Devuelve: Creando la playlist de Heavy Metal
reproductor.crearPlaylist('Heavy Metal');

// Devuelve: Creando la playlist de Rock 90s
reproductor.crearPlaylist('Rock 90s');

// Devuelve: Se esta reproduciendo la playlist Heavy Metal
reproductor.reproducirPLaylist('Heavy Metal');