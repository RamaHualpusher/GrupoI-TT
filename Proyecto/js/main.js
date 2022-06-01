import { agregarMarcador } from "./Marcador.js";
import {crearRuta, crearRutaMark} from "./Enrutador.js";

export let myMap = L.map('myMap').setView([-32.8972, -68.853448],14)//Usar latitud y longitud del usuario

L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	maxZoom: 18,
}).addTo(myMap);

let marcadorCentral = agregarMarcador([-32.8972, -68.853448]);
let marcadorDestino = agregarMarcador([-32.894, -68.839]);
let marcadorDestino2 = agregarMarcador([-32.859, -68.821]);
//let ruta = crearRuta();
let ruta2 = crearRutaMark(marcadorCentral,marcadorDestino);
let ruta3 = crearRutaMark(marcadorDestino, marcadorDestino2);