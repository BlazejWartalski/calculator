let display = document.querySelector('.screen');

let displayNumber = "";
let a = null;
let b = "";
display.innerHTML = displayNumber;


function printNumber(e) {
    displayNumber = e.target.innerHTML;
    previous = display.innerHTML;

    if (display.innerHTML.includes(".") && displayNumber.includes(".")){
        return;
    }
    display.innerHTML = previous+displayNumber;
}
const btns = document.querySelectorAll('.number');
for (var i = 0 ; i < btns.length; i++) {
    btns[i].addEventListener('click',printNumber ) ; 
}

const equalBtn = document.querySelector('.equalbtn')
equalBtn.addEventListener('click', calculate) ;

const backspaceBtn = document.querySelector('.backspace')
backspaceBtn.addEventListener('click', backspace) ;

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clear) ;

function backspace(){
    display.innerHTML = display.innerHTML.slice(0, -1);
};

function clear(){
    display.innerHTML = "";
    a = "";
    b= "";
};

function add (a, b) {
    return a + b;
};
  
function subtract(a, b) {
    return a - b;
};
  
function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};
  
const power = function(a,b) {
    const power = a ** b;
    return power
};

function operate(e) {
    operant = (e.target.innerHTML);
    a = (display.innerHTML);
    display.innerHTML = '';
}

function calculate() {
    if (a != null) {
        b = (display.innerHTML);
        c = parseInt(a + operant + b);
    }
    if (operant == '-') {
        display.innerHTML = Math.round((a - b)* 1000)/1000;
        a = b;
    }
    if (operant == '+') {
        console.log(+a + +b);
        display.innerHTML = Math.round((+a + +b)* 1000)/1000;
        a = b;
    }
    if (operant == '*') {
        display.innerHTML = Math.round((a * b)* 1000)/1000;
        a = b;
    }
    if (operant == '/') {
        if (b == 0) {
            alert("can't divide by 0")
            console.log(a);
            console.log(b);
            return
        }
        display.innerHTML = Math.round((a / b) * 1000)/1000;
        a = b;
    }
};
// const operate = function(operate, a, b) {
//     if (operate == "add") {
//         console.log("fuckj")
//         return add(a, b);
//     }
//     if (operate == "subtract") {
//         console.log(subtract (a,b));
//         return subtract(a, b);
//     }
//     if (operate == "multiply") {
//         return multiply(a,b);
//     }
//     if (operate == "divide") {
//         return divide(a,b);
//     }
// }

const operants = document.querySelectorAll('.operator');
for (var i = 0 ; i < operants.length; i++) {
    operants[i].addEventListener('click',operate ) ; 
};

//   const factorial = function(n) {
//       if (n === 0) return 1;
//     let product = 1;
//     for (let i = n; i > 0; i--) {
//       product *= i;
//     }
//     return product;
//   };


// PLAN
// Numbers in display 
// When press any operators, save the current display as a number in string
// Clear the display
// Enter more numbers
// On equal sign press, return the equation result in the display.
//