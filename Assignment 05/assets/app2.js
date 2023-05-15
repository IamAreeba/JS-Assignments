
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");


num1 = Number(num1);
num2 = Number(num2);

// perform arithmetic operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

// display the results in the browser
document.write(`The sum of ${num1} and ${num2} is ${sum}.<br>`);
document.write(`The difference of ${num1} and ${num2} is ${difference}.<br>`);
document.write(`The product of ${num1} and ${num2} is ${product}.<br>`);
document.write(`The quotient of ${num1} and ${num2} is ${quotient}.<br>`);
document.write(`The remainder of ${num1} divided by ${num2} is ${remainder}.<br>`);
