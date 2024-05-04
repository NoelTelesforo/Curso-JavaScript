
// FORMAS DE CREAR CLASES EN JAVASCRIPT

// CLASS DECLARATION:
// DEFINICIÓN DE CLASE
// EN EL CONSTRUCTOR LE PASAMOS LOS VALORES QUE VA A TENER EL OBJETO UNA VEZ QUE ES INSTANCIADO

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // MÉTODOS DE LAS CLASES AL FINAL SON FUNCIONES, DENTRO DE LAS CLASES SE LLAMAN MÉTODOS

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // MÉTODO ESTÁTICO, PARA LLAMARLO NO ES NECESARIO INSTANCIAR LA CLASE
    static bienvenida() {
        return `Bienvenido alcajero`;
    }

}

// INSTANCIAR CLASE
const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());
console.log(juan);

console.log(Cliente.bienvenida());






// CLASS EXPRESION
// DEFINICIÓN DE CLASE
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

// INSTANCIAR CLASE
const juan2 = new Cliente2('Juan', 400);
console.log(juan2.mostrarInformacion());
console.log(juan2);