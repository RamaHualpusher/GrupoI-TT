import { agregarMarcador } from "./Marcador.js";
import {crearRuta, crearRutaMark} from "./Enrutador.js";

export let myMap = L.map('myMap').setView([-32.8972, -68.853448],14)//Usar latitud y longitud del usuario

L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	maxZoom: 18,
}).addTo(myMap);

// let marcadorCentral = agregarMarcador([-32.8972, -68.853448]);
// let marcadorDestino = agregarMarcador([-32.894, -68.839]);
// let marcadorDestino2 = agregarMarcador([-32.859, -68.821]);
// //let ruta = crearRuta();
// let ruta2 = crearRutaMark(marcadorCentral,marcadorDestino);
// let ruta3 = crearRutaMark(marcadorDestino, marcadorDestino2);



let infoEnvio = document.getElementById("info-mapa");
// let infoComercioDomicilio = document.getElementById("dom-comercio");
// let infoClienteDomicilio = document.getElementById("dom-cliente");
// let infoTotal = document.getElementById("total-dinero");

let usuario1 = ["Benito Escamoso", [-32.8972, -68.853448]];
let comercio1 = [ "Calle San Martin 718","McDonald",[-32.894, -68.839]];
let cliente1 = ["Calle Godoy Cruz 6520","Roberto Benitez",[-32.859, -68.821]];
let pedido = [1530, 350]


//!CREAR RUTAS CON MARCADORES DE ENVIO Y COMERCIO


let ruta1 = crearRutaMark(agregarMarcador(usuario1[1]),agregarMarcador(comercio1[2]));
let ruta2 = crearRutaMark(agregarMarcador(comercio1[2]),agregarMarcador(cliente1[2]));



// console.log(ruta1.getRouter());
infoEnvio.innerHTML =`<h1 class="info-mapa-cont-titulo">Detalles del envio</h1>
<p id="dom-comercio" class="info-mapa-cont-dom-comercio">	Comercio:		${comercio1[1]}		Direccion: 	${comercio1[0]}</p>
<p id="dom-cliente" class="info-mapa-cont-dom-cliente">		Cliente: 		${cliente1[1]}		Direccion:	${cliente1[0]}</p>
<p id="total-dinero" class="info-mapa-cont-total-dinero">	Pedido:			$${pedido[0]}		Envio:		$${pedido[1]}		Total:	$${pedido[0]+pedido[1]}</p>`; 
