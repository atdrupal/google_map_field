<?php

  // add the google API
  drupal_add_js('http://maps.googleapis.com/maps/api/js?sensor=false', 'external');

  $lat = 51.5171;
  $lon = -0.15;
  $zoom = 9;

  $js = '
    var map;
    function setMarker(latLng) {
    	marker.setPosition(latLng);
      map.setCenter(latLng);
    }
    function buildToken() {
      var mrkrPos = marker.getPosition();
      zoom = map.getZoom();
      width = document.getElementById("width").value;
      height = document.getElementById("height").value;
      document.getElementById("token").value = "[gmf:lat="+mrkrPos.lat()+",lon="+mrkrPos.lng()+",width="+width+",height="+height+",zoom="+zoom+"]";
    }
    jQuery(document).ready(function(){
      var latlng = new google.maps.LatLng(' . $lat . ', ' . $lon . ');
      var mapOptions = {
        zoom: ' . $zoom . ',
        center: latlng,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById("google_map_picker"), mapOptions);
      marker = new google.maps.Marker({
        position: latlng,
        map: map,
      });
      // add a click listener to the map
      google.maps.event.addListener(map, "click", function(event) {
        setMarker(event.latLng)
        buildToken();
      });
      google.maps.event.addListener(map, "zoom_changed", function(event) {
      	buildToken();
      });
  	});
  ';
  drupal_add_js($js, 'inline');

  print '<p>Find the center point for the map you want to insert into you content and click to drop a marker there...</p>';
	print '<div id="google_map_picker" style="width: 500px; height: 400px;"></div>';
  print '<p>Now set the width and height for the inline map...</p>';
	print '<input type="text" id="width" name="width" value="300" onchange="return buildToken();"/>';
	print '<input type="text" id="height" name="height" value="250" onchange="return buildToken();"/><br/>';
	print '<p>Here is your token, copy and paste this into the content where you want this map to appear...</p>';
	print '<input style="width: 100%;" type="text" id="token" name="token" readonly="readonly" value="[gmf:lat=51.5171,lon=-0.15,width=300,height=250,zoom=9]"/>';

?>