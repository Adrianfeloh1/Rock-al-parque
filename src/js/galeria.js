document.addEventListener("DOMContentLoaded", function () {
    crearGaleria();
})

function crearGaleria (){
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 12; i++) {

        //Primero se crea la imagen
        const imagen = document.createElement ("IMG");
        imagen.src = `build/img/thumb/${i}.webp`;

        //3. nuevo atributo de html 5 para crear variables hacia el html
        imagen.dataset.imagenId = i;    

        //para verificar en la consola
            //console.log(imagen);

        /* 2. SE AÑADE LA FUNCION DE MOSTRAR IMAGEN */
        //se crea con el evento onclick
        imagen.onclick = mostrarImagen

        // Despues agrego el li
        const lista = document.createElement ("LI");

        // Y en el li agregamos la imagen
        lista.appendChild(imagen);
        
        //por ultimo agregamos los li a la galeria
        galeria.appendChild(lista);
    }
}

/* 2. SEGUNDA FUNCION PARA MOSTRAR UNA IMAGEN SELECCIONADA MAS GRANDE */

function mostrarImagen(e) {
    //se debe pasar de string a number    
    const id = parseInt(e.target.dataset.imagenId)// 3. dataset
    
    const imagen = document.createElement ("IMG");
        imagen.src = `build/img/grande/${id}.webp`;
        // console.log(imagen); para verificar que tome la imagen grande

        //PARA HACER LA SOMBRA DE FONDO CUANDO SE AMPLIA LA IMAGEN
        const overlay = document.createElement ("DIV");//se crea el div
        overlay.appendChild(imagen) // y se agrega la imagen
        overlay.classList.add("overlay")//se agrega una clase en css

        //LA IMAGEN QUEDA ABIERTA, ENTONCES DEBEMOS CREAR UN BOTON
        const cerrarImagen = document.createElement ("P");
        cerrarImagen.textContent = "X"; 
        cerrarImagen.classList.add ("boton-cerrar"); // se crea una clase en css

        //Cuando se presiona cierra la imagen
        cerrarImagen.onclick = function () {
            overlay.remove(); // con esto cerramos la imagen al darle click al la X 
        }

        //Cuando se presiona fuera de la imagen (en el overlay)
        overlay.onclick = function () {
            overlay.remove(); // con esto cerramos la imagen al darle click al la X 
        }

        overlay.appendChild(cerrarImagen);

        //PARA MOSTRARLO EN EL BODY DEL HTML
        const body = document.querySelector("body");
        body.appendChild(overlay) // con esto se van creando divs en el html con cada click

        //PARA FIJAR LA IMAGEN SIN EL SCROLL
        body.classList.add("fijar-body") //se agrega css preferiblemente en los blobales

}
