<?php

/**
 * @file
 * Template file to format the output of google map fields
 */

?>
<div class="google-map-field">
  <div class="google-map-field-label">
    <?php print $name; ?>
  </div>
  <div id="google_map_field_<?php print $delta; ?>" class="google_map_field_display"></div>
</div>
