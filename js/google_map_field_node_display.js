
/**
 * @file
 * This file contains the javascript functions used to display a map when the
 * entity it is attached to is displayed.
 */

/**
 * Declare global variable by which to identify the map.
 */
var map;

/**
 * Add code to generate the map on page load.
 */
(function ($) {
  Drupal.behaviors.google_map_field = {
    attach: function (context) {
      // Get the settings for the map from the Drupal.settings object.
      var lat = Drupal.settings.gmf_node_display['lat'];
      var lon = Drupal.settings.gmf_node_display['lon'];
      var zoom = parseInt(Drupal.settings.gmf_node_display['zoom']);
      // Create the map coords and map options.
      var latlng = new google.maps.LatLng(lat, lon);
      var mapOptions = {
        zoom: zoom,
        center: latlng,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      // create the map.
      map = new google.maps.Map(document.getElementById("google_map_field_0"), mapOptions);
      // Drop a marker at the specified position.
      marker = new google.maps.Marker({
        position: latlng,
        map: map,
      });
    }
  };
})(jQuery);
