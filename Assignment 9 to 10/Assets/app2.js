let gender = prompt("Please enter your gender:");

if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Invalid input. Please enter either 'male' or 'female'.");
}
