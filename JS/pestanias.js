const preciosPestanias = [
    { nombre: "Extension", precio1: 3200 },
    { nombre: "Lifting", precio2: 3350 }
]
const totalPestanias = preciosPestanias.reduce((acc, el) => acc + el.precio, 0);

Swal.fire('El precio de la extensión es $3200 y el del lifting $3350');

