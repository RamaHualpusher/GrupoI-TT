import { myMap2 } from "./main.js";
export function crearRuta() {
  return L.Routing.control({
    waypoints: [L.latLng(-32.8972, -68.853448), L.latLng(-32.894, -68.839)],
  }).addTo(myMap2);
}

//!Encapsular en try catch por si fallan las llamadas a los servidores

export function crearRutaMark(mark1, mark2) {
  return L.Routing.control({
    waypoints:
      [mark1,
        mark2],
    showAlternatives: true,
    lineOptions: {
      styles: [
        { color: "#00f", opacity: 0.8, weight: 8 },
        { color: "#f00", opacity: 0.8, weight: 8 },
        { color: "#0f0", opacity: 0.8, weight: 8 },
        { color: "#f0f", opacity: 0.8, weight: 8 },
        { color: "#0ff", opacity: 0.8, weight: 8 },
        { color: "#ff0", opacity: 0.8, weight: 8 },
        { color: "#fff", opacity: 0.8, weight: 8 },
        { color: "#000", opacity: 0.8, weight: 8 },


      ]
    }

  }).addTo(myMap2);
}