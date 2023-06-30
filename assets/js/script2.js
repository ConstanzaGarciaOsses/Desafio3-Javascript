let VarGlob = ''; // Mi variable global

let Div1 = document.querySelector("#Zona1");
let Div2 = document.querySelector("#Zona2");
let Div3 = document.querySelector("#Zona3");
let Div4 = document.querySelector("#Zona4");

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'a') {
        VarGlob = "pink";
    } 
    else if (event.key.toLowerCase() === 's') {
        VarGlob = "grey";
    }
    else if (event.key.toLowerCase() === 'd') {
        VarGlob = "purple";
    }
    else {
        VarGlob = "white";
    }
});

Div1.addEventListener("click", function(){
    Div1.style.backgroundColor = VarGlob;
});
    
Div2.addEventListener("click", function(){
    Div2.style.backgroundColor = VarGlob;
});

Div3.addEventListener("click", function(){
    Div3.style.backgroundColor = VarGlob;
});

Div4.addEventListener("click", function(){
    Div4.style.backgroundColor = VarGlob;
});

