# Rock 'n ScrollTo

A small jQuery plugin to help get users from one place to another.

### Usage

```javascript

$('document').ready(function() {
  // fire!
  $('button').on('click', function() { 
    
    $('#section').rockNScrollTo(800, 60, function() {
      // stuff to run after rockNScrollTo has finished it's business.
    });
    
    return false; // stop anchor from performing it's default action.
  });
});

```
