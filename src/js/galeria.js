document.addEventListener("DOMContentLoaded", function () {
    crearGaleria();
})

function crearGaleria (){
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 12; i++) {

        //Primero se crea la imagen
        const imagen = document.createElement ("IMG");
        imagen.src = `build/img/thumb/${i}.webp`;    

        //para verificar en la consola
            //console.log(imagen);

        // Despues agrego el li
        const lista = document.createElement ("LI");

        // Y en el li agregamos la imagen
        lista.appendChild(imagen);
        
        //por ultimo agregamos los li a la galeria
        galeria.appendChild(lista);
    }
}
