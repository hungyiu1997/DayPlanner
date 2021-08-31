//create our document ready dunction to make sure nothing runs before we load the page.
$(document).ready(function () {
  console.log("document ready!");

  //find  all button clickevents on the page.
  var textAreaEl = document.querySelector(".description");

  //grabbed save button. 
  $(".saveBtn").on("click", function () {
    var contentKey = $(this).parent().attr("id");
    var content = $(this).siblings(".description").val();
    localStorage.setItem(contentKey, content);
  });

  //store items to local storage
  //.val returns the values 
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  $("#hour-10 .description").val(localStorage.getItem("hour-10"));

  $("#hour-11 .description").val(localStorage.getItem("hour-11"));

  $("#hour-12 .description").val(localStorage.getItem("hour-12"));

  $("#hour-13 .description").val(localStorage.getItem("hour-13"));

  $("#hour-14 .description").val(localStorage.getItem("hour-14"));

  $("#hour-15 .description").val(localStorage.getItem("hour-15"));

  $("#hour-16 .description").val(localStorage.getItem("hour-16"));

  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  function alertUser () {
    
  }
  //after saving to localStorage, alert the user.
  //create some kind of timeOut value that removes the notification.

  //need a for loop to loop through the timeBlocks

  //create time updater function ()
  //get the current time (moment.js)
  $("#currentDay").text(moment().format("MMMM Do YYYYY, h:mm:ss a"));


  //check to see if have passed out time

  // check to see if the current hour matches timeEl from HTML
  //check out removeClass and addClass
  //().removeClass()
  // check to see if the time in the future
  // (one if statement)
  //(create all the time elements)
  blockColor();
  function blockColor() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);

      if (currentHour > hourBlock) {
        $(this).addClass("past");
      } else if (currentHour === hourBlock) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
    
  }
  // setInterval()
  //display:none

  // Get one of the rows working and copy and paste
});
