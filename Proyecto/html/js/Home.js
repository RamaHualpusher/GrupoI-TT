const btns = document.querySelectorAll('.dp');
const dropMenus = document.querySelectorAll('.drop-menu');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActive();
        btn.classList.add('active');
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})

const removeActive = () => {
   //  si no esta en uso el boton desactiva la iluminacion del marco
    btns.forEach(btn => btn.classList.remove('active'));
   //Desactiva la barrra del perfil al hacer un click afuera
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}

window.onclick = (e) => {

   // si el puntero del usuario no cordina on el boton perfil hace lo siguiente
    if (!e.target.matches('.dp')) {
        removeActive()
    }
}
// Ocultar Imagen en un lapso de tiempo
var esconder
setTimeout(() => {
    esconder = document.getElementById("hide");
    esconder.style.display= "none";
  }, 3000);



//----------------------- Conexión Backend ----------------//


  import { host, puerto } from "./config.js";
let url;
let idUsuario =leerCookie('cookIdUsuario'); //traigo idUsuario desde las cookie

//Muestro datos en html consultados la base datos mediante el backend
url = `http://${host}:${puerto}/api/users/${idUsuario}`; //url de la API correspondiente al backend
console.log(url)
window.funcionMostrar = async function funcionMostrar() {

  let respuesta = await fetch(url);
  let json;
  if (respuesta.ok) {
    // obtener cuerpo de la respuesta (método debajo)
    json = await respuesta.json();
    let nombreUsuario = json.name;
    let $nombre = document.querySelector("#nombre");
    let $nombreIco = document.querySelector("#nombreIco");
    let $nombrePerf = document.querySelector("#nombrePerf");
    $nombre.innerText = nombreUsuario;
    $nombreIco.innerText = nombreUsuario;
    $nombrePerf.innerText = 'Nombre: '+nombreUsuario;
    let $tipoPerf = document.querySelector("#tipoPerf");
    $tipoPerf.innerText = 'Tipo: '+json.role;
    let $user = document.querySelector("#user");
    $user.innerText = 'Usuario: '+json.user;
  } else {
    alert("Error-HTTP: " + respuesta.status);
  }

};

function leerCookie(nombre) {
  let micookie;
  var lista = document.cookie.split(";");
  for (let i in lista) {
    var busca = lista[i].search(nombre);
    if (busca > -1) { micookie = lista[i] }
  }
  var igual = micookie.indexOf("=");
  var valor = micookie.substring(igual + 1);
  return valor;
}




//Muestro datos en html consultados la base datos mediante el backend
let urlEnvio = `http://${host}:${puerto}/api/shipments/`; //url de la API correspondiente al backend

window.funcionEnvioPen = async function funcionEnvioPen() {

  let respuesta = await fetch(urlEnvio);
  let json;
  if (respuesta.ok) {
    // obtener cuerpo de la respuesta (método debajo)
    json = await respuesta.json();    
  
    let $envio = document.querySelector("#envio");
    let $monto = document.querySelector("#monto");
    let $hora = document.querySelector("#hora");
    let $ntrans = document.querySelector("#ntrans");
    $envio.innerText = 'Envio: '+json[0].nameStore;
    $monto.innerText = 'Monto: $'+json[0].amount;
    $hora.innerText = 'Hora: '+json[0].dayHour;
    $ntrans.innerText = 'N° transacción: '+json[0].id;

  } else {
    alert("Error-HTTP: " + respuesta.status);
  }

};




funcionMostrar();
funcionEnvioPen();

//