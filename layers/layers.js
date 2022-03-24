var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_StamenTonerLite_2 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var format_myanmar_3 = new ol.format.GeoJSON();
var features_myanmar_3 = format_myanmar_3.readFeatures(json_myanmar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_myanmar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_myanmar_3.addFeatures(features_myanmar_3);
var lyr_myanmar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_myanmar_3, 
                style: style_myanmar_3,
                interactive: true,
                title: '<img src="styles/legend/myanmar_3.png" /> myanmar'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_StamenTonerLite_2.setVisible(true);lyr_myanmar_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_StamenTonerLite_2,lyr_myanmar_3];
lyr_myanmar_3.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_myanmar_3.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_myanmar_3.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_myanmar_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});