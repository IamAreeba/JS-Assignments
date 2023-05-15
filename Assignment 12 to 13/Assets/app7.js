let time = prompt("Enter time:");
if(time>=0000 && time<1200){
    alert("Good Morning!");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good Evening!");
}
else{
    alert("Good Night!");
}