
// FORMAS DE CREAR CLASES EN JAVASCRIPT

// CLASS DECLARATION:
// DEFINICIÓN DE CLASE
// EN EL CONSTRUCTOR LE PASAMOS LOS VALORES QUE VA A TENER EL OBJETO UNA VEZ QUE ES INSTANCIADO

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

// INSTANCIAR CLASE
const juan = new Cliente('Juan', 400);
console.log(juan);






// CLASS EXPRESION
// DEFINICIÓN DE CLASE
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// INSTANCIAR CLASE
const juan2 = new Cliente2('Juan', 400);
console.log(juan2);