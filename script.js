// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeBlocks = $(".time-block");

function init() {
    for (i = 0; i < timeBlocks.length; i++) {
    const timeBlock = timeBlocks[i];
    console.log(localStorage.getItem(timeBlock.id));
    
    timeBlock.innerText = localStorage.getItem(timeBlock.id);
  }
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? "this" references the button that is being clicked
  //  How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?// Line 16. Dom traversal can be
  // used to move through the dom to target "this" button's parent with with an "id" attr
  let saveBtn = $(".saveBtn");
  saveBtn.on('click', function () {
    let textBlock = $(this).siblings('.description').val();
    let timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, textBlock);
    // console.log(textBlock);
    // console.log(timeBlock)
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time

  // let currentTime = dayjs().hour();
  // console.log(currentTime);
  // console.log(timeBlocks);
  for (let index = 0; index < timeBlocks.length; index++) {
    const timeBlock = timeBlocks[index];
    // splits the content inside the id and targets the second object 
    const hour = timeBlock.id.split("-")[1];
    // console.log(hour);
    if (hour == dayjs().hour()) {
      timeBlock.classList.add("present");

      // console.log(timeBlock)

    }
    else if (hour < dayjs().hour()) {
      timeBlock.classList.add("past");
    }
    else if (hour > dayjs().hour()) {
      timeBlock.classList.add("future");
    }
  }
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? **dayjs().hour() - gets current hour
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // TODO: Add code to display the current date in the header of the page.
 
  function timeNow() {
    let currentDay = dayjs().format("ddd, MMMM D, YYYY hh:m:ss A");
    $('#currentDay').text(currentDay);
  
  }
  setInterval(timeNow, 1000);
    
  
});



init();
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist