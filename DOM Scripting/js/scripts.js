// Seleccionar contenido

// *querySelector
const heading = document.querySelector('.header__texto h2');
//heading.textContent = 'Nuevo heading';
//heading.classList.add('nueva-clase');
console.log(heading);

// *querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo texto';
enlaces[0].href = 'https://google.com'
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// *getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregando el texto
nuevoEnlace.textContent = 'Tienda virtual';
// Agregando la clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


// *EVENTOS

console.log(1);

window.addEventListener('load', imprimir())

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // Espera a que se descarge el HTML, sin tener en cuenta el CSS o imagenes
    console.log(4);
})


console.log(5);

function imprimir(){
    console.log(2);
}

// window.onscroll = function(){
//     console.log('Scrolling...')
// }

// Seleccionar elementos y asociales un evento
// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('Enviando formulario');
// });

// *Eventos de los inputs o textarea

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// Evento submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // Validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }
    mostrarAlerta('Se envió correctamente')
    // Enviar el formulario
    //console.log('Enviando formulario');
})

function leerTexto(e){
    // console.log(e.target.value)

    // Agregando lo que escribo en los input al arreglo 'datos'
    datos[e.target.id] = e.target.value;

    // console.log(e.target);

    // console.log(datos)
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparezca despues de 5 seg
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}





