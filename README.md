Task Description :
A simple React application that implements a timer. The app will start counting from zero and increment upwards, stopping at a user-defined number of seconds. This lab will test your skills in React state management, event handling, and basic styling using Tailwind CSS.

Requirements
Timer Input Field

Create an input field where users can enter the number of seconds for the timer.
The input field should have the ID seconds-input and be of type number.
Start and Stop Buttons

Add two buttons to the page:
A start button with the ID start. This button will start the timer.
A stop button with the ID stop. This button will stop the timer.
Ensure that only one of these buttons is enabled at any time. The start button should be enabled by default.
Timer Display

Include a div element with the ID timer to display the current timer count.
The timer should initially display 0.
Button Functionality

Implement the functionality for the start and stop buttons:
Clicking start should begin the timer and disable the start button while enabling the stop button.
Clicking stop should pause the timer and toggle the button states back.
Styling with Tailwind CSS

Style all elements on the page using Tailwind CSS.
Center-align the input field, buttons, and timer display for a clean and organized layout.
Example Output
When a user enters 5 in the input field and clicks the start button, the timer display (#timer) should increment each second, showing 1, 2, 3, 4, and stopping at 5. The stop button should be clickable at any time to pause the timer.