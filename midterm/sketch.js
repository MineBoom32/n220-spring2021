function setup() {
  createCanvas(600,600);
  // Create 10 new circles in an array
}

var defaultSize = 50 // Determines the default size of the circle (when no resizing is applied)

function draw() {
  // Clear the canvas with background()
  // Start by making a loop that goes over each circle object
    // Determine the x position of the circle
      // Divide the canvas width by the number of circles
      // Multiply the result by the current number in the above-mentioned range
      // Assign the final number to the object's x position value
    // Determine variables for the circle's size and brightness based on the distance between the circle and the cursor
      // Determine the base value
        // Find the difference between the x position of the circle (provided earlier) and that of the cursor
        // Get the absolute value of this difference in case it's negative (a circle shouldn't have a negative radius)
      // Determine the size variable
        //Divide the base value by the width of the canvas (if I'm correct on this) to get the scale
        //Multiply the result by the defaultSize variable
        //Assign the resulting new size to the object's size value
      // Determine the brightness variable based on the new size variable, as they are determined in the same way
        // Constrain the base value to between 0 and 255
        // Subtract the constrained variable from 255, since the circle is supposed to be brighter when it's closer
        // Assign the outcome to the object's brightness value
    // Determine the y position of the circle
      // First, check if the mouse is being held down.
        //If it is...
          // Increase the circle's position by 1.
        //Otherwise...
          // Simply retrieve the current mouseY value provided by p5.js.
      // Constrain the resulting value to between 0 and the canvas height
      // Assign this constrained value to the object's y position value
    // Actually draw the circle
      // Set the fill color to a specific shade of grey/white/black based on the brightness value
      // Draw a circle with the current object's determined position and size values
}

//Circle object definition
  // Define the x position value
  // Define the y position value
  // Define the size value as the defaultSize
  // Define the brightness value