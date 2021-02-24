const numberButton = document.getElementsByClassName("numbers");
const before = document.getElementById("before");
const after = document.getElementById("after");
const plusButton = document.getElementById("+");
const minusButton = document.getElementById("-");
const mulitplyButton = document.getElementById("*");
const divideButton = document.getElementById("/");
const equalButton = document.getElementById("=");
const clearButton = document.getElementById("clear");
let createResultA = document.createElement("p");
let createResultB = document.createElement("p");
let storedValueA = '';
let storedValueB = '';
let storedOperator = null;
let storedNumberA = '';
let storedNumberB = '';
let bracketA = '';
let bracketB = '';

for (let i = 0; i < 10; i++) {
    numberButton[i].addEventListener("click", showNumber)
}

plusButton.addEventListener("click", operateAndStore)
minusButton.addEventListener("click", operateAndStore)
mulitplyButton.addEventListener("click", operateAndStore)
divideButton.addEventListener("click", operateAndStore)
equalButton.addEventListener("click", cal)
clearButton.addEventListener("click", clear)

//Function of numbers 

function showNumber(e) {
    // console.log(e.target.textContent);
    if (!storedOperator) {
        createResultA.innerHTML = bracketA + e.target.textContent;
        createResultA.style.color = "white";
        before.appendChild(createResultA);
        bracketA += e.target.textContent;
    } else if (storedOperator) {
        before.innerHTML = '';
        after.innerHTML = '';
        createResultB.innerHTML = bracketB + e.target.textContent;
        createResultB.style.color = "white";
        after.appendChild(createResultB);
        bracketB += e.target.textContent;
    }
}


function operateAndStore(e) {
    if (e.target.id === "+") {
        if (after.textContent !== '') {
            storedValueB = after.textContent;
            storedNumberB = parseInt(storedValueB);
            after.innerHTML = '';
            bracketA = '';
            bracketB = '';
            before.innerHTML = operate(storedOperator, storedNumberA, storedNumberB);
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            return storedOperator = "+";
        } else if (after.textContent === '') {
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            return storedOperator = "+";
        }

    } else if (e.target.id === "-") {
        if (after.textContent !== '') {
            storedValueB = after.textContent;
            storedNumberB = parseInt(storedValueB);
            after.innerHTML = '';
            bracketA = '';
            bracketB = '';
            before.innerHTML = operate(storedOperator, storedNumberA, storedNumberB);
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            return storedOperator = "-";
        } else if (after.textContent === '') {
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            bracketA = '';
            return storedOperator = "-";
        }
    } else if (e.target.id === "*") {
        if (after.textContent !== '') {
            storedValueB = after.textContent;
            storedNumberB = parseInt(storedValueB);
            after.innerHTML = '';
            bracketA = '';
            bracketB = '';
            before.innerHTML = operate(storedOperator, storedNumberA, storedNumberB);
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            return storedOperator = "*";
        } else if (after.textContent === '') {
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            bracketA = '';
            return storedOperator = "*";
        }
    } else if (e.target.id === "/") {
        if (after.textContent !== '') {
            storedValueB = after.textContent;
            storedNumberB = parseInt(storedValueB);
            after.innerHTML = '';
            bracketA = '';
            bracketB = '';
            before.innerHTML = operate(storedOperator, storedNumberA, storedNumberB);
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            return storedOperator = "/";
        } else if (after.textContent === '') {
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            bracketA = '';
            return storedOperator = "/";
        }
    }

}

//Function of operaters 

function cal(e) {
    if ((!storedOperator) || (before.innerHTML === "NaN")) {
        alert("Error");

    } else if (storedOperator === "+") {
        storedValueB = after.textContent;
        storedNumberB = parseInt(storedValueB);
        before.innerHTML = operate("+", storedNumberA, storedNumberB);
        storedValueA = after.innerHTML;
        storedNumberA = parseInt(storedValueA);
        storedValueB = '';
        storedNumberB = '';
        bracketA = '';
        bracketB = '';
        after.innerHTML = '';
        return storedOperator = "=";

    } else if (storedOperator === "-") {
        storedValueB = after.textContent;
        storedNumberB = parseInt(storedValueB);
        before.innerHTML = operate("-", storedNumberA, storedNumberB);
        storedValueA = after.innerHTML;
        storedNumberA = parseInt(storedValueA);
        storedValueB = '';
        storedNumberB = '';
        bracketA = '';
        bracketB = '';
        after.innerHTML = '';
        return storedOperator = "=";

    } else if (storedOperator === "*") {
        storedValueB = after.textContent;
        storedNumberB = parseInt(storedValueB);
        before.innerHTML = operate("*", storedNumberA, storedNumberB);
        storedValueA = after.innerHTML;
        storedNumberA = parseInt(storedValueA);
        storedValueB = '';
        storedNumberB = '';
        bracketA = '';
        bracketB = '';
        after.innerHTML = '';
        return storedOperator = "=";

    } else if (storedOperator === "/") {
        storedValueB = after.textContent;
        storedNumberB = parseInt(storedValueB);
        if (storedNumberB === 0) {
            storedValueB = '';
            storedNumberB = '';
            after.innerHTML = '';
            alert("Error! You cannot divide by 0")
            return
        } else if (storedNumberB !== 0) {
            before.innerHTML = Math.round(operate("/", storedNumberA, storedNumberB) * 1000000) / 1000000;
        }
        storedValueA = after.innerHTML;
        storedNumberA = parseInt(storedValueA);
        storedValueB = '';
        storedNumberB = '';
        bracketA = '';
        bracketB = '';
        after.innerHTML = '';
        return storedOperator = "=";

    }

}

function clear() {
    after.innerHTML = "";
    before.innerHTML = "";
    storedValueA = '';
    storedValueB = '';
    storedNumberA = '';
    storedNumberB = '';
    bracketA = '';
    bracketB = '';
    storedOperator = '';
}

//Function of calculation 

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiple(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// operate function

function operate(operater, num1, num2) {
    if (operater === "+") {
        return add(num1, num2)
    } else if (operater === "-") {
        return subtract(num1, num2)
    } else if (operater === "*") {
        return multiple(num1, num2)
    } else if (operater === "/") {
        return divide(num1, num2)
    }

}

// it's the keydown version
// if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0") {
// const result = document.getElementById("result");
// let createResult = document.createElement("p");
// showResult.innerHTML = `${e.key}`;
// document.getElementById("result").appendChild(showResult); 
// storedValueA += e.key
// return;

// } else if (e.key === "-") {
//     const result = document.getElementById("result");
//     let showResult = document.createElement("p");
//     showResult.innerHTML = `${e.key}`;
//     document.getElementById("result").appendChild(showResult); 
//     storedOperator += e.key;
//     return;

// } else if (e.key !== "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0") {
//     return;
// }