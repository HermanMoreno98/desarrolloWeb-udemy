const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

// Accediendo a las propiedades del objeto
console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);


// *Agregando una propiedad al objeto

producto.imagen = "imagen.jpg";
console.log(producto);

// *Eliminando propiedades

delete producto.disponible;
console.log(producto);

const precioProducto = producto.precio;
const nombreDelProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreDelProducto);

// *Desctructuring objetos

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

// *Spread operator

const medidas = {
    peso: "1kg",
    medida: "1m",
};

const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);