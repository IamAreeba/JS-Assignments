let signalColor = prompt("Enter color of road traffic signal:");
let message;

switch(signalColor.toLowerCase()) {
  case "red":
    message = "Must Stop";
    break;
  case "yellow":
    message = "Ready to move";
    break;
  case "green":
    message = "Move now";
    break;
  default:
    message = "Invalid input";
}

document.write("<table>");
document.write("<tr><th>Signal color</th><th>Message</th></tr>");
document.write("<tr><td>" + signalColor + "</td><td>" + message + "</td></tr>");
document.write("</table>");
