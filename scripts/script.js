$(function () {console.log("bring the wow");
  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#draggable").draggable({
    containment: "#photo-row",
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
      $("img").attr(
        "src",
        "https://s1.cdn.autoevolution.com/images/news/manhart-makes-the-bmw-x6-m-look-like-a-hyper-hatch-gives-it-720-hp-169011_1.jpg"
      );
    } else {
      game_msg = "you exceeded the game point, you lose";
      $("img").attr(
        "src",
        "https://www.topgear.com/sites/default/files/2022/12/MANHART-MH4-GTR-II-G82-Website-1.jpg?w=976&h=549"
      );
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