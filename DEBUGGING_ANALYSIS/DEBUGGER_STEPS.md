# Assignment 3 - Debugging Analysis

## Description

I am analyzing the process of debugging and at the same time the working mechanism of javascript.

## Author

Maximilian Kreuser

## Date

2026-05-28

### Analysis of renderQuestion(currentState) - consult pictures


My breakpoint on line 208: the function renderQuestion() is invoked by the event listerner places on the Next Button.

### What does this state tell you about your program’s logic?

The event listener on the nextBtn is working because we entered the renderQuestion() function. My first conditions in the function is working. The variable 'line' in the condition as the value '1' which we can see in the Script variable list on the right of the debugger. The currentState.text.length is equal to '2' which we can see in the Local variable scope, since the value is brought in by the function's parameter. Since 'line === currentState.text.length - 1' is true, the function went inside the block. The next condition has the property 'answers', which we also see in the Scope list inside the debugger. The next code line is nextBtn.style.display = "none" and we see in the webpage that the next button has disappeared since the debugger has executed the line.

### Is the program behaving as expected at this point? Why or why not?

Yes it is behaving as expected because the currentState.text has reach the 'before last' line in the array and the next button must disappear to permit the answer buttons to appear, and the last line of text will also appear with the questions. Code is in order.

### If applicable, explain how this state connects to your program’s next steps

Next step is the next text line that includes the questions. At that point, the button must change from 'next' to the two choice questions, holding the 2 different paths to take. The state analyzed is preparing the program for the display of buttons needed in the program.
