document.addEventListener("DOMContentLoaded", function (){
    scrollNav();

    navegacionFija();
});

function navegacionFija() {

    //PASO 2 
    const barra = document.querySelector(".header");

    //Registrar el intersection observer
    //entries nos da la infomación del elemento a observar
    //Estamos usando la API de intersectionObserver y le pasamos entries
    const observer = new IntersectionObserver(function(entries){
        //console.log(entries[0]); //para verificar cuando deja de ser visible intersecting en la consola
        if (entries[0].isIntersecting === true) {
            //console.log("Elemento visible");
            barra.classList.remove("fijo"); // para quitar en la consola en el html
        } else {
            //console.log("Ya desapareció");
            barra.classList.add("fijo");// para agregar en la consola en el html
        }  //PASO 2
    })
    // Elemento a observar 
    // La API intersectionObserver tiene el metodo observe y tomamos el elemento a observar .sobre-festival

    observer.observe(document.querySelector(".sobre-festival"));
}

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