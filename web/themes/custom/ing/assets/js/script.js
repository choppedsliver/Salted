(function ($, Drupal) {
  'use strict';
  
  Drupal.behaviors.myThemeBehavior = {
    attach: function (context, settings) {
      // Your custom JavaScript here
      console.log('My custom theme JS is loaded!');
    }
  };
  
})(jQuery, Drupal);
