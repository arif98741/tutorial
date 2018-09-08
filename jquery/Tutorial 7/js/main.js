$(document).ready(function(){
  //Tutorial 7 - Callback Function

  //general function
  function add(x,y){
    console.log('I am a general function and my value is '+x+', '+y);
  }


  //annoynimous function
  var anno = function(p,q){
      //console.log('i am an annoynimous function');
      console.log('I am a annoynimous function and my value is '+p+', '+q);
  }

  //add(5,9);
  //anno(5,8);

  //Callback Function
  var callfunc = function(){
    console.log('Hello');

  }
  setTimeout(callfunc,2000);
  setInterval(callfunc,2000);


});
