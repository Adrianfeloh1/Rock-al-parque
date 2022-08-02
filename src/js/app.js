document.addEventListener("DOMContentLoaded", function (){
    scrollNav()
})

function scrollNav() {
    const enlaces = document.querySelectorAll (".navegacion-principal a");
    //console.log(enlaces); //para verificar que aparezcan todos los enlaces

    enlaces.forEach(function(enlace){ //Para iterar cada uno de los elementos
        //console.log(enlace); // Verificamos que ya accedemos a cada enlace
        enlace.addEventListener("click", function(e){
            e.preventDefault();
            //console.log(e.target.attributes.href.value); //para verificar a que elemento damos click
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({ 
                //se le pasa el siguiente objeto de configuración
                behavior:"smooth",
            }); // con esto obtenemos el mismo efecto de salto directo
        });
    });
}