// Take input integers from user
const num1 = parseInt(prompt("Enter first integer: "));
const num2 = parseInt(prompt("Enter second integer: "));

// Compare the two integers and display the larger one
if (num1 > num2) {
  console.log(`${num1} is larger.`);
} else if (num2 > num1) {
  console.log(`${num2} is larger.`);
} else {
  console.log("Both integers are equal.");
}
