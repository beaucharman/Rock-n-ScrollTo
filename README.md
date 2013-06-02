# Rock 'n ScrollTo

> A small jQuery plugin to help get users from one place to another.

jquery-easing.js plugin GitHub repo

https://github.com/gdsmith/jquery.easing

jquery-easing.js CDN

http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js

Easing examples and demonstrations

http://easings.net/

### Usage

**JavaScript**

```javascript
$('document').ready(function() {
  // fire!
  $('button').on('click', function() {

    $('#destination').rockNScrollTo({
      'speed': 2000,
      'callback': function(){
        // stuff to run after rockNScrollTo has finished it's business.
      }
    });

    return false; // stop anchor from performing it's default action.
  });
});
```