import {myMap} from './main.js'


let iconMarker = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 60],
    popupAnchor: [1, -34],
    
});

export function agregarMarcador(coord){
    let marcador = L.marker(coord, {options:{
        
        icon: iconMarker,
        title: 'Marcador',
        draggable: false,
        opacity: 0.8,
        riseOnHover: true,
        riseOffset: 250,
        zIndexOffset: 1000
    }  });
    return marcador;
}



