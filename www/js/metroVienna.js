
$(document).ready(function(){
  var karte = L.map('map').setView([48.21, 16.38 ], 11 );
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; OpenStreetMap'
  }).addTo( karte );
})
// Coordinate geografiche di Lecce, Italia
// Latitudine: 40°21′17″ N
// Longitudine: 18°10′20″ E
// Altitudine sul livello del mare: 53 m
