class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido alcajero`;
    }

}

// Herencia
// super, para heredar atributos del constructor padre
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Reescribir el metodo de la clase padre
    static bienvenida() {
        return `Bienvenido alcajero de empresa`;
    }
}


// Instancia la clase
const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo Con Juan', 500);

console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());