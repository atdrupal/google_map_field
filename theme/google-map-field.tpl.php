<?php

/**
 * @file
 * Default theme implementation for google map fields.
 *
 * Available variables:
 * - $name: the display name of the map
 * - $delta: a unique id for the map used by the associated javascript
 *   to identify the map container.
 */

?>
<div class="google-map-field">
  <div class="google-map-field-label">
    <?php print $name; ?>
  </div>
  <div id="google_map_field_<?php print $delta; ?>" class="google_map_field_display"></div>
</div>
