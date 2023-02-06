$(function () {console.log("bring the wow");
  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
 
    var game_msg = "";

    if (new_count<= 100) {
      game_msg = "you haven't reached the game point, you lose";
    } 
    else if (new_count > 100 && new_count<200 ) {
      game_msg = "you reached the game point, you win";
    } else {
      game_msg = "you exceeded the game point, you lose";
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
    $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
  });
});