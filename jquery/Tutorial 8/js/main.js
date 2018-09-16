$(document).ready(function(){
  //Tutorial  8 - Jquery Set
  $('#message').html('I am fine');
  $('#btn').click(function(){
    $('#inp').attr('placeholder','Enter Your Name');
    $('#inp').val('Jhon');

  });
});
