/* POO */ 
// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor

function Producto(nombre, precio){
    this.nombre = nombre,
    this.precio = precio
}

function Cliente (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente es ${this.nombre} ${this.apellido}`;
}

const producto2 = new Producto('Mouse',100);
const cliente = new Cliente('Paul','Moreno');


console.log(producto2.formatearProducto());
console.log(cliente.formatearCliente());

