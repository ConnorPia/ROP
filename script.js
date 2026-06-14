mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubm9ycGlhIiwiYSI6ImNtcThncW56eDAybWYycm9keHB0cWQwOHgifQ.wyaMP4dsFjEfFL7s0i8YRw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/connorpia/cmq96pt92004e01sq55j3bu5v', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });
map.on('load', function () {

    map.addSource('campgrounds-data', {
        type: 'geojson',
        data: 'data/Campgrounds.geojson'
    });

    map.addSource('entrance-data', {
        type: 'geojson',
        data: 'data/ParkEntryPoints.geojson'
    });

});
