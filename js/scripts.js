/*      initialize Materializess select boxes for the form      */

$(document).ready(function(){
  $('select').formSelect();
});


/*      Side Navigation Function      */

$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
});