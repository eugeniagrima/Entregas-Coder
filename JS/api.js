const API_URL = "https://jsonplaceholder.typicode.com/";
const hxr = new HMLHTTPrequest(); 

function onRequestHandler () {
    if ( this.readyState === 4 && this.status === 200) {
    const data = JSON.parse (this.response);
    const HTMLResponse = document.querySelector (`#app`);
    const tpl = data.map ( (user) => `<li>${user.name} ${user.apellido}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`; 
    }
}

xhr.addEventListener (`load`, onRequestHandler);
xhr.open (`GET`, `${API_URL}/users`);
xhr.send();


// NICO, LO QUE INTENTE HACER FUE QUE CUANDO COMPLETEN LOS DATOS DE NOMBRE Y EDAD APAREZCA LA LISTA CON LOS DATOS
// Y EN SCRIPT A PARTIR DE LA LINEA 23 TMB INTENTE HACER COSAS!!