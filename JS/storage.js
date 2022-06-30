let inputNombreU =localStorage.getItem("inputNombreU");
let inputApellidoU =localStorage.getItem("inputApellidoU");
const formularioIu = document.querySelector("#formularioIu");
const nombreUsuarioU = document.querySelector("#nombreUsuarioU");
const apellidoUsuarioU = document.querySelector("#apellidoUsuarioU");
const edadUsuarioU = document.querySelector("#edadUsuarioU");
const contFormulario = document.querySelector("#contFormulario");
const contenidoO = document.querySelector("#contenidoO");

formularioIu.addEventListener("submit", (e) => {
e.preventDefault();
//nombreUsuarioU = nombreUsuarioU.value;
//apellidoUsuarioU = apellidoUsuarioU.value;
//edadUsuarioU = edadUsuarioU.value;
localStorage.setItem("nombre", nombreUsuarioU.value);
localStorage.setItem("apellido", apellidoUsuarioU.value);
localStorage.setItem("edad", edadUsuarioU.value);
})
const ocultarForulario = () => {
    contFormulario.style.display = "none";
    contenidoO.innerText = "Hola ${nombreUsuarioU} ${apellidoUsuarioU} Tenés ${edadUusarioU} años."; //NO SE PORQUE ME QUEDA ASI!
}
if (!!nombreUsuarioU && !!apellidoUsuarioU && !!edadUsuarioU) {
    ocultarForulario();
}
//NO ENTIENDO PORQUE NO ME SALE

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