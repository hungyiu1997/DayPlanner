//create our document ready dunction to make sure nothing runs before we load the page.
$(document).ready(function () {
    console.log("document ready!");
}
//find  all button clickevents on the page. 
var saveBtnEl = document.querySelector("col-md-1");
var textAreaEl = document.querySelector("col-md-10 user-input")
//every row in the timeblock has its own id, grab them each 
//(.getItemById)

//grab the saved event options
//create variables to save user input and time
var toDoList = {
    "9AM" = [],
    "10AM" = [],
    "11AM" = [],
    "12PM" = [],
    "1PM" = [],
    "2PM" = [],
    "3PM" = [],
    "4PM" = [],
    "5PM" = [],

    console.log(toDoList);
}


function timeBlock() {
    //save to localStorage
    localStorage.setItem("content", toDoList);
    //Retrieve localStorage and render items to the correct rows. 
    document.getElementById("9AM").innerHTML = localStorage.getItem("content");
}  
    //addEventListener('click');
    saveBtnEl.addEventListener("click", timeBlock);

    //after saving to localStorage, alert the user.
    //create some kind of timeOut value that removes the notification.

//need a for loop to loop through the timeBlocks

//create time updater function ()
    //get the current time (moment.js)
    var currentTimeEl = document.getElementById("currentDay");
    currentTimeEl = text.moment().format('MMMM Do YYYYY, h:mm:ss a');

    //create our loop to go over all the time blocks (for-loop)
    for (var i = 0; i < toDoList.length; i++) {
        console.log()
    }

     //check to see if have passed out time

     // check to see if the current hour matches timeEl from HTML
        //check out removeClass and addClass
        //().removeClass()
     // check to see if the time in the future
     // (one if statement)
     //(create all the time elements)

function blockColor (){
    if (currentTimeEl > 9){
     $("9AM").addClass("past")
    } else if (currentTimeEl < 9) {
        $("9AM").addClass("future")
    } else("present");
    
}


// Get one of the rows working and copy and paste 









)