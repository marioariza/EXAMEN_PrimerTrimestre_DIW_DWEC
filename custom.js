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

function enviar() {

    let nombre = document.getElementById('name');
    let email = document.getElementById('mail');
    let telefono = document.getElementById('phone');
    let mensaje = document.getElementById('message');

    let valornombre = nombre.value;
    let expRegNomApe = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";

    if (valornombre === null || valornombre === '') {
        alert('Tienes que rellenar el campo "Nombre".');
    } else if (valornombre.match(expRegNomApe) == null) {
        alert('Nombre y apellidos inválidos (Ejemplo: Cristiano Ronaldo)');
    }

    let valorEmail = email.value;
    let expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (valorEmail === null || valorEmail === '') {
        alert('Tienes que rellenar el campo "Email".');
    } else if (valorEmail.match(expRegEmail) == null) {
        alert('Email inválido (Ejemplo: nombre@gmail.com).')
    }

    let valorTelefono = telefono.value;
    let expRegTel = /^\d{3}\s\d{2}\s\d{2}\s\d{2}$/;

    if (valorTelefono === null || valorTelefono === '') {
        alert('Tienes que rellenar el campo "Télefono".');
    } else if (valorTelefono.match(expRegTel) == null) {
        alert('Télefono inválido (Ejemplo: 665 65 65 65, 9 cifras, las 3 primeras separadas por un espacio las siguientes agrupadas de 2 en 2).')
    }

    let valorMensaje = mensaje.value;

    if (valorMensaje === null || valorMensaje === '') {
        alert('Tienes que rellenar el campo "Mensaje".');
    } 

    if (valornombre !== null && valornombre !== '' && valornombre.match(expRegNomApe) !== null && valorEmail !== null && valorEmail !== '' && valorEmail.match(expRegEmail) !== null && valorTelefono !== null && valorTelefono !== '' && valorTelefono.match(expRegTel) !== null && valorMensaje !== null && valorMensaje !== '') {
        alert('Formulario enviado correctamente');
    }

}