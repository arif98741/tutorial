$(document).ready(function(){
  var x = " consectetur repellat dicta neque dignissimos eaque accusamus quibusdam pariatur.repellat dicta neque dignissimos eaque accusamus quibusdam pariatur.repellat dicta neque dignissimos eaque accusamus quibusdam pariatur.repellat dicta neque dignissimos eaque accusamus quibusdam pariatur. Consequuntur, eos dolores et.";
  var i = 0;
  /*setInterval(function(){
    $('#message').append(x.charAt(i));
    i++;
    if(i> x.length+5){
      i = 0 ;
      $('#message').html('');
    }

  },80);*/


  var x = ['Arif','Shamim','Khayrul','Mehedi','Idris','Khan Hasan'];
  setInterval(function(){
    $('#message').html(x[i]);
    i++;
    if(i > x.length){
      i = 0;
    }

  },400);

});
