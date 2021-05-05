//latitude: 37.8921, longtitude: 32.4975, zoom:15
var map = L.map('map').setView([37.8921, 32.4975], 15);

var baseMap = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution:"Creating Map",
    maxZoom:20,
    subdomains:['mt0','mt1','mt2','mt3']
});

baseMap.addTo(map);

