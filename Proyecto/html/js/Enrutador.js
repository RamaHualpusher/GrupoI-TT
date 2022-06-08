import { myMap } from "./main.js";
export function crearRuta() {
  return L.Routing.control({
    waypoints: [L.latLng(-32.8972, -68.853448), L.latLng(-32.894, -68.839)],
  }).addTo(myMap);
}

//!Encapsular en try catch por si fallan las llamadas a los servidores
export function crearRutaMark(mark1,mark2) {
    return L.Routing.control({
      waypoints: 
        [mark1.getLatLng(),
         mark2.getLatLng()],
      showAlternatives:true
          
    }).addTo(myMap);
  }