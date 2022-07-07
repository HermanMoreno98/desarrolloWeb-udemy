// Declaracion de funcinoes

function sumar() {
  console.log(10 * 10);
}

sumar();

// Expresión de la función
const sumar2 = function () {
  console.log(3 * 3);
};

sumar2();

// IIFE
(function () {
  console.log("Esto es una funcion");
})();

const numero1 = 20;
const numero2 = "20";

console.log(numero2);
// Funcion
console.log(Number(numero2));
// Metodo
console.log(numero1.toString());

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 10);

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}
function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);
const totalPagar = calcularImpuesto(total);
console.log(total);
console.log(`El total a pagar con impuestos es de $${totalPagar}`);

// Metodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el ID ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`Reproduciendo la playlist ${nombre}`);
  },
};

reproductor.borarCancion = function (id) {
  console.log(`Elminando la cancion ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borarCancion(20);
reproductor.crearPlaylist("Piso 21");
reproductor.reproducirPlayList("Piso 21");

// Arrow Functions

const multiplicar = (n1, n2) => console.log(n1 * n2);
multiplicar(2, 3);
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo("JS");

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// Sin arrow function
meses.forEach(function (mes) {
  console.log(mes);
});

// Con arrow function
meses.forEach((mes) => console.log(mes));

const carrito = [
  {
    nombre: "Monitor 20 pulgadas",
    precio: 500,
  },
  {
    nombre: "Television 50 pulgadas",
    precio: 300,
  },
  {
    nombre: "Television 80 pulgadas",
    precio: 400,
  },
  {
    nombre: "Television 20 pulgadas",
    precio: 30,
  },
  {
    nombre: "Monitor",
    precio: 300,
  },
  {
    nombre: "Mouse",
    precio: 300,
  },
  {
    nombre: "Celular",
    precio: 300,
  },
];

let resultado;
resultado = carrito.some(function (producto) {
  return producto.nombre === "Mouse";
});

resultado = carrito.some (producto => producto.nombre === "Mouse");
console.log(resultado);

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio , 0);

console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== "Celular");

console.log(resultado);