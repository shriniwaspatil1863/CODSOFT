// Get the display element
var display = document.getElementById("display");

// Function to append a value to the display
function DisplayOnScreen(value) {
    display.innerHTML += value;
}

// Function to add
function add() {
    display.innerHTML += "+";
}

// Function to subtract
function subtract() {
    display.innerHTML += "-";
}

// Function to divide
function divide() {
    display.innerHTML += "/";
}

// Function to multiply
function multiply() {
    display.innerHTML += "*";
}

function calculate() {
    try {
        var result = eval(display.innerHTML);

        if (Number.isInteger(result)) {
            display.innerHTML = result;
        } else {
            display.innerHTML = result.toFixed(7);
        }
    } catch (error) {
        display.innerHTML = "Error";
    }
}


// Function to clear all
function clearAll() {
    display.innerHTML = "";
}

// Function to delete one by one
function deleteOne() {
    var currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay.slice(0, -1);
}

