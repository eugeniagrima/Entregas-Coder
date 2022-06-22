const preguntasFrecuentes = ["Quiero recibir mas info", "Quiero precios de maquillajes", "En qué zona están?", "Necesito que me contacten para darme un turno"];
const comentarios = document.getElementById("Multi");

for (comentario of preguntasFrecuentes) {
    const li = document.createElement("li");
    li.innerHTML = comentario;
    console.log(li);
    comentarios.append(li);
}

const inputComent = document.querySelector ("#Multi");
inputComent.value = "Dejanos aca tus comentarios!"; 
console.log (inputComent.value);