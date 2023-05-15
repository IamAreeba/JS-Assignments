// Take input number from user
const num = parseInt(prompt("Enter a number: "));

// Check if number is positive, negative or zero
if (num > 0) {
  console.log(`${num} is a positive number.`);
} else if (num < 0) {
  console.log(`${num} is a negative number.`);
} else {
  console.log("The number is zero.");
}
