
var map;
jQuery(document).ready(function(){
  var lat = Drupal.settings.gmf_node_display['lat'];
  var lon = Drupal.settings.gmf_node_display['lon'];
  var zoom = parseInt(Drupal.settings.gmf_node_display['zoom']);
  var latlng = new google.maps.LatLng(lat, lon);
  console.log(lat);
  console.log(lon);
  console.log(zoom);
  var mapOptions = {
    zoom: zoom,
    center: latlng,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("google_map_field_0"), mapOptions);
  // add a marker to the map for the dealer
  marker = new google.maps.Marker({
    position: latlng,
    map: map,
  });
});
