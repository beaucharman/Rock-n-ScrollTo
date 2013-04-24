/** 
 * Rock 'n ScrollTo
 * ------------------------------------------------------------------------
 * rock-n-scrollto.js
 * @version 1.0 | Monday, 28th January 2013
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 * @link    https://gist.github.com/beaucharman/5127116/
 * @param array      | array
 * @param callback   | function
 * @return callback   | function
 * 
 * Iterate through an object, array, string etc...
 * ------------------------------------------------------------------------ */

$.fn.extend({
  rockNScrollTo : function(speed, offset, callback) {
    speed = speed       || 400;
    offset = offset     || 0;
    callback = callback || null;
    return this.each(function() {
      var targetOffset = $(this).offset().top - offset;
      $('body').animate({scrollTop: targetOffset}, speed, callback);
    });
  }
});
