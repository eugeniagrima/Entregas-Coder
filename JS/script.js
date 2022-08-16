function guardarDatos() {
  localStorage.nombreUsuarioU = document.getElementById("nombreUsuarioU").value;
  localStorage.apellidoUsuarioU = document.getElementById("apellidoUsuarioU").value;
  localStorage.edadUsuarioU = document.getElementById("edadUsuarioU").value;
}
function recuperarDatos() {
  if ((localStorage.nombreUsuarioU != undefined) && (localStorage.apellidoUsuarioU != undefined) && (localStorage.edadUsuarioU)) {
    document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombreUsuarioU + "Apellido: " + localStorage.apellidoUsuarioU + "Edad: " + localStorage.edadUsuarioU;
  } else {
    document.getElementById("datos").innerHTML = "No ingresaste tus datos"
  }
}

const { value: formValues } = Swal.fire({
  title: 'Ingresa tu nombre',
  html:
    '<input id="username" class="username">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('username').value
    ]
  }
})

if (formValues) {
  Swal.fire(JSON.stringify(formValues))
}

(function () {
  document.querySelector(".swal2-confirm").addEventListener("click", logIn);    
}) ();


  function logIn () {
      let usuario = document.getElementById("username").value;
      let saludo = ("¡Hola, " + usuario + "!"); 
      
      //GUARDADO DE VALORES POR LOCAL STORAGE
      localStorage.setItem("usuario", usuario);
      console.log(localStorage.getItem("usuario"));
      localStorage.setItem("saludo", saludo);
  }

  function saludo (){
      $('#saludo').append(localStorage.saludo);
  }
  saludo()

//ACA LO QUE QUIERO ES QUE CUANDO APRIETA + INFO LE APREZCA EL MJE DE QUE VAYA A CONTACTO. PERO SI LE SACO EL DISPLAY DE CSS "NONE", ME APARECE, Y SI SE LO SACO NO APARECE NUNCA EL MJE! 
const botonaso = document.querySelector (`#masInfo`);
const popUp = document.querySelector(`#popup-mensaje`);

botonaso.addEventListener(`clic`, () => {
  popUp.classList.add(popup-active)
setTimeout(() => {
  popUp.classList.remove(popup-active)
}, 9000);
})