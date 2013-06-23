# rockNScrollTo.js

> A small jQuery plugin to help get users from one place to another.

### Usage

**JavaScript**

```javascript
;(function ($) {
  // fire!
  $('button').on('click', function () {

    $('#destination').rockNScrollTo({
      'speed': 2000,
      'callback': function () {
        // stuff to run after rockNScrollTo has finished it's business.
      }
    });

    return false; // stop anchor from performing it's default action

  });
}(jQuery));
```

### Easing

jquery-easing.js plugin GitHub repo: https://github.com/gdsmith/jquery.easing

jquery-easing.js CDN: http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js

Easing examples and demonstrations: http://easings.net/

### One Page Site Idea

Why not use **rockNScrollTo.js** along with [snapify.js](https://github.com/beaucharman/snapify.js) for a rad single page site menu.

```javascript
;(function($) {

  $('nav ul').snapify().find('a').each(function () {
    $(this).on('click', function () {
      $($(this).attr('href')).rockNScrollTo();
      return false;
    });
  });

}(jQuery));
```
