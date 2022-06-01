import {myMap} from './main.js'


let iconMarker = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 60]
});

export function agregarMarcador(coord){
    let marcador = L.marker(coord, { icon: iconMarker }).addTo(myMap);
    return marcador;
}
export function removerMarcador(mark){
    mark.removeFrom(myMap);
}