// Parte 3.1 de lo solicitado en el Desafio
ele = document.getElementById("ele1")
function pintar(){
ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar);


// Parte 3.2 de lo solicitado en el Desafio
ele2 = document.getElementById("ele2");
ele2.style.backgroundColor = 'green';
ele2.addEventListener("click", function () {
    pintarse("yellow")
});
function pintarse(Color){
    ele2.style.backgroundColor = Color;
}



