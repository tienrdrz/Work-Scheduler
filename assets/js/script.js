var currentDay = document.querySelector("#currentday")
var currentTime = document.querySelector("#currenttime")

var grabDateTime = function () {
    currentDay.innerHTML = moment().format("dddd, MMMM do, YYYY");
    currentTime.innerHTML = moment().format("h:mm:ss a")
};

setInterval(grabDateTime);