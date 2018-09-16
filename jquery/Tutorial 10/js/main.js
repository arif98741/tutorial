$(document).ready(function(){
  //Tutorial 10 - Jquery Add ElementsT
  var x = 0;
  $('#btn').click(function(){
    x++;
    var data =
    "<tr><td>"+x+"</td>"
    +"<td>Ariful Islam</td>"
    +"<td>Tangail</td>"
    +"<td>123</td>"
    +"<td><a href=''>Edit</a></td>"
    +"</tr>";

    $('#appsection').append(data);
  });
});
