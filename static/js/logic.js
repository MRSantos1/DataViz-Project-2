// Create the createMap function
function createMap(enrollmentMap) {
// Create the tile layer that will be the background of our map
  var lightMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightMap
  };
  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "ssfusd": ssfusd
  };
  // Create the map object with options
  var map = L.map("map-id", {
    center: [37.65, -122.40],
    zoom: 12,
    layers: [lightMap, ssfusd]
  });
  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}
