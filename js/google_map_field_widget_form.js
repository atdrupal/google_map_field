
var map;
function getCoords(latlng) {
  var fname = Drupal.settings.gmf_widget_form['fname'];
  marker.setPosition(latlng);
  map.setCenter(latlng);
  document.getElementById("edit-"+fname+"-und-0-lat").value = latlng.lat();
  document.getElementById("edit-"+fname+"-und-0-lon").value = latlng.lng();
}
jQuery(document).ready(function(){
  var fname = Drupal.settings.gmf_widget_form['fname'];
  var lat = Drupal.settings.gmf_widget_form['lat'];
  var lon = Drupal.settings.gmf_widget_form['lon'];
  var zoom = parseInt(Drupal.settings.gmf_widget_form['zoom']);
  var latlng = new google.maps.LatLng(lat, lon);
  var mapOptions = {
    zoom: zoom,
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
    getCoords(event.latLng);
  });
  google.maps.event.addListener(map, "zoom_changed", function(event) {
    document.getElementById("edit-"+fname+"-und-0-zoom").value = map.getZoom();
  });
});
