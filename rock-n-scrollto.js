/* 

  Rock 'n ScrollTo

------------------------------------------------
  rock-n-scrollto.js 1.0 
  Monday, 28th January 2013
  Beau Charman | @beaucharman | http://beaucharman.me
------------------------------------------------ */

```javascript
$.fn.extend(
{
  rockNScrollTo : function(speed, offset, callback)
  {
    speed  = speed      || 400;
    offset = offset     || 0;
    callback = callback || null;
    return this.each(function()
    {
      var targetOffset = $(this).offset().top - offset;
      $('body').animate({scrollTop: targetOffset}, speed, callback);
    });
  }
});
```