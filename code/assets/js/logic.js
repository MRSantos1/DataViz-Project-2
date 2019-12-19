// Create a map object
var myMap = L.map("map", {
  center: [37.65, -122.40],
  zoom: 11
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [37.5415, -122.3053],
  name: "Rotary Floritas",
  address: "99 27th Ave, San Mateo CA"
},
{
  location: [37.7006, -122.4640],
  name: "Vista Grande Apartments",
  address: "6730 Mission Street, Daly City CA"
},
{
  location: [37.5850, -122.3672],
  name: "Burlingame Apartments",
  address: "1226 El Camino Real, Burlingame CA"
},
{
  location: [37.6592, -122.4325],
  name: "Grand Oak Apartments",
  address: "65 Chesnut Avenue, South San Francisco CA"
},
{
  location: [37.5511, -122.3057],
  name: "Delaware Place",
  address: "200 South Delaware St, San Mateo CA"
},
{
  location: [37.5415, -122.3053],
  name: "Rotary Floritas",
  address: "99 27th Ave, San Mateo CA"
},
{
location: [37.7006, -122.4640],
name: "Vista Grande Apartments",
address: "6730 Mission Street, Daly City CA"
},
{
location: [37.5547, -122.2842],
name: "Edgewater Isle",
address: "1510 Marina Vista, San Mateo CA"
},
{
location: [37.6461, -122.4304],
name: "Rotary Plaza",
address: "433 Alida Way, South San Francisco CA"
},
{
location: [37.6766, -122.4733],
name: "St. Andrew Community",
address: "2070 Sullivan Avenue, Daly City CA"
},
{
  location: [37.6846, -122.4025],
  name: "Visitacion Garden Apts",
  address: "8 Visitacion Ave, Brisbane CA"
},
{
  location: [37.7070, -122.4643],
  name: "Santa Barbara Apartments",
  address: "111 Santa Barbara Avenue, Daly City CA"
},
{
  location: [37.6936, -122.4618],
  name: "Hillside Terrace",
  address: "1293 Hillside Blvd, Daly City CA"
},
{
  location: [37.6083, -122.3996],
  name: "Grand Oak Apartment",
  address: "1275 El Camino Real, Millbrae CA"
},
{
  location: [37.6625, -122.4314],
  name: "Willow Gardens",
  address: "344 Susie Way, South San Francisco CA"
},
{
  location: [37.5547, -122.2841],
  name: "Humboldt House",
  address: "232 S Humboldt St, San Mateo CA"
},
{
location: [37.6288, -122.4898],
name: "Pacific Pines Apartments",
address: "2590 Francisco Blvd, Pacifica CA"
},
{
location: [37.6589, -122.4745],
name: "Peninsula Del Ray",
address: "165 Pierce, Daly City CA"
},
{
location: [37.5732, -122.3184],
name: "North Idaho Place",
address: "12 North Idaho Street, San Mateo CA"
},
{
location: [37.5733, -122.3185],
name: "Rotary Haciendas",
address: "2700 Hacienda Street, San Mateo CA"
},
{location: [37.4401, -122.1803],
name: "Lesley Plaza",
address: "120 N San Mateo Dr, San Mateo CA"
},
{
location: [37.6642, -122.4469],
name: "Archstone - South San Francisco",
address: "101 Mc Lellan Drive, South SF CA"
},
{
location: [37.6659, -122.4766],
name: "Burlingame Apartments",
address: "1226 El Camino Real, Burlingame CA"
},
{
location: [37.6592, -122.4325],
name: "Serramonte Ridge",
address: "826 Campus Drive, Daly City CA"
},
{
location: [37.6530, -122.4114],
name: "Commercial Avenue Apts",
address: "317 Commercial Avenue, South San Francisco CA"
},
{
  location: [37.6530, -122.4114],
  name: "Commercial Avenue Apts",
  address: "321 Commercial Avenue, South San Francisco CA"
},
{
location: [37.5512, -122.3057],
name: "Delaware Pacific",
address: "1990 S Delaware Street, San Mateo CA"
},
{
location: [37.5768, -122.3340],
name: "Villa Terrace Housing",
address: "415 Villa Terrace, San Mateo CA"
},
{
location: [37.6841, -122.4642],
name: "La Terrazza",
address: "7800 El Camino Real, Colma CA"
},
{
location: [37.6865, -122.4663],
name: "Colma Ridge",
address: "85 Reiner Street, Colma CA"
},
{
location: [37.5694, -122.3200],
name: "HIP Housing",
address: "728 First Avenue, San Mateo CA"
},
{
location: [37.6536, -122.4349],
name: "Fairway Apts",
address: "77 Westborough Blvd, South San Francisco CA"
},
{
location: [37.5532, -122.3122],
name: "Palm Residences",
address: "1705 Palm Avenue, San Mateo CA"
},
{
location: [37.5692, -122.3326],
name: "Santa Inez Apartment",
address: "24 East Santa Inez Ave, San Mateo CA"
},
{
location: [37.7058, -122.4626],
name: "Hillcrest Housing",
address: "35 Hillcrest Drive, Daly City CA"
},
{
location: [37.5790, -122.3402],
name: "Bays Water",
address: "904 Bayswater Ave, Burlingame CA"
},
{
location: [37.5697, -122.3277],
name: "Darcy Building",
address: "205 S Ellsworth Street, San Mateo CA"
},
{
location: [37.6548, -122.4100],
name: "Metropolitan Hotel",
address: "220 Linden Avenue, Daly City CA"
},
{
location: [37.5993, -122.4987],
name: "Oceanview",
address: "555 Crespi Drive, Pacifica CA"
},
{
location: [37.5864, -122.3708],
name: "Bgame Apts",
address: "1321 El Camino Real, Burlingame CA"
},
{location: [37.6495, -122.4289],
name: "Mid Pen Housing",
address: "636 El Camino Real, San Mateo CA"
},
{
location: [37.6345, -122.4234],
name: "Village at the Crossing",
address: "1101 National Ave, San Bruno CA"
},
{
location: [37.5863, -122.3354],
name: "Burlingame Apartments",
address: "11 Burlingame Avenue, Burlingame CA"
},
{
location: [37.5662, -122.3238],
name: "St. Matthew Apartments",
address: "215 2nd Avenue, San Mateo CA"
},
{
location: [37.5662, -122.3238],
name: "Lesley Towers",
address: "215 2nd Avenue, San Mateo CA"
},
{
  location: [37.6637, -122.4493],
  name: "Greenridge",
  address: "1565 El Camino Real, South San Francisco CA"
},
{
location: [37.6669, -122.4466],
name: "Verano",
address: "1365 Mission Road, Colma CA"
},
{
location: [37.5452, -122.2907],
name: "Archstone - San Mateo",
address: "1101 Park Place, San Mateo CA"
},
{
location: [37.6420, -122.4889],
name: "Oceana Terrace",
address: "903 Oceana Blvd, Pacifica CA"
},
{
location: [37.5603, -122.3236],
name: "Chaimberlain",
address: "540 S El Camino Real, San Mateo CA"
},
{
location: [37.6342, -122.4216],
name: "Avalone San Bruno",
address: "1099 Admiral Court, San Bruno CA"
},
{
location: [37.6569, -122.4210],
name: "Magnolia Plaza",
address: "630 Baden Avenue, South San Francisco CA"
},
{
location: [37.5676, -122.3184],
name: "Metropolitan Condiminums",
address: "338 S Fremont, San Mateo CA"
},
{
location: [37.5682, -122.3176],
name: "Metropolitan Condiminums",
address: "337 S Fremont, San Mateo CA"
},
{
location: [37.5697, -122.3225],
name: "Delaware Building",
address: "11 South Delaware, San Mateo CA"
},
{
location: [37.6866, -122.4681],
name: "San Pedro Commons",
address: "101 A Street, Colma CA"
},
{
location: [37.5573, -122.2961],
name: "Hamlet St Group Home",
address: "1773 Hamlet Street, San Mateo"
},
{
location: [37.5321, -122.2923],
name: "Fountainglen At San Mateo",
address: "4000 S El Camino Real, San Mateo"
},
{
location: [37.6891, -122.4647],
name: "Villa Fonta",
address: "50 East Market Street, Daly City CA"
},
{
location: [37.5790, -122.3546],
name: "Floribunda Apts",
address: "1512 Floribunda Ave Burlingame CA"
},
{
  location: [37.5975, -122.3859],
  name: "Pindera",
  address: "120 S El Camino Real, Milbrae CA"
},
{
location: [37.8526, -122.4741],
name: "Pacific Oaks",
address: "750 Oddstad Boulevard, Pacifica CA"
},
{
location: [37.5809, -122.3571],
name: "Palm Ave Group Home",
address: "1400 Palm Avenue, Burlingame CA"
},
{
location: [37.5627, -122.2830],
name: "Bridgepointe Condominums",
address: "1987 Bridgepointe Pkwy, San Mateo CA"
},
{
location: [37.6926, -122.4628],
name: "Tehanan II",
address: "20 Third Avenue, Daly City CA"
},
{
location: [37.6926, -122.4628],
name: "Sundial",
address: "215 4th Lane, San Bruno CA"
},
{
location: [37.6548, -122.4088],
name: "Sanupar Plaza",
address: "206 Grand Ave, South San Francisco CA"
},
{
location: [37.6831, -122.4650],
name: "Trestle Glen",
address: "370 F Street, Colma CA"
},
{
location: [37.5652, -122.3225],
name: "Belmont Building",
address: "220 East Third Avenue, San Mateo CA"
},
{
location: [37.6929, -122.4655],
name: "School House Station",
address: "99 School Street, Daly City CA"
},
{
location: [37.5408, -122.3014],
name: "Peninsula Station",
address: "2901 S El Camino Real San Mateo, CA"
},
{
location: [37.6595, -122.4058],
name: "Grand Hotel",
address: "731 Airport Blvd, South San Francisco CA"
},
{
location: [37.5844, -122.4749],
name: "Casa Pacifica",
address: "1060 Terra Nova, Pacifica CA"
},
{
location: [37.5730, -122.3178],
name: "San Mateo Apartments",
address: "1110 Cypress San Mateo CA"
},
{
location: [37.6342, -122.4216],
name: "Avalone San Bruno II",
address: "1099 Admiral Court San Bruno CA"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h4>" + city.name + "</h4> <h4>Address: " + city.address + "</h4>")
    .addTo(myMap);
}
