const preguntasFrecuentes = ["Quiero recibir mas info", "Quiero precios de maquillajes", "En qué zona están?", "Necesito que me contacten para darme un turno"];
const comentarios = document.getElementById("comentarios");

for (comentario of preguntasFrecuentes) {
    const li = document.createElement("li");
    li.innerHTML = comentario;
    console.log(li);
    comentarios.append(li);
}

const inputComent = document.querySelector ("#multi");
inputComent.value = "Dejanos aca tus comentarios!"; 