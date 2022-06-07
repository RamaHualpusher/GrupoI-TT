
export let iconoMarcador = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 60]
});

export function agregarMarcador(LatLng){
    return L.marker(LatLng, icon = {  iconoMarcador });
}
