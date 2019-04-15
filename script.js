
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.886072, -71.250596],
    zoom: 16,
    zoomControl: true
});












var style1 = {
                    'color': "green",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

				
var style3 = {
                    'color': "yellow",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
					
					
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };						

			  
			  

			  
			  
			  
var N1 = L.geoJSON(N1, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);			  
			  
			  
			  
var N2 = L.geoJSON(N2, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);
  
 
 var N3 = L.geoJSON(N3, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);
  

  
  var N4 = L.geoJSON(N4, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);
  
 
  var N5 = L.geoJSON(N5, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);
  
 
  var N6 = L.geoJSON(N6, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);
  
  var N7 = L.geoJSON(N7, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);
 /*  
  var N7 = L.geoJSON(N7, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.nsn+'</p>');
  }
  }).addTo(map);

 
 */
 
 
 
  
 /* 
  var geojsonMarkerOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var puntgeo = L.geoJSON(puntgeo, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
  
 
  


  var Z5 = L.geoJSON(Z5, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p></p><p>'+feature.properties.NODO+'</p>');
  }
  }).addTo(map);
  
  
  
  
  var Z7 = L.geoJSON(Z7, {
	style: style11,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p>NILDA-JOEL-JAVIER-GLADYS-MANUEL</p><p>'+feature.properties.NODO+'</p>');
  }
  }).addTo(map);
  
 
  var Z8 = L.geoJSON(Z8, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p></p>'+'</h2><p>NILDA-JOEL-JAVIER-GLADYS-MANUEL</p><p>'+feature.properties.NODO+'</p>');
  }
  }).addTo(map);
  

  
  var SF = L.geoJSON(SF, {
	style: style5,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><b><p style="color:red;">ATENCION!!</p></b>'+'</h2><b><p style="color:red;">SIN FACTIBILIDAD!!!</p></b>');
  }
  }).addTo(map);
 
  var TC2_2201 = L.geoJSON(TC2_2201, {
	style: style5,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><b><p style="color:red;">ATENCION!!</p></b>'+'</h2><b><p style="color:red;">TC2-SOLO CABLE ANALOGO!!!</p></b>');
  }
  }).addTo(map);
  
  
  */
  
	  

			  
			  
			  


			  

			  
			  

  
                  
              			  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
