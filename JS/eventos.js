const contenedor = document.getElementById("prueba_contenedor");
const presentacion = document.getElementById("prueba_presentacion");
const prueba = document.getElementById("prueba");
prueba.addEventlistener("mouseover", () => {
    presentacion.style.backgroundcolor = "red";
    prueba.style.color = "blue";
});

prueba.onmouseout = () => {
    contenedor.style.background = "white";
    presentacion.style.backgroundcolor = "white";
    prueba.style.color = "black";
}
const formulario = document.getElementsByClassName("contForm");
formulario.onsubmit = (e) => {
    e.preventdefault();
    
}
//CUANDO LO HAGO NO SE ME CAMBIA DE COLOR NADA!