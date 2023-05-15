// prompt the user to enter a number
let number = parseInt(prompt("Enter a number:"));

// display the multiplication table of the number in the browser
document.write(`Multiplication table of ${number}:<br>`);
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  document.write(`${number} x ${i} = ${result}<br>`);
}
