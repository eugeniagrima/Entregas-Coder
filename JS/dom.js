const preguntasFrecuentes = ["Quiero recibir mas info", "Quiero precios de maquillajes", "En qué zona están?", "Necesito que me contacten para darme un turno"];
const comentarios = document.getElementById("Multi");

for (let comentario of preguntasFrecuentes) {
    const lista = document.createElement("li");
    lista.innerText = comentario;
    console.log(lista);
    comentarios.append(lista);
}

const inputComent = document.querySelector ("#areatexto");
inputComent.value = "Dejanos aca tus comentarios!"; 
console.log (inputComent.value);