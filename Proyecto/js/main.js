import { agregarMarcador } from "./Marcador.js";
import {crearRutaMark} from "./Enrutador.js";
import {} from "./leaflet-routing-machine.js";

export let myMap = L.map('myMap').setView([-32.8972, -68.853448],14);//Usar latitud y longitud del usuario


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
let latLngUsuario = L.latLng(usuario1[1]);
let latLngComercio = L.latLng(comercio1[2]);
let latLngCliente = L.latLng(cliente1[2]);


// let mark1 = agregarMarcador(latLngUsuario);
// let mark2 = agregarMarcador(latLngComercio);
// let mark3 = agregarMarcador(latLngCliente);

// let capas = L.layerGroup();
// capas.addLayer(mark1);
// capas.addLayer(mark2);
// capas.addLayer(mark3);

// console.log(capas);
// myMap.removeLayer(capas);
let ruta1 = crearRutaMark(latLngUsuario,latLngComercio);
let ruta2 = crearRutaMark(latLngComercio,latLngCliente);

// myMap.removeLayer(mark1);
// myMap.removeLayer(mark2);
// myMap.removeLayer(mark3);
// setTimeout(() => {
// 	myMap.removeLayer(ruta1);
// 	myMap.removeLayer(ruta2);
// }, 5000);

//Agregar un temporizador de 1 minuto para que se elimine la ruta
setTimeout(() => {
	ruta1.spliceWaypoints(0, 2);
	ruta1.hide();
	// myMap.removeLayer(mark1);
	myMap.removeLayer(ruta1);

}, 2000);
setTimeout(() => {
	ruta2.spliceWaypoints(0,2);
	ruta2.hide();
	myMap.removeLayer(ruta2);
	
	// myMap.removeLayer(mark2);
	// myMap.removeLayer(mark3);


}, 4000);


// console.log(ruta1.getRouter());
infoEnvio.innerHTML =`<h1 class="info-mapa-cont-titulo">Detalles del envio</h1>
<p id="dom-comercio" class="info-mapa-cont-dom-comercio">	Comercio:		${comercio1[1]}		Direccion: 	${comercio1[0]}</p>
<p id="dom-cliente" class="info-mapa-cont-dom-cliente">		Cliente: 		${cliente1[1]}		Direccion:	${cliente1[0]}</p>
<p id="total-dinero" class="info-mapa-cont-total-dinero">	Pedido:			$${pedido[0]}		Envio:		$${pedido[1]}		Total:	$${pedido[0]+pedido[1]}</p>`; 
