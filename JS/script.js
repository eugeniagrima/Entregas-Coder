const fecha = new Date ();
let nombreUsuario = document.getElementById ("nombreUsuario")
let apellidoUsuario = document.getElementById ("apellidoUsuario")
let edadUsuario = document.getElementById ("edadUsuario")
for (let i= 2; i <= 3; i++)
document.write ("Bienvenida! " + "hoy es " + Date () + " .Tenes " + i + " minutos de espera para acceder al chat!")

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

// ACA ABAJO QUIERO PONER UN MENSAJE CUANDO SE COMPLETA EL FORMU QUE DIGA GRACIAS O POR FAVOR "..." PERO NO SE PORQUE NO ME SALE, LO VEO EN EL CONSOLE.LOG
const respuestaOk = document.getElementById (`respuestaOk`);
const eventoFuturo = (res) => {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      if (res === true) {
        resolve (`Gracias por dejarnos tus datos!`);
      } else {
        reject (`Por favor completa tus datos!`);
      }
    }, 5000);
  })
}
eventoFuturo().then((res) => {
  respuestaOk.innerHtml = res; 
}
)