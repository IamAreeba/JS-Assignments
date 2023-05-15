// Store correct password in a variable
const correctPassword = "myPassword123";

// Ask user to enter password
const userPassword = prompt("Enter your password: ");

// Validate the two passwords
if (userPassword === "") {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}
