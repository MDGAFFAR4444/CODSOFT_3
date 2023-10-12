

let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        // Check if the input contains a percentage sign (%)
        if (currentInput.includes('%')) {
            // Remove the percentage sign and calculate the percentage
            let parts = currentInput.split('%');
            if (parts.length === 2) {
                let number = parseFloat(parts[0]);
                let percentage = parseFloat(parts[1]);
                let result = (number * percentage) / 100;
                display.value = result;
                currentInput = result.toString();
            } else {
                throw new Error('Invalid input');
            }
        } else {
            // If there's no percentage sign, calculate the result as a regular expression
            let result = eval(currentInput);
            display.value = result;
            currentInput = result.toString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// ...
function backspace() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    display.value = currentInput;
}
// ...


