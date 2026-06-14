mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubm9ycGlhIiwiYSI6ImNtcThncW56eDAybWYycm9keHB0cWQwOHgifQ.wyaMP4dsFjEfFL7s0i8YRw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/connorpia/cmqdouab9008a01sm2u8e1cmi', // your Style URL goes here
  center: [-116.58, 32.95], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 11 // starting zoom
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
map.addLayer({
    id: 'campgrounds-layer',
    type: 'circle',
    source: 'campgrounds-data',
    paint: {
        'circle-color': '#2E8B57',
        'circle-radius': 8,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
    }
});

map.addLayer({
    id: 'entrance-layer',
    type: 'circle',
    source: 'entrance-data',
    paint: {
        'circle-color': '#D95F02',
        'circle-radius': 9,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
    }
});
  
});
