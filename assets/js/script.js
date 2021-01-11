// Display Current Date formatted to match mock-up
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// listener for save button click
$(".saveBtn").on("click", function () {
  // variables to get value and store in localStorage
  var task = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, task);
});

// load local storage into webpage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function colorChange() {
  // get current hour as a number
  var currentHour = moment().hours();
  // loop over time blocks
  $(".time-block").each(function () {
    //convert block id into number
    var blockHour = parseInt($(this).attr("id"));
    console.log(blockHour, currentHour);
    // evaluate current time vs: past, present, future and change classes accordingly
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

colorChange();
