// Clases

class Producto {
    
    constructor(nombre, precio){
        this.nombre = nombre,
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

const producto = new Producto('Monutor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 2000);

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formaterProducto(){
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JS la revolución', 120, '5345345345345');
const libro2 = new Libro('JS la revolución', 120, '5345345345345');

console.log(producto);
console.log(producto2.formatearProducto());
console.log(libro2.formatearProducto());

// TryCatch

const numero1 = 20;
const numero3 = 30;

console.log(numero1);
try {
    console.log(numero2);
} catch (error) {
    console.log(error)
}
console.log(numero3);