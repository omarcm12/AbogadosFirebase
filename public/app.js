

function init(){
    
    display(32.459872, -116.927398);
}

function display(lat, long){

	var center = new google.maps.LatLng(lat,long);

	var opts={
		zoom:10,
		center:center,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var divM = document.getElementById("map");
	map = new google.maps.Map(divM,opts);

	var infowindow = new google.maps.InfoWindow();
     var marker, i;
      
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, long),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i].content);
            infowindow.open(map, marker);
          }

        })(marker, i)); 
        //displayTable(marcadores[i].title, marcadores[i].latitude, marcadores[i].longitude, marcadores[i].content);   
      
	
}

window.onload = init;