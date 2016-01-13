$(document).ready(function(){
  var reptile = prompt("Which reptile would you like to learn about? (turtle, snake or dragon?)").toLowerCase();

  if (reptile === "turtle") {
    $('#turtle').show();
  } else if (reptile === "snake") {
    $('#snake').show();
  } else if (reptile === "dragon") {
    $('#dragon').show();
  } else {
    alert("please enter a valid option");
  }
});
