const contenedor = document.getElementsByClassName("main__contenedor");
const presentacion = document.getElementsByClassName("main__presentacion");
contenedor.addEventlistener("mousedown", () => {
    contenedor.style.backgroundcolor = "grey";
});