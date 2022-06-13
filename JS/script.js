alert ("Bienvenida!")
let nombreUsuario = prompt ("Ingresá tu nombre completo")
let edadUsuario = prompt ("Ingresá tu edad")
alert ("Tu nombre es" + " " + nombreUsuario + " " + "y tenés" + " " + edadUsuario + " " + "años");
if (nombreUsuario == "") {
    alert ("No ingresaste tu nombre!")
}
else {
    alert ("Tu nombre es" + " " + nombreUsuario);
}
for (let i= 2; i <= 8; i++) {
    let ingreseSuNombre = prompt ("Ingresá tu nombre"); 
    alert( ingreseSuNombre + " " + "tenés" + " " + i + " " + "minutos de espera para acceder al chat");
}
function QueEstasBuscando() {
    alert ("Contanos qué estás buscando!");
}
QueEstasBuscando();
