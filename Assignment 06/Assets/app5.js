let number = +prompt("Enter a number:");
if (isNaN(number)) {
  number = 5;
}
document.write("<h2>Table of " + number + "</h2>");
for (let i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
