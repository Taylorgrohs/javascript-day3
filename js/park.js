$(document).ready(function(){
  var height = parseFloat(prompt("How tall are you?"));

  if (height>= 5) {
    $('#over-5ft').show();
  } else {
    $('#under-5ft').show();
  }
});
