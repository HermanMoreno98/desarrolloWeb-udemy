# desarrolloWeb-udemy
Curso de desarrollo web - Udemy

### Páginas
Iconos
. https://tablericons.com/
Fuentes extenas
. https://fonts.google.com/
Normalize: Para que todos los elementos sean consistentes en todos los navegadores
. https://necolas.github.io/normalize.css/
Media Querys
. 480px: para telefono
. 768px: para tablets
. 1140px: para pc
Responsive Page
. https://responsively.app/
Model caja solución
. https://www.paulirish.com/2012/box-sizing-border-box-ftw/
CSS Magic
. https://www.cssmatic.com/box-shadow
Soporte de navegadores
. https://caniuse.com/


### Instalando SASS
1. Ubicarse en la carpeta del proyecto con el terminal
2. npm init
3. npm install sass --save-dev
4. Se puede eliminar la carpeta Node.modules y volver a instalar sass
5. npm i

### Compilando SASS con NPM
1. Crear una nueva carpeta. Ejm: src
2. Crear una otra carpeta dentro de src, Ejm: scss
3. Crear un archivo. Ejm: app.scss
4. Dentro de 'Package.json' escribir lo siguiente: 
"scripts": {
    "sass": "sass --watch src/scss:build/css"
},
5. Verificar antes de ejecutar las lineas anteriores, si existe la carpeta 'node_modules'. si no es asi, debe instalarla con 'npm i'
6. En el temrinar digitar: npm run sass
7. Si deseo detener el 'Watch' para que no actulice automaticamente los cambios. Presionar Ctrl + C

### Instalando Gulp
1. npm i -D gulp
2. Crear archivo en el root: gulpfile.js

### Ejecutando funcion con gulp
1. Crear funcion en gulp
2. Llamar la funcion desde la terminal: 
npx gulp 'nombrefuncion'
3. Ejemplo
function tarea(done){
    console.log('mi primera tarea');

    done();
}

exports.primerTarea = tarea;

### Ejecutando funcion con npm
1. Modigicar el 'package.json'
"scripts": {
    "sass": "sass --watch src/scss:build/css",
    "tarea" : "gulp tarea"
},
2. Escibir en la terminal
npm run tarea

### Compilando SASS con Gulp
1. Instalando gulp-sass
npm i --save-dev gulp-sass
2. Llamar la funcion
npx gulp dev
o
npm run dev

npm i --save-dev gulp-plumber
Convertir imagen a webp
npm install --save-dev gulp-webp

### Minificando codigo CSS
npm i --save-dev cssnano autoprefixer postcss gulp-postcss

### Para refenrciar codigo de scss en el navegador
npm i --save-dev gulp-sourcemaps

### Para JS
npm i --save-dev gulp-terser-js