


let myMap = L.map('myMap').setView([-32.8972, -68.853448],14)//Usar latitud y longitud del usuario

L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([-32.8972, -68.853448]).addTo(myMap)

let iconMarker = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 60]
})
let marker2 = L.marker([51.51, -0.09], { icon: iconMarker }).addTo(myMap);


myMap.doubleClickZoom.disable();

function removerMarcador(marker){
  marker.removeFrom(myMap);

}
removerMarcador(marker);
removerMarcador(marker2);

myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);
  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap);
});
myMap.on('contextmenu', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);
  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).removeFrom(myMap);
});



// setTimeout(confirm("Usar geolocalizacion")
// ?usarGeo():alert("No se permite usar la geolocalizacion"),2000)
// function usarGeo () { 
//     navigator.geolocation.getCurrentPosition(
//         //probablemente no sea necesario o agregar a un botón
//         (pos) => {
//           const { coords } = pos;
//           const { latitude, longitude } = coords;
//           L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap);
  
//           setTimeout(() => {
//             myMap.panTo(new L.LatLng(latitude, longitude));
//           }, 5000);
//         },
//         (error) => {
//           console.log(error);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 5000,
//           maximumAge: 0,
//         }
//       )
//     }


//     confirm("Usar geolocalizacion")
//   ? navigator.geolocation.getCurrentPosition(
//       //probablemente no sea necesario o agregar a un botón
//       (pos) => {
//         const { coords } = pos;
//         const { latitude, longitude } = coords;
//         L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap);

//         setTimeout(() => {
//           myMap.panTo(new L.LatLng(latitude, longitude));
//         }, 5000);
//       },
//       (error) => {
//         console.log(error);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//       }
//     )
//   : undefined;


