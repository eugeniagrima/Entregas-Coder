const fecha = new Date ();
console.log (Date)
let nombreUsuario = document.getElementById ("nombreUsuario")
let apellidoUsuario = document.getElementById ("apellidoUsuario")
let edadUsuario = document.getElementById ("edadUsuario")
for (let i= 2; i <= 3; i++)
document.write ("Bienvenida! " + "hoy es " + Date () + "  tu nombre es " + nombreUsuario + " y tenes " + edadUsuario + " años!. Tenes " + i + " minutos de espera para acceder al chat!")

//function QueEstasBuscando() {
    //prompt ("Contanos qué estás buscando!");
//}
//QueEstasBuscando();

const { value: text } = await Swal.fire({
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