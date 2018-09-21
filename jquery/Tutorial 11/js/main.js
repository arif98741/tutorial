$(document).ready(function(){
  //Tutorial 11 - Jquery Chaining
  $('#data')
  .css('font-size','16')
  .slideUp(600)
  .css('font-size','20px')
  .delay(3000)
  .slideDown(600)
  .hide(2000);

});
