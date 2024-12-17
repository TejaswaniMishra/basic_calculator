let display = document.getElementById("display");

// Function to append characters to the display
function appendCharacter(char) {
    display.value += char;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value); // Use eval to calculate the result
    } catch (error) {
        display.value = "Error";
    }
}
