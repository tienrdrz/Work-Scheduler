/*
This code generates the date and time and displays
it on the page
*/
var currentDay = document.querySelector("#currentday")
var currentTime = document.querySelector("#currenttime")
var currentHour = moment().format("H");


var grabDateTime = function () {
    currentDay.innerHTML = moment().format("dddd, MMMM do, YYYY");
    currentTime.innerHTML = moment().format("h:mm:ss a");
};

setInterval(grabDateTime, 1);


/*
This code will set the colour of the textarea background
depending on the time of day. I add 9 because we are starting
at 9am
*/

$(".description").each(function boxColour(i) {

    var time = i + 9;

if (time < currentHour) {
    $(this).addClass("past");
};
//I have to use two equals here or else it wont recognize it correctly
if (time == currentHour) {
    $(this).addClass("present");
  }
  if (time > currentHour) {
    $(this).addClass("future");
  }

});

/*
I have to find a way to save the text written in the textbox
*/
  
$(".row").on("click", "button", function(){

localStorage.setItem("textNine",$("#9").val());

})

