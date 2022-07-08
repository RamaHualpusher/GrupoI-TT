import { agregarMarcador } from "./Marcador.js";
import { crearRutaMark } from "./Enrutador.js";
import { } from "./leaflet-routing-machine.js";
import { host, puerto } from "./config.js";

export let myMap = L.map('myMap').setView([-32.8972, -68.853448], 14);//Usar latitud y longitud del usuario

const infoPedido = document.getElementById("info-mapa");
const btnSalir = document.getElementById("center-mapa");

let latComercio,
	lonComercio,
	latCliente,
	lonCliente,
	nameClient,
	description,
	amount,
	amountShip,
	dayHour,
	status,
	nameStore,
	addressClient,
	addressStore;

window.mostrarMapa =
	async function mostrarMapa() {

		await L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
			maxZoom: 18,
		}).addTo(myMap);



		let infoEnvio = document.getElementById("info-mapa");


		// let usuario1 = ["Benito Escamoso", [-32.8972, -68.853448]];
		// let comercio1 = [ "Calle San Martin 718","McDonald",[latComercio, lonComercio]];
		// let cliente1 = ["Calle Godoy Cruz 6520","Roberto Benitez",[latCliente, lonCliente]];
		// let pedido = [1530, 350]

		//!CREAR RUTAS CON MARCADORES DE ENVIO Y COMERCIO
		// let latLngUsuario = L.latLng(usuario1[1]);
		// let latLngComercio = L.latLng(comercio1[2]);
		// let latLngCliente = L.latLng(cliente1[2]);

		let latLngUsuario = L.latLng([-32.8972, -68.853448]);
		let latLngComercio = L.latLng([latComercio, lonComercio]);
		let latLngCliente = L.latLng([latCliente, lonCliente]);

		console.log(latLngUsuario);

		let ruta1 = crearRutaMark(latLngUsuario, latLngComercio);
		let ruta2 = crearRutaMark(latLngComercio, latLngCliente);


		setTimeout(() => {
			ruta1.spliceWaypoints(0, 2);
			ruta1.hide();
			myMap.removeLayer(ruta1);

		}, 10000);
		setTimeout(() => {
			ruta2.spliceWaypoints(0, 2);
			ruta2.hide();
			myMap.removeLayer(ruta2);

			cambiarEstadoPedido(1) //Marcamos el pedido como finalizado


		}, 15000);

		setTimeout(() => {

			infoPedido.classList.add("hiden");

			btnSalir.classList.add("center-mapa-btn");

			btnSalir.classList.remove("hiden");

		}, 17000);



		// console.log(ruta1.getRouter());
		infoEnvio.innerHTML = `<h1 class="info-mapa-cont-titulo">Detalles del envio <spam>${status} : ${dayHour}</spam></h1>
<p id="dom-comercio" class="info-mapa-cont-dom-comercio">	Comercio:		${nameStore}		Direccion: 	${addressStore}</p>
<p id="dom-cliente" class="info-mapa-cont-dom-cliente">		Cliente: 		${nameClient}		Direccion:	${addressClient}</p>
<p id="total-dinero" class="info-mapa-cont-total-dinero">	Pedido:			${description}		Envio:		$${amount}			Propina: $${amountShip}<br>	
															Total:	$${amount + amountShip}</p>`;


	}


let idPedido = leerCookie('cookIdPedido'); //traigo idUsuario desde las cookie
console.log('Este es el id del pedido: ' + idPedido)

let urlPedidoEntrante = `https://${host}/api/orderIn/map/${idPedido}`; //url de la API correspondiente al backend
window.funcionPedidoEntrante = async function funcionPedidoEntrante() {

	console.log('URL ENVIADA AL BACK ' + urlPedidoEntrante)
	let respuesta = await fetch(urlPedidoEntrante);
	let json;
	if (respuesta.ok) {
		json = await respuesta.json();
		//! Aqui podes asignarle el valor del json a una variable mediante  x = json.nombre; 

		latComercio = json[0].latStore;
		lonComercio = json[0].lonStore;
		latCliente = json[0].latUser;
		lonCliente = json[0].lonUser;
		nameClient = json[0].nameClient;
		description = json[0].description;
		amount = json[0].amount;
		amountShip = json[0].amountShip;
		dayHour = json[0].dayHour;
		status = json[0].status;
		nameStore = json[0].nameStore;
		addressClient = json[0].addressClient;
		addressStore = json[0].addressStore;





		console.log(latComercio)

	} else {
		alert("Error-HTTP: " + respuesta.status);

	};
};
//Marcamos el envío como finalizado

window.cambiarEstadoPedido =
	async function cambiarEstadoPedido(estado) {


		let url = `https://${host}/api/shipments`; //url de la API correspondiente al backend
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

		alert('Ha finalizado el envío correctamente!');

		window.open("./home.html", "_self"); //abro nuevo html

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






async function main() {
	await funcionPedidoEntrante();
	await mostrarMapa();

}



main();