function add (a, b) {
    return a + b;
};
  
function subtract(a, b) {
    return a - b;
};
  
//   const sum = function(array) {
//       const sum = array.reduce((a, b) => a + b, 0);
//     return sum
//   };
  
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
console.log(subtract(1,3))
const operate = function(operate, a, b) {
    if (operate == "add") {
        console.log("fuckj")
        return add(a, b);
    }
    if (operate == "subtract") {
        console.log(subtract (a,b));
        return subtract(a, b);
    }
    if (operate == "multiply") {
        return multiply(a,b);
    }
    if (operate == "divide") {
        return divide(a,b);
    }
}

//   const factorial = function(n) {
//       if (n === 0) return 1;
//     let product = 1;
//     for (let i = n; i > 0; i--) {
//       product *= i;
//     }
//     return product;
//   };