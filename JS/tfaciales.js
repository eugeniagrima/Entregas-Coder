function Tratamiento (nombre, numero) {
    this.nombre = nombre;
    this.numero = numero;
}
const tratamiento1 = new Tratamiento ("Higiene Base", 1);
const tratamiento2 = new Tratamiento ("Higiene Plus", 2);
const tratamiento3 = new Tratamiento ("Citrus Essence", 3);
const tratamiento4 = new Tratamiento ("Infusión Hialurónico", 4);

console.log (tratamiento1);
console.log (tratamiento2);
console.log (tratamiento3);
console.log (tratamiento4);

const tratamientos = ["Higiene Base", "Higiene Plus", "Citrus Essence", "Infusión Hialurónico"];
console.log (tratamientos.find (nombre => nombre === "Citrus Essence"));
console.log (tratamientos.filter (nombre => nombre === "Higiene Base"));