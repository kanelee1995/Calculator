const numberButton = document.querySelectorAll("[data-key]");
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
let old = '';

for (let i = 0; i < 10; i++) {
    numberButton[i].addEventListener("click", showNumber(i))
}

plusButton.addEventListener("click", operateAndStore("plus"))
minusButton.addEventListener("click", operateAndStore("minus"))
mulitplyButton.addEventListener("click", operateAndStore("mulitply"))
divideButton.addEventListener("click", operateAndStore("divide"))
equalButton.addEventListener("click", cal)
clearButton.addEventListener("click", clear)

//Function of numbers 

function showNumber(i) {
    if (storedOperator !== null) {
        return function() {
                createResultA.innerHTML = old + i;
                createResultA.style.color = "white";
                before.appendChild(createResultA);
                old += i;

            }
            // } else if (storedOperator !== null) {
            //     return function() {
            //         alert(hi);
            //     }
    }
    // if there is class valueB, make it store in valueB

}


//Function of operaters 
let storedNumberA;

function operateAndStore(button) {
    if (button === "plus") { //addition
        return function() {
            storedValueA = before.textContent;
            storedNumberA = parseInt(storedValueA);
            return storedOperator = "+";
        };
    }
}

function cal() {
    return operate()
}

function clear() {
    before.innerHTML = "";
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