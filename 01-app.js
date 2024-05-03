// QUÉ SON LOS PROTOTYPES: Todo lo que hay en el proto son funciones exclusivas de ese objeto

// ESTAN MUY RELACIONADOS CON LOS OBJETOS

// TODOS LOS OBJETOS TIENEN UN PROTOTYPE





// FORMA DE CREAR OBJETOS:

// 1.- OBJECT LITERAL, es menos dinámica
const cliente = {
    nombre: 'Juan',
    saldo: 300
}
console.log(cliente);



// OBJETO REUTILIZABLE QUE SE PUEDA UTILIZAR EN MUCHAS ISNTANCIAS CON MUCHOS DATOS. PUEDE CREAR MULTIPLES INSTANCIAS DE DIFERENTES CLIENTES.

// 2.- OBJECT CONSTRUCTOR:
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 300);
console.log(juan);