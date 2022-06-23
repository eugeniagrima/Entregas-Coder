const contenedor = document.getElementsByClassName(".main__contenedor");
const presentacion = document.getElementsByClassName(".main__presentacion");
contenedor.addEventlistener("mouseover", () => {
    contenedor.style.backgroundcolor = "grey";
    presentacion.style.backgroundcolor = "grey";
});

contenedor.onmouseout = () => {
    contenedor.style.backgroundcolor = "white";
    presentacion.style.backgroundcolor = "white";
}