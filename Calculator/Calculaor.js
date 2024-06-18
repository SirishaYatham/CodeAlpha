let result = "0"; // Initialize result as a string

// Function to update the result display
function updateResult() {
    document.getElementById('result').innerText = result;
}

// Function to add digits and operators to the result
function addToResult(value) {
    if (result === "0" && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        result = value; // Start new calculation
    } else {
        result += value; // Append to existing result
    }
    updateResult();
}

// Function to clear the result
function clearResult() {
    result = "0";
    updateResult();
}

// Function to perform calculation and display result
function calculate() {
    try {
        result = eval(result); // Use eval() to evaluate the string expression
        updateResult();
    } catch (error) {
        result = "Error";
        updateResult();
    }
}
