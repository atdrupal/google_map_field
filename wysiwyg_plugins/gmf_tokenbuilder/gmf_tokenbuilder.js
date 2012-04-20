
(function ($) {

  Drupal.wysiwyg.plugins['gmf_tokenbuilder'] = {

    /**
     * Invoke is called when the toolbar button is clicked.
     */
    invoke: function(data, settings, instanceId) {
      Drupal.wysiwyg.plugins.gmf_tokenbuilder.add_form(data, settings, instanceId);
    },

    /**
     *  Open a dialog and present the map field token builder.
     */
    add_form: function (data, settings, instanceId) {
      // Location, where to fetch the dialog.
      var aurl = Drupal.settings.basePath + 'index.php?q=google-map-field/token-builder';
      dialogdiv = jQuery('<div id="insert-gmf-token"></div>');
      dialogdiv.load(aurl + " .content #google-map-field-tokenbuilder-form", function(){
        var dialogClose = function () {
          try {
            dialogdiv.dialog('destroy').remove();
          } catch (e) {};
        };
        btns = {};
        btns[Drupal.t('Insert map')] = function () {
          var token = dialogdiv.contents().find('#edit-token').val();
          var editor_id = instanceId;
          token = ' [gmf:' + token + '] ';
          Drupal.wysiwyg.plugins.gmf_tokenbuilder.insertIntoEditor(token, editor_id);
          jQuery(this).dialog("close");
        };

        btns[Drupal.t('Cancel')] = function () {
          jQuery(this).dialog("close");
        };

        dialogdiv.dialog({
          modal: true,
          autoOpen: false,
          closeOnEscape: true,
          resizable: false,
          draggable: false,
          autoresize: true,
          namespace: 'jquery_ui_dialog_default_ns',
          dialogClass: 'jquery_ui_dialog-dialog',
          title: Drupal.t('Insert Google Map Field Token'),
          buttons: btns,
          width: 550,
          close: dialogClose
        });
        dialogdiv.dialog("open");
        getMap();
      });
    },

    insertIntoEditor: function (token, editor_id) {
      Drupal.wysiwyg.instances[editor_id].insert(token);
    },

  };

})(jQuery);
