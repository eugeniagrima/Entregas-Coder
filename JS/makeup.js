const tiposMakeUp = ["Clases de automaquillaje", "Maquillaje social", "Maquillaje para novia", "Maquillaje artístico"];
const otrosMakeUp = ["Maquillaje teatral", "Maquillaje para fotos", "Otros maquillajes"];
for (const tiposMak of tiposMakeUp) {
    console.log (tiposMak);
}
for (const tiposMak of tiposMakeUp) {
    alert ("Tipos de Make-up:" + " " + tiposMak); 
}
tiposMakeUp.forEach (make => {
    console.log("Tipos de Make-up: " + make);
}
    )
