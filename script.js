/* For this first activity, pseudocode the game's logic and structure together in breakout rooms:

Remind yourselves that there are no wrong answers here. If they are stuck offer this outline as a starting point:

* Add a reference to jQuery.

* Create an initial HTML layout using Bootstrap.

* Assign unique class names to key buttons and images.

* Use jQuery to capture when the corresponding buttons are clicked, using the $() identifier with the class name inside.

* Create code that changes the CSS of target classes in response to click events.*/

 /*pseudocode
 1. **Setup:**
   - Add a reference to jQuery in the HTML document.
   - Create an initial HTML layout using Bootstrap for styling.

2. **HTML Structure:**
   - Design the HTML layout with key buttons and images.
   - Assign unique class names to the key buttons and images for easy identification.

3. **Event Handling:**
   - Use jQuery to capture click events on specific buttons and images.
   - Identify buttons and images using the $() identifier with their assigned class names.

4. **Event Handling Functions:**
   - Create functions to handle the click events for each button or image.
   - Inside these functions, change the CSS properties of target classes in response to the click events.
   - You can modify styles such as color, size, visibility, etc., depending on the game's requirements.

5. **Game Logic:**
   - Define the game logic within the event handling functions.
   - Specify how the game responds to different button clicks or image interactions.
   - Update game state variables or trigger specific actions based on user input.

6. **Testing:**
   - Test the game by clicking on different buttons and images.
   - Verify that the CSS changes occur as expected and that the game logic behaves correctly.

7. **Refinement:**
   - Refine the pseudocode and actual code based on testing results.
   - Consider adding error handling or additional features to enhance the game.

8. **Documentation:**
   - Document the code to explain the purpose of key functions, variables, and any complex logic.
   - Include comments for future reference and collaboration.

9. **Review:**
   - Review the overall structure and logic with the team.
   - Discuss any improvements or modifications needed for better performance or user experience.

10. **Finalization:**
    - Make any final adjustments based on the team's feedback.
    - Ensure the code is well-organized and follows best practices.*/

  
    document.addEventListener("DOMContentLoaded", function () {
      // Event listener for all save buttons
      document.addEventListener("click", function (event) {
        // Check if the clicked element is a save button
        if (event.target.classList.contains("saveBtn")) {
          // Get the hour from the button's ID
          var hour = event.target.id.split("-")[1];
    
          // Get the description input for the corresponding hour
          var descriptionInput = document.getElementById("description-" + hour);
    
          // Ensure the input element exists
          if (descriptionInput) {
            // Get the description value
            var description = descriptionInput.value;
    
            // Save the time and description to local storage
            var storedData = JSON.parse(localStorage.getItem("storedData")) || {};
            storedData[hour] = description;
            localStorage.setItem("storedData", JSON.stringify(storedData));
          } else {
            console.error("Description input not found for hour " + hour);
          }
        }
      });
    
      // Function to display stored data
      function displayStoredData() {
        var storedData = JSON.parse(localStorage.getItem("storedData")) || {};
    
        // Display the stored data (you can modify this part based on your requirements)
        for (var hour in storedData) {
          console.log("Time: " + hour + ", Description: " + storedData[hour]);
        }
      }
    
      // Call the displayStoredData function
      displayStoredData();
    });