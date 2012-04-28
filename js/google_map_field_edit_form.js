
/**
 * @file
 * This file contains the javascript functions used by the google map field
 * token builder WYSIWYG plugin.
 */

/**
 * Declare global variable by which to identify the map for the token builder.
 */
var google_map_field_mapTokenBuilder;

/**
 * This function is called by the WYSIWYG plugin code when the map builder
 * overlay is opened.
 */
function google_map_field_getMap() {
  // Set default coords for the map centre and marker.
  var latlng = new google.maps.LatLng(51.0, 0.12);
  var mapOptions = {
    zoom: 9,
    center: latlng,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // Create and attached the map.
  google_map_field_mapTokenBuilder = new google.maps.Map(document.getElementById("google_map_field_selector"), mapOptions);
  // Create the marker and drop it on the map.
  marker = new google.maps.Marker({
    position: latlng,
    map: google_map_field_mapTokenBuilder,
  });
  // Add a click listener to the map.
  google.maps.event.addListener(google_map_field_mapTokenBuilder, "click", function(event) {
    setMarker(event.latLng)
    buildToken();
  });
  // Add an event listener to the map to catch zoom in/zoom out.
  google.maps.event.addListener(google_map_field_mapTokenBuilder, "zoom_changed", function(event) {
    buildToken();
  });
};

/**
 * This function is called when the map zoom changes or the user clicks to
 * drop a marker. It takes the necessary values (lat/long/width/height and
 * zoom) and builds a token from them which is placed in the token field.
 */
function buildToken() {
  var $ = jQuery.noConflict();
  $("#edit-zoom").val(google_map_field_mapTokenBuilder.getZoom());
  $("#edit-token").val("lat=" + marker.getPosition().lat() + ",lon=" + marker.getPosition().lng() + ",width=" + $("#edit-width").val() + ",height=" + $("#edit-height").val() + ",zoom=" + google_map_field_mapTokenBuilder.getZoom());
  return false;
}

/**
 * This function takes the lat/long values passed in and centres the map
 * at that point and also drops a marker at that point.
 */
function setMarker(latLng) {
  marker.setPosition(latLng);
  google_map_field_mapTokenBuilder.setCenter(latLng);
}
