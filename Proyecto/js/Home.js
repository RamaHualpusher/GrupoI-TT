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
var esconder = document.getElementById("hide");
var formulario = document.getElementById("formulario");
var pedido = document.getElementById("pedido");
var table = document.getElementById("table");
let temporizador;
setTimeout(() => {

  esconder.style.display = "none";
  formulario.style.display = " block";
  temporizador = setInterval(intervalTable, 1000);
  temporizador = setInterval(intervalPedido, 3000);

}, 3000);
// Pedidos en un intervalo de tiempo,agrega la clase de movimiento de entrada
function intervalPedido() {
  pedido.classList.add('animate__backInRight');
  pedido.style.display = "block";

}

function intervalTable() {
  table.classList.add('animate__backInRight');
  table.style.display = "block";

}

//eliminar div de pedido al presionar el boton, remueve la clase de movimiento de salida
window.nonePedido =
  function nonePedido() {
    clearInterval(temporizador);
    pedido.style.display = "none";
    pedido.classList.remove('animate__backOutRight');
  }


//!Probar, ésto me tiró gitCopilot
const cerrarSesion = document.getElementById("cerrarSesionBtn");
window.cerrarSesion =
  async function cerrarSesion() {

    let opcion = confirm("¿Está seguro que desea cerrar sesión?");
    if (opcion == true) {
      document.cookie = "cookIdUsuario=valor;expires=1 Mar 1990 00:00:00 GMT";
      window.location.href = "login.html";
    } else {

    }


  }

//Cuando el boton se presione ,remueve movimiento de entrada,add el movimiento de salida,llama metodos recirsion
const boton = document.getElementById("boton");
window.rechazarPedido =
  async function rechazarPedido() {
    pedido.classList.remove('animate__backInRight');
    pedido.classList.add('animate__backOutRight');
    setTimeout(nonePedido, 2000)
    setInterval(intervalPedido, 3000);
    await cambiarEstadoPedido(2);
    await funcionPedidoEntrante();

  }



window.aceptarPedido =
  function aceptarPedido() {
    pedido.classList.add('animate__backOutRight');
    setTimeout(nonePedido, 2000)
    cambiarEstadoPedido(3);

  }



//----------------------- Conexión Backend ----------------//

let idPedido;

import { host, puerto } from "./config.js";
let url;
let idUsuario = leerCookie('cookIdUsuario'); //traigo idUsuario desde las cookie

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
    $nombrePerf.innerText = 'Nombre: ' + nombreUsuario;
    let $tipoPerf = document.querySelector("#tipoPerf");
    $tipoPerf.innerText = 'Tipo: ' + json.role;
    let $user = document.querySelector("#user");
    $user.innerText = 'Usuario: ' + json.user;
  } else {
    alert("Error-HTTP: " + respuesta.status);
  }

};

function leerCookie(nombre) {
  try {
    let micookie;
    var lista = document.cookie.split(";");
    for (let i in lista) {
      var busca = lista[i].search(nombre);
      if (busca > -1) { micookie = lista[i] }
    }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual + 1);
    return valor;

  } catch (error) {
    console.log('Error, no ha iniciado sesion');
    window.location = "login.html";
  }
}



/*
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
*/

// consulta pedidos entrantes
let urlPedidoEntrante = `http://${host}:${puerto}/api/orderIn/`; //url de la API correspondiente al backend

window.funcionPedidoEntrante = async function funcionPedidoEntrante() {

  let respuesta = await fetch(urlPedidoEntrante);
  let json;
  if (respuesta.ok) {
    // obtener cuerpo de la respuesta (método debajo)

    console.log(json);
    try {
      json = await respuesta.json();



      let $cliente = document.querySelector("#cliente");
      let $pedidoE = document.querySelector("#pedidoE");
      let $precio = document.querySelector("#precio");
      let $ubicacion = document.querySelector("#ubicacion");
      let $fecha = document.querySelector("#fecha");
      let $precioEnvio = document.querySelector("#precioEnvio");
      let $local = document.querySelector("#local");
      let $nPedido = document.querySelector("#nPedido");




      $cliente.innerText = 'Cliente: ' + json[0].nameClient;
      $pedidoE.innerText = 'Pedido: ' + json[0].description;
      $precio.innerText = 'Precio: ' + json[0].amount;
      $ubicacion.innerText = 'Ubicacion: ' + json[0].addresss;
      $fecha.innerText = 'fecha: ' + json[0].dayHour;
      $precioEnvio.innerText = 'Precio de envio: ' + json[0].amountShip;
      $local.innerText = 'Local: ' + json[0].nameStore;
      $nPedido.innerText = json[0].id;
      console.log(json[0].nameClient);

      idPedido = json[0].id;


    } catch (error) {
      console.log('Aca estoyt')
      nonePedido();
      //clearInterval(temporizador);
    }

  } else {
    alert("Error-HTTP: " + respuesta.status);

  }

};

async function main() {

  await funcionMostrar();
  await funcionPedidoEntrante();
  await mostrarFinalizados();

}

main();

//





function guardarCookie(nombre, valor, fecha) {
  document.cookie = nombre + "=" + valor + ";expires=" + fecha;
}




window.cambiarEstadoPedido =
  async function cambiarEstadoPedido(estado) {

    // guardarCookie('cookIdPedido',nPedido,"31 Dec 2023 23:59:59 GMT") //guardamos en cookie el id del usuario 

    //let idPedido = document.getElementById('nPedido').value; //obtengo variable del html
    //let idPedido =leerCookie('cookIdPedido'); //traigo IdPedido desde las cookie
    console.log('id pedido ' + idPedido);


    url = `http://${host}:${puerto}/api/shipments`; //url de la API correspondiente al backend



    let updatePedido = {
      status: estado,
      idPedido: idPedido
    };

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(updatePedido)
    });

    let result = await response.json();
    //alert(result.message);

    //          alert("Estad Agregado correctamente");

    console.log(updatePedido);
    if (estado == 3) {
      window.open("./Map.html", "_self"); //abro nuevo html
      console.log('entre al if');
    }


    guardarCookie('cookIdPedido', idPedido, "31 Dec 2023 23:59:59 GMT") //guardamos en cookie el id del usuario 

  };


let mostrarFinalizados = async () => {

  const tbody = document.querySelector('#tbl-pedidos tbody');
  let urlPedidoEntrante = `http://${host}:${puerto}/api/orderIn/end`

  console.log(urlPedidoEntrante);

  let respuesta = await funcionMostrar(urlPedidoEntrante);
  tbody.innerHTML = '';
  for (let i = 0; i < respuesta.length; i++) {

    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = respuesta[i]['id'];
    fila.insertCell().innerHTML = respuesta[i]['nameClient'];
    fila.insertCell().innerHTML = respuesta[i]['nameStore'];
    fila.insertCell().innerHTML = respuesta[i]['dayHour'];
    fila.insertCell().innerHTML = respuesta[i]['amountShip'];
    fila.insertCell().innerHTML = '<td><input type="button" class="borrar" value="Mostrar" /></td>'; //indicamos el botón para mostrar el recorrido
  }

  console.log(respuesta);
};

//Encontrar el id de la fila seleccionada por el boton
$(function () {
  $(document).on('click', '.borrar', function (event) {
    let idSeleccionado = $(this).parents("tr").find("td").eq(0).text();
    console.log('Aprete en ver ' + idSeleccionado);

    mostrarRecorrido(idSeleccionado);
  });
});



window.funcionMostrar = async function funcionMostrar(url) {
  let respuesta = await fetch(url);
  let json;
  if (respuesta.ok) {
    json = await respuesta.json();
  }
  else {
    alert("Error-HTTP: " + respuesta.status);
  }
  return json;

};



//Mostramos recorrido del delivery
window.mostrarRecorrido =
  async function mostrarRecorrido(idSeleccionado) {

    console.log('id pedido ' + idSeleccionado);


    url = `http://${host}:${puerto}/api/shipments`; //url de la API correspondiente al backend




    window.open("/js/consulta/Map.html", "_self"); //abro nuevo html



    console.log('Guade cookie del id del pedido');
    guardarCookie('cookIdPedido', idSeleccionado, "31 Dec 2023 23:59:59 GMT") //guardamos en cookie el id del usuario 

  };
