const tiposMakeUp = ["Clases de automaquillaje", "Maquillaje social", "Maquillaje para novia", "Maquillaje artístico"];
const otrosMakeUp = ["Maquillaje teatral", "Maquillaje para fotos", "Otros maquillajes"];
for (const tiposMak of tiposMakeUp) {
    console.log (tiposMak);
}
for (const tiposMak of tiposMakeUp) {
    alert ("Tipos de Make-up: ${tiposMak}"); //SI LE PONGO "" QUEDA OK SIN ERRORES PERO NO SE IMPRIME NADA EN LA WEB
}
for (const tiposMak of tiposMakeUp) {
    alert ("Tipos de Make-up: ${tiposMak}"); //SI CIERRO LAS "" ACA ME SALTA ERROR PERO SE VE BIEN, DE TODOS MODOS EN LA WEB NO SE VE COMO QUIERO.
}
tiposMakeUp.forEach (tiposMak => {
    alert ("Tipos de Make-up: + $(tiposMak)");
}
    )
    for (const tiposMak of tiposMakeUp) {
        alert ('Tipos de Make-up: ${tiposMak}');
    }