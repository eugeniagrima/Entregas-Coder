const preciosPestanias = [
    { nombre: "Extension", precio: 3200 },
    { nombre: "Lifting", precio: 3350 }
]
const totalPestanias = preciosPestanias.reduce((acc, el) => acc + el.precio, 0);
console.log(totalPestanias);
