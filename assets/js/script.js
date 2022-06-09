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

let save9 = document.querySelector(".save9");
let textNine = document.querySelector(".text9");

textNine.value = localStorage.getItem("boxNineText");

save9.addEventListener("click", event => {
    localStorage.setItem("boxNineText", $('.text9').val());
})

let save10 = document.querySelector(".save10");
let textTen = document.querySelector(".text10");

textTen.value = localStorage.getItem("boxTenText");

save10.addEventListener("click", event => {
    localStorage.setItem("boxTenText", $('.text10').val());
})

let save11 = document.querySelector(".save11");
let textEleven = document.querySelector(".text11");

textEleven.value = localStorage.getItem("boxElevenText");

save11.addEventListener("click", event => {
    localStorage.setItem("boxElevenText", $('.text11').val());
})

let save12 = document.querySelector(".save12");
let textTwelve = document.querySelector(".text12");

textTwelve.value = localStorage.getItem("boxTwelveText");

save12.addEventListener("click", event => {
    localStorage.setItem("boxTwelveText", $('.text12').val());
})

let save13 = document.querySelector(".save13");
let textThir = document.querySelector(".text13");

textThir.value = localStorage.getItem("boxThirText");

save13.addEventListener("click", event => {
    localStorage.setItem("boxThirText", $('.text13').val());
})

let save14 = document.querySelector(".save14");
let textFourt = document.querySelector(".text14");

textFourt.value = localStorage.getItem("boxFourtText");

save14.addEventListener("click", event => {
    localStorage.setItem("boxFourtText", $('.text14').val());
})

let save15 = document.querySelector(".save15");
let textFift = document.querySelector(".text15");

textFift.value = localStorage.getItem("boxFiftText");

save15.addEventListener("click", event => {
    localStorage.setItem("boxFiftText", $('.text15').val());
})

let save16 = document.querySelector(".save16");
let textSixt = document.querySelector(".text16");

textSixt.value = localStorage.getItem("boxSixtText");

save16.addEventListener("click", event => {
    localStorage.setItem("boxSixtText", $('.text16').val());
})

let save17 = document.querySelector(".save17");
let textSevent = document.querySelector(".text17");

textSevent.value = localStorage.getItem("boxSeventText");

save17.addEventListener("click", event => {
    localStorage.setItem("boxSeventText", $('.text17').val());
})

let save18 = document.querySelector(".save18");
let textEight = document.querySelector(".text18");

textEight.value = localStorage.getItem("boxEightText");

save10.addEventListener("click", event => {
    localStorage.setItem("boxEightText", $('.text18').val());
})
