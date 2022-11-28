window.addEventListener("load",function() {
    document.getElementById('loader').classList.toggle('loader2');
})

function cambiar(){
    document.getElementById('cambiomapa').src="img/grande.png";
}
  
function volver(){
    document.getElementById('cambiomapa').src="img/mapafuera.png";
}

function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("adaptacion");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

let nombre = document.getElementById('name');
let email = document.getElementById('mail');
let telefono = document.getElementById('phone');
let mensaje = document.getElementById('message');
let error = document.getElementById('error');

function enviarFormulario() {

    console.log('Enviando formulario...');

    let mensajeError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajeError.push('Ingresa un nombre');
    }

    if (email.value === null || email.value === '') {
        mensajeError.push('Ingresa un email.');
    }

    if (mensaje.value === null || mensaje.value === '') {
        mensajeError.push('Ingresa un mensaje');
    }

    error.innerHTML = mensajeError.join(', ');

    return false;

}