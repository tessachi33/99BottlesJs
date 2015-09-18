var getBottles = prompt("So, you wanna drink absinthe? " + " How may bottles?!");
var getBottlesArray = [];
for(var i = amount; i > 0; i--){
  getBottlesArray.push(amount + " bottles of absinthe on the wall" + amount +
     " bottles of absinthe,take a slug and pass is down " + (amount -1) + " bottles of absinthe " );








$(document).ready(function() {
  $("form#bottles").submit(function() {
    var bottleAmount = parseInt($("input#amount").val());
    $(".results").show();
    event.preventDefault();
  });
});
