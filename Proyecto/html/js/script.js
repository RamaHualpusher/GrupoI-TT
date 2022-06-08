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
    $nombre.innerText = nombreUsuario;
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


funcionMostrar();

//