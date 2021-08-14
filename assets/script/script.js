//create our document ready dunction to make sure nothing runs before we load the page.
$(document).ready(function () {
    console.log("document ready!");
}
//find  all button clickevents on the page. 
var currentDayEl = document.getElementById("currentDay");
var saveBtnEl = document.querySelector("col-md-1");
var userInputEl = document.querySelector("col-md-10 user-input");
//every row in the timeblock has its own id, grab them each 
//(.getItemById)
var hour9El = document.getElementById("hour-9");
var hour10El = document.getElementById("hour-10");
var hour11El = document.getElementById("hour-11");
var hour12El = document.getElementById("hour-12");
var hour13El = document.getElementById("hour-13");
var hour14El = document.getElementById("hour-14");
var hour15El = document.getElementById("hour-15");
var hour16El = document.getElementById("hour-16");
var hour17El = document.getElementById("hour-17");

//grab the saved event options
//create variables to save user input and time
var toDoList = {
    "9AM" = [];
    "10AM" = [];
    "11AM" = [];
    "12PM" = [];
    "1PM" = [];
    "2PM" = [];
    "3PM" = [];
    "4PM" = [];
    "5PM" = [];
}
console.log(toDoList);

//save to localStorage
function(saveEvent) {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    console.log(saveEvent);
}
//addEventListener('click');
saveBtnEl.addEventListener('click', saveEvent);
        
        //after saving to localStorage, alert the user.

        //create some kind of timeOut value that removes the notification.

//create time updater function ()
    //get the current time (moment.js)

    //create our loop to go over all the time blocks (for-loop)
    

     //check to see if have passed out time

     // check to see if the current hour matches timeEl from HTML
        //check out removeClass and addClass
        //().removeClass()
     // check to see if the time in the future
     // (one if statement)
     //(create all the time elements)


//Retrieve localStorage and render items to the correct rows. 
// Get one of the rows working and copy and paste 









)