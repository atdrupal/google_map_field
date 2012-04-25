
function buildToken() {
  var $ = jQuery.noConflict();
  $("#edit-zoom").val(mapTokenBuilder.getZoom());
  $("#edit-token").val("lat=" + marker.getPosition().lat() + ",lon=" + marker.getPosition().lng() + ",width=" + $("#edit-width").val() + ",height=" + $("#edit-height").val() + ",zoom=" + mapTokenBuilder.getZoom());
  return false;
}
function setMarker(latLng) {
  marker.setPosition(latLng);
  mapTokenBuilder.setCenter(latLng);
}
var mapTokenBuilder;
function getMap() {
  var latlng = new google.maps.LatLng(51.0, 0.12);
  var mapOptions = {
    zoom: 9,
    center: latlng,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  mapTokenBuilder = new google.maps.Map(document.getElementById("google_map_field_selector"), mapOptions);
  marker = new google.maps.Marker({
    position: latlng,
    map: mapTokenBuilder,
  });
  google.maps.event.addListener(mapTokenBuilder, "click", function(event) {
    setMarker(event.latLng)
    buildToken();
  });
  google.maps.event.addListener(mapTokenBuilder, "zoom_changed", function(event) {
    buildToken();
  });
};
