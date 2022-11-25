window.addEventListener("load",function() {
    document.getElementById('loader').classList.toggle('loader2');
})

function cambiar(){
    document.getElementById('cambiomapa').src="../img/grande.png";
}
  
function volver(){
    document.getElementById('cambiomapa').src="../img/mapafuera.png";
}