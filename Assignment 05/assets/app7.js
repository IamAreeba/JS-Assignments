// Store the prices and quantities of the items
let item1Price = 1000;
let item2Price = 2000;
let item1Quantity = 2;
let item2Quantity = 1;
let shippingCharges = 500;

// Calculate the total cost of the items
let subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);

// Calculate the total cost including shipping charges
let total = subtotal + shippingCharges;

// Display the receipt in the browser
document.write(`<h1>Order Receipt</h1>`);
document.write(`<p>Price of Item 1: ${item1Price}</p>`);
document.write(`<p>Quantity of Item 1: ${item1Quantity}</p>`);
document.write(`<p>Price of Item 2: ${item2Price}</p>`);
document.write(`<p>Quantity of Item 2: ${item2Quantity}</p>`);
document.write(`<p>Shipping Charges: ${shippingCharges}</p>`);
document.write(`<hr>`);
document.write(`<p>Subtotal: ${subtotal}</p>`);
document.write(`<p>Total Cost (including shipping charges): ${total}</p>`);
