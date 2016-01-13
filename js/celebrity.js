$(document).ready(function(){
  $("form").submit(function(event){
  var gender = $("input#gender").val();
  var band = $("input#band").val();
  var age = $("input#age").val();
  if (gender === "male" && band != "" && age != ""){
    $(".drake").hide();
    $(".jennifer-lawrence").show();
  } else if (gender === "female" && band != "" && age != ""){
    $(".jennifer-lawrence").hide();
    $(".drake").show();
  } else {
    alert("Please complete the form.")
  }
  event.preventDefault();
});
});
