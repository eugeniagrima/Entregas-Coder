const fecha = new Date ();
console.log (Date)
let nombreUsuario = document.getElementById ("nombreUsuario")
let apellidoUsuario = document.getElementById ("apellidoUsuario")
let edadUsuario = document.getElementById ("edadUsuario")
for (let i= 2; i <= 3; i++)
document.write ("Bienvenida! " + "hoy es " + Date () + "  tu nombre es " + nombreUsuario + " y tenes " + edadUsuario + " años!. Tenes " + i + " minutos de espera para acceder al chat!")

function QueEstasBuscando() {
    prompt ("Contanos qué estás buscando!");
}
QueEstasBuscando();
