var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Pruebageolocalizacion_1 = new ol.format.GeoJSON();
var features_Pruebageolocalizacion_1 = format_Pruebageolocalizacion_1.readFeatures(json_Pruebageolocalizacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pruebageolocalizacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pruebageolocalizacion_1.addFeatures(features_Pruebageolocalizacion_1);
var lyr_Pruebageolocalizacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pruebageolocalizacion_1, 
                style: style_Pruebageolocalizacion_1,
                interactive: true,
                title: '<img src="styles/legend/Pruebageolocalizacion_1.png" /> Prueba geolocalizacion'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Pruebageolocalizacion_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Pruebageolocalizacion_1];
lyr_Pruebageolocalizacion_1.set('fieldAliases', {'DIRECCIONE': 'DIRECCIONE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Pruebageolocalizacion_1.set('fieldImages', {'DIRECCIONE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Pruebageolocalizacion_1.set('fieldLabels', {'DIRECCIONE': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_Pruebageolocalizacion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});