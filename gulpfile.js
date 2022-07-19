const { series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( ) {
    return src ("src/scss/app.scss")
        .pipe( sass() )
        .pipe( dest("./build/css") )
}

function minificarCss( ) {
    return src ("src/scss/app.scss")
        .pipe (sass({
            outputStyle: "expanded"
        }))
        .pipe (dest ("./build/css"))
}

function watchArchivos() {
    watch ("src/scss/**/*.scss", css); // * es igual a la carpeta actual
    // LA SINTAXIS **/* RECORRE TODAS LAS CARPETAS QUE HAY ADENTRO SCSS
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;