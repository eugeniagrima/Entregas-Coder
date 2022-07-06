let inputNombreU =localStorage.getItem("inputNombreU");
let inputApellidoU =localStorage.getItem("inputApellidoU");
const formularioIu = document.querySelector("#formularioIu");
const nombreUsuarioU = document.querySelector("#nombreUsuarioU");
const apellidoUsuarioU = document.querySelector("#apellidoUsuarioU");
const edadUsuarioU = document.querySelector("#edadUsuarioU");
const contFormulario = document.querySelector("#contFormulario");
const contenidoO = document.querySelector("#contenidoO");

const botonPrueba = document.getElementById("enviarPrueba");

formularioIu.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("nombre", nombreUsuarioU.value);
    localStorage.setItem("apellido", apellidoUsuarioU.value);
    localStorage.setItem("edad", edadUsuarioU.value);
})

botonPrueba.addEventListener("click", (e) => {
    if (nombreUsuarioU.value != "" || apellidoUsuarioU.value != "" || edadUsuarioU.value != "") {
        contFormulario.style.display = "none";
        var newContent = document.createTextNode(`Hola ${nombreUsuarioU.value} ${apellidoUsuarioU.value} Tenés ${edadUsuarioU.value} años.`);

        formularioIu.append(newContent)
    } else {
        alert("Completar los campos faltantes")
    }
})

nombreUsuarioU.addEventListener("input", (e) => {
    sessionStorage.setItem("inputNombreU", nombreUsuarioU.value);
})
apellidoUsuarioU.addEventListener("input", (e) => {
    sessionStorage.setItem("inputApellidoU", nombreUsuarioU.value);
})
edadUsuarioU.addEventListener("input", (e) => {
    sessionStorage.setItem("inputEdadU", nombreUsuarioU.value);
})

const objeto = { base: "Higiene Base", precio: 3500 };
localStorage.setItem("base", JSON.stringify(objeto));
const objetoRecuperado  = JSON.parse(localStorage.getItem("base"));
console.log(objetoRecuperado);