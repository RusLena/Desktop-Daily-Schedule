//jQry function to load DOM
$(document).ready(function () {
  // Select HTML element with ID current day using dayjs library to format dates
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Color-coding time blocks
  function updateColorCoding() {
    //Get the current hour with dayjs library
    var currentHour = dayjs().hour();

    console.log("Current Hour:", currentHour);
    //Iterate over each element with the class "time-block" in HTML
    $(".time-block").each(function () {
      //Get the hour value from the text element with class "hour" in current time block
      var hour = parseInt($(this).find(".hour").text());
      console.log("Block Hour:", hour);
      //Use jQry to select the <textarea> element in the .each() loop
      var textarea = $(this).find("textarea");
      // To add/remove the class "past" if the block is in the past
      textarea.toggleClass("past", hour < currentHour);
      //To Add/remove the class "present" if the block is the current hour
      textarea.toggleClass("present", hour === currentHour);
      // To Add/remove the class "future" if the block is in the future
      textarea.toggleClass("future", hour > currentHour);

      console.log("Block State:", textarea.attr("class"));
    });
  }
  // Call the color time blocks function
  updateColorCoding();

  // Event listener for save button
  // To add a click event listener to all elements with the class "saveBtn."
  $(".saveBtn").on("click", function () {
    // Get  the value of the "data-time" attribute from the clicked save button
    var hour = $(this).data("time");
    //Get the value of the text
    var eventText = $(this).siblings("textarea").val();
    //Log the hour and event text to the console
    console.log("Hour:", hour, "Event Text:", eventText);

    // Save event to local storage using hour and eventText keys
    localStorage.setItem("event-" + hour, eventText);
  });
});
