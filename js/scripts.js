

$(document).ready(function() {
  $("form#bottles").submit(function() {
    var bottleAmount = parseInt($("input#amount").val());
    
    $(".results").show();
    event.preventDefault();
  });
});
