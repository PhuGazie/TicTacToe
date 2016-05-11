$(document).ready(function() {

  var turn= "X" //written before the click event becuase we want it to be ready with X

  $(document).on("click", ".game-space", function(){
    //this if else statement doesn't need an else, wraps around everything.  If the space is empty then do everything else, otherwise, do nothing.
    if ($(this).html()=== "") {

      // alert ("click worked"); -- just to test to see that the clicking on each box works
      $(this).html(turn) // change the inner html of element we just clicked on to "X" (or the variable)
      $(this).addClass("add-X");

      // change turn based on state of "turn" variable
      if (turn === "X") {
          turn = "O";
      } else {
          turn = "X";
      }
    }
  });

});
