// sets global variable for time-block class.
let timeBlocks = $(".time-block");

$(function () {
  // Dom traversal can be  used to move through the dom to target "this" button's parent with with an "id" attr
  let saveBtn = $(".saveBtn");
  saveBtn.on('click', function () {
    let textBlock = $(this).siblings('.description').val();
    let timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, textBlock);
  });

  // for loop that goes through 
  for (let index = 0; index < timeBlocks.length; index++) {
    const timeBlock = timeBlocks[index];
    // splits the content inside the id and targets the second object 
    const hour = timeBlock.id.split("-")[1];
    // condition to set class depending on current hour
    if (hour == dayjs().hour()) {
      timeBlock.classList.add("present");
    }
    else if (hour < dayjs().hour()) {
      timeBlock.classList.add("past");
    }
    else if (hour > dayjs().hour()) {
      timeBlock.classList.add("future");
    }
  }
  //  **dayjs().hour() - gets current hour
  // gets local storage, if any for the different id's
  $('#hour-9 .description').val(localStorage.getItem("hour-9"));
  $('#hour-10 .description').val(localStorage.getItem("hour-10"));
  $('#hour-11 .description').val(localStorage.getItem("hour-11"));
  $('#hour-12 .description').val(localStorage.getItem("hour-12"));
  $('#hour-13 .description').val(localStorage.getItem("hour-13"));
  $('#hour-14 .description').val(localStorage.getItem("hour-14"));
  $('#hour-15 .description').val(localStorage.getItem("hour-15"));
  $('#hour-16 .description').val(localStorage.getItem("hour-16"));

// adds current day and time to HTML page
  function timeNow() {
    let currentDay = dayjs().format("ddd, MMMM D, YYYY hh:m:ss A");
    $('#currentDay').text(currentDay);
  }
// sets interval for time to run seconds
  setInterval(timeNow, 1000);

});



