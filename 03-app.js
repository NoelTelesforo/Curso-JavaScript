
// CREANDO UN PROTOTYPE, USA FUNCTION () PARA ACCEDER A LAS PROPEDADES CON THIS

// EL PROTOTYPE MANTIENE LA REFERENCIA HACIA EL OBJETO ACTUAL Y POR ESO QUE LOS OBJETOS Y LOS PROTOTYPES ESTAN MUY RELACIONADOS

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




// INSTANCIARLO (Crear una nueva instancia del objeto)

const pedro = new Cliente('Pedro', 6000);

console.log(pedro.tipoCliente() );
console.log(pedro.nombreClienteSaldo() );
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo() );


console.log(pedro);






// DIFERENCIA ENTRE FUNCTION() Y ARROWFUNCTON

// FUNCTION BUSCA EN EL OBJETO ACTUAL

// ARROWFUNCTION BUSCA EN LA VENTANA GLOBAL