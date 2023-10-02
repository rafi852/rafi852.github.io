var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Adm_Kecamatan_1 = new ol.format.GeoJSON();
var features_Adm_Kecamatan_1 = format_Adm_Kecamatan_1.readFeatures(json_Adm_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_Kecamatan_1.addFeatures(features_Adm_Kecamatan_1);
var lyr_Adm_Kecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adm_Kecamatan_1, 
                style: style_Adm_Kecamatan_1,
                interactive: true,
    title: 'Adm_Kecamatan<br />\
    <img src="styles/legend/Adm_Kecamatan_1_0.png" /> Alang-alang Lebar<br />\
    <img src="styles/legend/Adm_Kecamatan_1_1.png" /> Bukit Kecil<br />\
    <img src="styles/legend/Adm_Kecamatan_1_2.png" /> Gandus<br />\
    <img src="styles/legend/Adm_Kecamatan_1_3.png" /> Ilir Barat I<br />\
    <img src="styles/legend/Adm_Kecamatan_1_4.png" /> Ilir Barat II<br />\
    <img src="styles/legend/Adm_Kecamatan_1_5.png" /> Ilir Timur I<br />\
    <img src="styles/legend/Adm_Kecamatan_1_6.png" /> Ilir Timur II<br />\
    <img src="styles/legend/Adm_Kecamatan_1_7.png" /> Jakabaring<br />\
    <img src="styles/legend/Adm_Kecamatan_1_8.png" /> Kalidoni<br />\
    <img src="styles/legend/Adm_Kecamatan_1_9.png" /> Kemuning<br />\
    <img src="styles/legend/Adm_Kecamatan_1_10.png" /> Kertapati<br />\
    <img src="styles/legend/Adm_Kecamatan_1_11.png" /> Plaju<br />\
    <img src="styles/legend/Adm_Kecamatan_1_12.png" /> Sako<br />\
    <img src="styles/legend/Adm_Kecamatan_1_13.png" /> Seberang Ulu I<br />\
    <img src="styles/legend/Adm_Kecamatan_1_14.png" /> Seberang Ulu II<br />\
    <img src="styles/legend/Adm_Kecamatan_1_15.png" /> Sematang Borang<br />\
    <img src="styles/legend/Adm_Kecamatan_1_16.png" /> Sukarami<br />\
    <img src="styles/legend/Adm_Kecamatan_1_17.png" /> <br />'
        });
var format_SUNGAI_AR_50K_2 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_2 = format_SUNGAI_AR_50K_2.readFeatures(json_SUNGAI_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_2.addFeatures(features_SUNGAI_AR_50K_2);
var lyr_SUNGAI_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_50K_2, 
                style: style_SUNGAI_AR_50K_2,
                interactive: true,
    title: 'SUNGAI_AR_50K<br />\
    <img src="styles/legend/SUNGAI_AR_50K_2_0.png" /> Sungai<br />\
    <img src="styles/legend/SUNGAI_AR_50K_2_1.png" /> <br />'
        });
var format_Jalan_LN_3 = new ol.format.GeoJSON();
var features_Jalan_LN_3 = format_Jalan_LN_3.readFeatures(json_Jalan_LN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_LN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_LN_3.addFeatures(features_Jalan_LN_3);
var lyr_Jalan_LN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_LN_3, 
                style: style_Jalan_LN_3,
                interactive: true,
    title: 'Jalan_LN<br />\
    <img src="styles/legend/Jalan_LN_3_0.png" /> Arteri Primer<br />\
    <img src="styles/legend/Jalan_LN_3_1.png" /> Arteri Sekunder<br />\
    <img src="styles/legend/Jalan_LN_3_2.png" /> Kolektor Primer<br />\
    <img src="styles/legend/Jalan_LN_3_3.png" /> Kolektor Sekunder<br />\
    <img src="styles/legend/Jalan_LN_3_4.png" /> <br />'
        });
var format_PEMERINTAHAN_PT_50K_4 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_4 = format_PEMERINTAHAN_PT_50K_4.readFeatures(json_PEMERINTAHAN_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_4.addFeatures(features_PEMERINTAHAN_PT_50K_4);
var lyr_PEMERINTAHAN_PT_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_4, 
                style: style_PEMERINTAHAN_PT_50K_4,
                interactive: true,
    title: 'PEMERINTAHAN_PT_50K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_0.png" /> Bangunan/Kantor Pertahanan Keamanan Lainnya<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_1.png" /> Istana<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_2.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_3.png" /> Kantor DPRD<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_4.png" /> Kantor Gubernur<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_5.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_6.png" /> Kantor Lurah<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_7.png" /> Kantor Pemerintah Lainnya<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_8.png" /> Kantor Polisi<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_9.png" /> Kantor Wali Kota<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_10.png" /> Lembaga Pemasyarakatan<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_11.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Adm_Kecamatan_1.setVisible(true);lyr_SUNGAI_AR_50K_2.setVisible(true);lyr_Jalan_LN_3.setVisible(true);lyr_PEMERINTAHAN_PT_50K_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Adm_Kecamatan_1,lyr_SUNGAI_AR_50K_2,lyr_Jalan_LN_3,lyr_PEMERINTAHAN_PT_50K_4];
lyr_Adm_Kecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SUNGAI_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_LN_3.set('fieldAliases', {'ID': 'ID', 'NAMA_JALAN': 'NAMA_JALAN', 'FUNGSI': 'FUNGSI', 'STATUS_JAL': 'STATUS_JAL', 'KELURAHAN': 'KELURAHAN', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Adm_Kecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SUNGAI_AR_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_LN_3.set('fieldImages', {'ID': 'Range', 'NAMA_JALAN': 'TextEdit', 'FUNGSI': 'TextEdit', 'STATUS_JAL': 'TextEdit', 'KELURAHAN': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_Adm_Kecamatan_1.set('fieldLabels', {'OBJECTID': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'inline label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SUNGAI_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_LN_3.set('fieldLabels', {'ID': 'header label', 'NAMA_JALAN': 'no label', 'FUNGSI': 'no label', 'STATUS_JAL': 'no label', 'KELURAHAN': 'no label', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_50K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});