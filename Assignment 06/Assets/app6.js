// Take subject names and obtained marks from user
const subject1 = prompt("Enter name of first subject:");
const subject2 = prompt("Enter name of second subject:");
const subject3 = prompt("Enter name of third subject:");
const totalMarks = 100;
const marks1 = parseFloat(prompt(`Enter obtained marks for ${subject1}:`));
const marks2 = parseFloat(prompt(`Enter obtained marks for ${subject2}:`));
const marks3 = parseFloat(prompt(`Enter obtained marks for ${subject3}:`));

// Calculate total marks and percentage
const totalObtainedMarks = marks1 + marks2 + marks3;
const percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Create table and display result in browser
const table = 
<table>
  <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
  </tr>
  <tr>
    <td>${subject1}</td>
    <td>${totalMarks}</td>
    <td>${marks1}</td>
    <td>${((marks1 / totalMarks) * 100).toFixed(0)}%</td>
  </tr>
  <tr>
    <td>${subject2}</td>
    <td>${totalMarks}</td>
    <td>${marks2}</td>
    <td>${((marks2 / totalMarks) * 100).toFixed(0)}%</td>
  </tr>
  <tr>
    <td>${subject3}</td>
    <td>${totalMarks}</td>
    <td>${marks3}</td>
    <td>${((marks3 / totalMarks) * 100).toFixed(0)}%</td>
  </tr>
  <tr>
    <td></td>
    <td>${totalMarks * 3}</td>
    <td>${totalObtainedMarks}</td>
    <td>${percentage.toFixed(0)}%</td>
  </tr>
</table>
document.write(table);
