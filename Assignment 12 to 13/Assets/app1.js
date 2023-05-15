// take input character from the user
let char = prompt("Enter a character: ");

// get ASCII code of the character
let ascii = char.charCodeAt(0);

// check if the character is a number
if (ascii >= 48 && ascii <= 57) {
  console.log(char + " is a number.");
}
// check if the character is an uppercase letter
else if (ascii >= 65 && ascii <= 90) {
  console.log(char + " is an uppercase letter.");
}
// check if the character is a lowercase letter
else if (ascii >= 97 && ascii <= 122) {
  console.log(char + " is a lowercase letter.");
}
// if the input is not a number or letter, display an error message
else {
  console.log("Invalid input.");
}
