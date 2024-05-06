// Get the console element
const display = document.getElementById("console");

// Function to append a value to the display
const appendToDisplay = (input) => display.value += input;

// arrow function to clear the console
// set it equal to an empty string to clear console
const clearDisplay = () => display.value = "";

//function to calculate
function calculate() {
    try {
        // Evaluate the expression
        const result = eval(display.value);

        // Check if the result is NaN or Infinity
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            // Check if the result is Infinity due to division by zero
            if (result === Infinity || result === -Infinity) {
                display.value = 'Error: Division by zero';
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        console.error('Error in calculation:', error.message);
        display.value = 'Error';
    }
}

// Function to handle keyboard input
function keyboardInputHandler(event) {
    // Get the pressed key
    const key = event.key;

    // Handle numeric keys
    if (/\d/.test(key)) {
        appendToDisplay(key);
    }

    //operator keys
    if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    }

    //decimal point
    if (key === '.' && !display.value.includes('.')) {
        appendToDisplay(key);
    }

    //Enter key
    if (key === 'Enter') {
        calculate();
    }
    if (key === 'c'){
        clearDisplay();
    }

    //Backspace key
    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
}

// Add event listener for keyboard input
document.addEventListener("keydown", keyboardInputHandler);
