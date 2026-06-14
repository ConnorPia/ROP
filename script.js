mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubm9ycGlhIiwiYSI6ImNtcThncW56eDAybWYycm9keHB0cWQwOHgifQ.wyaMP4dsFjEfFL7s0i8YRw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/connorpia/cmqdouab9008a01sm2u8e1cmi', // your Style URL goes here
  center: [-116.57, 32.94], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 12 // starting zoom
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
 map.on('click', 'campgrounds-layer', function (e) {

    const campground =
    e.features[0].properties.Campground;

    const category =
    e.features[0].properties.category;

    const description =
    e.features[0].properties.description;

    const image =
    e.features[0].properties.image;

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
            '<h3>' + campground + '</h3>' +
            '<img src="' + image + '" style="width:220px;"><br>' +
            '<p><strong>' + category + '</strong></p>' +
            '<p>' + description + '</p>'
        )
        .addTo(map);

}); 
 map.on('click', 'entrance-layer', function (e) {

    const park =
    e.features[0].properties.PARK_NAME;

    const description =
    e.features[0].properties.description;

    const image =
    e.features[0].properties.image;

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
            '<h3>' + park + '</h3>' +
            '<img src="' + image + '" style="width:220px;"><br>' +
            '<p>' + description + '</p>'
        )
        .addTo(map);


});
  
});
