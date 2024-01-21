
$(document).ready(function () {
  // Display the current day
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Color-code time blocks
  function updateColorCoding() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var hour = parseInt($(this).find(".hour").text());
      var textarea = $(this).find("textarea");

      if (hour < currentHour) {
        textarea.addClass("past");
      } else if (hour === currentHour) {
        textarea.addClass("present");
      } else {
        textarea.addClass("future");
      }
    });
  }
  // Call the function to set up color coding
  updateColorCoding();

  // Event listener for save button
  $(".saveBtn").on("click", function () {
    var hour = $(this).data("time");
    var eventText = $(this).siblings("textarea").val();
    console.log("Hour:", hour, "Event Text:", eventText);
    
    // Save event to local storage
    localStorage.setItem("event-" + hour, eventText);
  });
});
