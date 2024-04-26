

// Añadir funciones en un objeto

// Métodos de propiedad, son funciones con una sintaxis que al utilizarla es lo mismo que un método.

// A esta sintaxis se le conoce como métodos de propiedad, cuando hay una propiedad con una función:

const reproductor = {
    reproducir: function(id) { 
        console.log(`Reproduciendo canción con el id: ${id}`)
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando la canción... ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`)
    },
    reproducirPLaylist: function(nombre) {
        console.log(`Se esta reproduciendo la playlist: ${nombre}`);
    }
}

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