mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubm9ycGlhIiwiYSI6ImNtcThncW56eDAybWYycm9keHB0cWQwOHgifQ.wyaMP4dsFjEfFL7s0i8YRw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/connorpia/cmqdouab9008a01sm2u8e1cmi',
    center: [-116.57, 32.94],
    zoom: 10
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(
    new mapboxgl.ScaleControl({
        unit: 'imperial'
    }),
    'bottom-right'
);

map.on('load', function () {

    map.addSource('campgrounds-data', {
        type: 'geojson',
        data: 'data/Campgrounds.geojson'
    });

    map.addSource('entrance-data', {
        type: 'geojson',
        data: 'data/ParkEntryPoints.geojson'
    });

    map.addSource('boundary-data', {
    type: 'geojson',
    data: 'data/ParkBoundaries.geojson'
});

map.addLayer({
    id: 'boundary-outline',
    type: 'line',
    source: 'boundary-data',
    paint: {
        'line-color': '#1B5E20',
        'line-width': 2
    }
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

    // Campgrounds popup
    map.on('click', 'campgrounds-layer', function (e) {

        const props = e.features[0].properties;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h3 style="margin-bottom:5px;">${props.Campground}</h3>
                <img src="${props.image}"
     style="width:100%; border-radius:8px; margin-top:5px; margin-bottom:5px;">
                <p><strong>${props.category}</strong></p>
                <p>${props.description}</p>
            `)
            .addTo(map);

    });

    // Entrance popup
    map.on('click', 'entrance-layer', function (e) {

        const props = e.features[0].properties;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h3 style="margin-bottom:5px;">${props.PARK_NAME}</h3>
                <img src="${props.image}"
     style="width:100%; border-radius:8px; margin-top:5px; margin-bottom:5px;">
                <p>${props.description}</p>
            `)
            .addTo(map);

    });
// Campgrounds hover
map.on('mouseenter', 'campgrounds-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'campgrounds-layer', () => {
    map.getCanvas().style.cursor = '';
});

// Entrance hover
map.on('mouseenter', 'entrance-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'entrance-layer', () => {
    map.getCanvas().style.cursor = '';
});
    
});
