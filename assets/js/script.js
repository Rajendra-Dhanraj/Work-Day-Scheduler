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
$('#9oclock .description').val(localStorage.getItem('9oclock'));
$('#10oclock .description').val(localStorage.getItem('10oclock'));
$('#11oclock .description').val(localStorage.getItem('11oclock'));
$('#12oclock .description').val(localStorage.getItem('12oclock'));
$('#1oclock .description').val(localStorage.getItem('1oclock'));
$('#2oclock .description').val(localStorage.getItem('2oclock'));
$('#3oclock .description').val(localStorage.getItem('3oclock'));
$('#4oclock .description').val(localStorage.getItem('4oclock'));
$('#5oclock .description').val(localStorage.getItem('5oclock'));