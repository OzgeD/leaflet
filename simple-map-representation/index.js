//latitude: 37.8921, longtitude: 32.4975, zoom:15
var map = L.map('map').setView([37.8921, 32.4975], 15);

var baseMap = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution:"Creating Map",
    maxZoom:20,
    subdomains:['mt0','mt1','mt2','mt3']
});

baseMap.addTo(map);

var point1 = L.marker([38,32]).addTo(map);

var coordList1=[[38,32],[38,33],[39,27]]
var line1 = L.polyline(coordList1).addTo(map);

coordList1.push([39,34]);
var polygon1 = L.polygon(coordList1).addTo(map);
var bbox = polygon1.getBounds();
//map.fitBounds(bbox);

var coord = [[1,1], [9,9]];
var rectangle = L.rectangle(coord).addTo(map);
var bbox1 = rectangle.getBounds();
//map.fitBounds(bbox1);

var center = [37.8921, 32.4975];
var circle = L.circle(center, {radius:20}).addTo(map);
var bbox2 =circle.getBounds();
//map.fitBounds(bbox2);

var center2 = [37.8931, 32.4985];
var point2 = L.circleMarker(center2,{radius:5}).addTo(map);
var bbox3 = point2.getBounds();
map.fitBounds(bbox3);