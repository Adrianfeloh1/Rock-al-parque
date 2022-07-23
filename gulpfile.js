const { series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");


function css( ) {
    return src ("src/scss/**/*.scss")
        .pipe( sass() )
        .pipe( dest("./build/css") );
}

function minificarCss( ) {
    return src ("src/scss/**/*.scss")
        .pipe (sass({
            outputStyle: "expanded"
        }))
        .pipe (dest("./build/css"));
}

function imagenes() {
    return src("src/img/**/*")
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Imagen Minificada"}));
  }

function versionWebp(){
    return src("src/img/**/*")
    .pipe (webp())
    .pipe (dest("./build/img"))
    .pipe (notify({ message: "Imagen webp"}))
}
  

function watchArchivos() {
    watch ("src/scss/**/*.scss", css); // * es igual a la carpeta actual
    // LA SINTAXIS **/* RECORRE TODAS LAS CARPETAS QUE HAY ADENTRO SCSS
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series ( css, imagenes, versionWebp, watchArchivos)

/* SE LLAMA EN LA TERMINAL SOLO CON LA PALABRA GULP */