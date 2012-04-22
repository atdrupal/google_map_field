
function buildToken() {
  var $ = jQuery.noConflict();
  $("#edit-zoom").val(map.getZoom());
  $("#edit-token").val("lat=" + marker.getPosition().lat() + ",lon=" + marker.getPosition().lng() + ",width=" + $("#edit-width").val() + ",height=" + $("#edit-height").val() + ",zoom=" + map.getZoom());
  return false;
}
function setMarker(latLng) {
  marker.setPosition(latLng);
  map.setCenter(latLng);
}
var map;
function getMap() {
  var latlng = new google.maps.LatLng(51.0, 0.12);
  var mapOptions = {
    zoom: 9,
    center: latlng,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("google_map_field_selector"), mapOptions);
  marker = new google.maps.Marker({
    position: latlng,
    map: map,
  });
  google.maps.event.addListener(map, "click", function(event) {
    setMarker(event.latLng)
    buildToken();
  });
  google.maps.event.addListener(map, "zoom_changed", function(event) {
    buildToken();
  });
};
