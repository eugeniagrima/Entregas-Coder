const contenedor = document.getElementById("prueba_contenedor");
const presentacion = document.getElementById("prueba_presentacion");
const prueba = document.getElementById("prueba");

prueba.addEventListener("mouseover", () => {
    presentacion.style.background = "grey";
    prueba.style.color = "green";
});

prueba.onmouseout = () => {
    contenedor.style.background = "white";
    presentacion.style.background = "white";
    prueba.style.color = "black";
}
const formulario = document.getElementsByClassName("contForm");
formulario.onsubmit = (e) => {
    e.preventdefault();
    
}
