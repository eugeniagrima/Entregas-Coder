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

const { value: text } = Swal.fire({
    input: 'textarea',
    inputLabel: 'Contanos qué estás buscando!',
    inputPlaceholder: 'Escribí acá',
    inputAttributes: {
      'aria-label': 'Escribí acá'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire(text)
  }

  //ACA LO QUE QUIERO ES QUE CUANDO APRIETA + INFO LE APREZCA EL MJE DE QUE VAYA A CONTACTO. PERO SI LE SACO EL DISPLAY DE CSS "NONE", ME APARECE, Y SI SE LO SACO NO APARECE NUNCA EL MJE! 
const botonaso = document.querySelector (`#masInfo`);
const popUp = document.querySelector(`#popup-mensaje`);

botonaso.addEventListener(`clic`, () => {
  popUp.classList.add(popup-active)
setTimeout(() => {
  popUp.classList.remove(popup-active)
}, 9000);
})

