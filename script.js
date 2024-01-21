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
      // Get the save button elements for each time block
      var saveBtn9 = document.getElementById("saveBtn-9");
      var saveBtn10 = document.getElementById("saveBtn-10");
      var saveBtn11 = document.getElementById("saveBtn-11");
      var saveBtn12 = document.getElementById("saveBtn-12");
      var saveBtn1 = document.getElementById("saveBtn-1");
      var saveBtn2 = document.getElementById("saveBtn-2");
      var saveBtn3 = document.getElementById("saveBtn-3");
      var saveBtn4 = document.getElementById("saveBtn-4");
      var saveBtn5 = document.getElementById("saveBtn-5");
      // Repeat the above line for other time blocks (saveBtn10, saveBtn11, etc.)
    
      // Add event listeners to the save buttons
      //Btn9
      if (saveBtn9) {
        saveBtn9.addEventListener("click", function () {
          handleSubmit("9");
          displayDescriptions();
        });
      } else {
        console.error("Button with ID saveBtn-9 not found.");
      }
    //Btn10
      if (saveBtn10) {
         saveBtn10.addEventListener("click", function () {
           handleSubmit("10");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-10 not found.");
       } 
       //Btn11
       if (saveBtn11) {
         saveBtn11.addEventListener("click", function () {
           handleSubmit("11");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-11 not found.");
       } 
       //Btn12
       if (saveBtn12) {
         saveBtn9.addEventListener("click", function () {
           handleSubmit("12");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-12 not found.");
       } 
       //Btn1
       if (saveBtn1) {
         saveBtn1.addEventListener("click", function () {
           handleSubmit("1");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-1 not found.");
       } 
       //Btn2
       if (saveBtn2) {
         saveBtn2.addEventListener("click", function () {
           handleSubmit("2");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-2 not found.");
       } 
       //Btn3
       if (saveBtn3) {
        saveBtn3.addEventListener("click", function () {
          handleSubmit("3");
          displayDescriptions();
        });
      } else {
        console.error("Button with ID saveBtn-3 not found.");
      }
      //Btn4
      if (saveBtn4) {
         saveBtn4.addEventListener("click", function () {
           handleSubmit("4");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-4 not found.");
       }
       //Btn5
       if (saveBtn5) {
         saveBtn5.addEventListener("click", function () {
           handleSubmit("5");
           displayDescriptions();
         });
       } else {
         console.error("Button with ID saveBtn-5 not found.");
       }
      // Function to handle form submission
      function handleSubmit(time) {
        var inputValue = document.getElementById("description-" + time);
        var newDescription = {
          time: time,
          description: inputValue.value,
        };
    
        storedDescriptions.push(newDescription);
    
        localStorage.setItem("descriptions", JSON.stringify(storedDescriptions));
      }
    
      // Function to display descriptions (adjust as needed)
      function displayDescriptions() {
        for (let i = 0; i < storedDescriptions.length; i++) {
          console.log(storedDescriptions[i].description);
          // Add logic to display descriptions as needed
        }
      }
    
      // Retrieve stored descriptions from localStorage
      var storedDescriptions = JSON.parse(localStorage.getItem("descriptions")) || [];
    
      // Example: Call displayDescriptions on page load
      displayDescriptions();
    });
    