// Take input character from user
const char = prompt("Enter a character: ");

// Check if character is a vowel
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
  console.log(`${char} is a vowel.`);
} else {
  console.log(`${char} is not a vowel.`);
}
