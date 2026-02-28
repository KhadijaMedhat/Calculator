let displayInput = "";
let calculationInput = "";
let lastExpression = "";

function updateDisplay() {
    document.getElementById("expression").innerText = lastExpression;
    document.getElementById("result").innerText = displayInput;
}

function append(value) {
    displayInput += value;
    calculationInput += value;
    updateDisplay();
}

function setOperator(op) {
    if (displayInput === "") return;

    if (op === "×") {
        displayInput += " × ";
        calculationInput += "*";
    }
    else if (op === "÷") {
        displayInput += " ÷ ";
        calculationInput += "/";
    }
    else if (op === "^") {
        displayInput += " ^ ";
        calculationInput += "**";
    }
    else {
        displayInput += " " + op + " ";
        calculationInput += op;
    }

    updateDisplay();
}

function calculate() {
    try {
        let result = eval(calculationInput);
        lastExpression = displayInput + " =";
        displayInput = result.toString();
        calculationInput = result.toString();
        updateDisplay();
    } catch {
        document.getElementById("result").innerText = "Error";
    }
}

function clearAll() {
    displayInput = "";
    calculationInput = "";
    lastExpression = "";
    updateDisplay();
}

function factorial() {
    let num = parseInt(calculationInput);
    if (isNaN(num) || num < 0) return;
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    lastExpression = num + "! =";
    displayInput = result.toString();
    calculationInput = result.toString();
    updateDisplay();
}

function squareRoot() {
    let num = Number(calculationInput);
    if (num < 0) return;
    let result = Math.sqrt(num);
    lastExpression = "√(" + num + ") =";
    displayInput = result.toString();
    calculationInput = result.toString();
    updateDisplay();
}

function log() {
    let num = Number(calculationInput);
    let result = Math.log10(num);
    lastExpression = "log(" + num + ") =";
    displayInput = result.toString();
    calculationInput = result.toString();
    updateDisplay();
}

function sin() {
    let num = Number(calculationInput);
    let result = Math.sin(num);
    lastExpression = "sin(" + num + ") =";
    displayInput = result.toString();
    calculationInput = result.toString();
    updateDisplay();
}

function cos() {
    let num = Number(calculationInput);
    let result = Math.cos(num);
    lastExpression = "cos(" + num + ") =";
    displayInput = result.toString();
    calculationInput = result.toString();
    updateDisplay();
}

function tan() {
    let num = Number(calculationInput);
    let result = Math.tan(num);
    lastExpression = "tan(" + num + ") =";
    displayInput = result.toString();
    calculationInput = result.toString();
    updateDisplay();
}

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const letter = document.getElementById("modeLetter");

    if (document.body.classList.contains("dark")) {
        letter.innerText = "B";
    } else {
        letter.innerText = "M";
    }
}
window.addEventListener("keydown", function (e) {

    
    if (e.target.tagName === "INPUT") return;

    
    if (!isNaN(e.key) || e.key === ".") {
        append(e.key);
    }

    // Operators
    if (e.key === "+") setOperator("+");
    if (e.key === "-") setOperator("-");
    if (e.key === "*") setOperator("×");
    if (e.key === "/") setOperator("÷");
    if (e.key === "^") setOperator("^");

   
    if (e.key === "Enter") calculate();

    
    if (e.key === "Backspace") {
        displayInput = displayInput.slice(0, -1);
        calculationInput = calculationInput.slice(0, -1);
        updateDisplay();
    }

   
    if (e.key === "Escape") clearAll();
});