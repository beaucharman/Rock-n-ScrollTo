/**
 * Rock 'n ScrollTo
 * ------------------------------------------------------------------------
 * rock-n-scrollto.js
 * @version 2.0 | Monday, 14th May 2013
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 * @link    https://github.com/beaucharman/rock-n-scrollto
 * @param {object} options
 *          {integer}  offset
 *          {integer}  speed
 *          {string}   easing
 *          {function} callback
 *
 * Scroll from the currrent window state to a given element's top offest
 * ------------------------------------------------------------------------ */
;(function ($) {
  'use strict';
  $.fn.rockNScrollTo = function (options) {
    var settings = $.extend({
      'offset': 0,
      'speed': 400,
      'easing': 'swing',
      'callback': null
    }, options);
    return this.each(function () {
      $('body').animate({
        scrollTop: $(this).offset().top - settings.offset
      }, settings.speed, settings.easing, settings.callback);
    });
  };
})(jQuery);
