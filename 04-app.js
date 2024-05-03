
// HEREDAR UN PROTOTYPE


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// FUNCIÓN EXCLUSIVA DE Cliente, no va a estar disponible en Empresa
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platino';
    } else {
        tipo = 'Bronce';
    }

    return tipo;    
}


// EN ESTE PROTOTYPE ESTAMOS MANDANDO LLAMAR AL PROTOTYPE tipoCliente
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}


Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


// OBJETO DE PERSONA
// HEREDA DE Cliente
// .call() manda a llamar una función con this
// Se puede decir que se esta heredando el constructor de cliente

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}



// HEREDAR LAS FUNCIONES DE PROTOTYPE
// DE ESTA FORMA SE PASA TODO EL PROTOTYPE DE CLIENTE HACIA EL PROTOTYPE DE PERSONA

// Object.create(), es una función diseñada para copiar el prototype y asignarlo a otra función.

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;



// SE INSTANCIA EL OBJETO DE PERSONA
const juan = new Persona('Juan', 5000, 123456789);
console.log(juan);
console.log(juan.nombreClienteSaldo());





Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(juan.mostrarTelefono( ));