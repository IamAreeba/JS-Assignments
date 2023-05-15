let fuel = parseFloat(prompt("Enter remaining fuel in liters:"));

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("Fuel level is good. You can continue driving.");
}
