var a = 2, b = 1;
var a1 = --a;
var b1 = --b;
var b2 = ++b;
var b3 = b--;
var result = a1 - b1 + b2 + b3;
document.write("--a is " + (a1));
document.write("<br>--a - --b is " + (a1 - b1));
document.write("<br>--a - --b + ++b is " + (a1 - b1 + b2));
document.write("<br>--a - --b + ++b + b-- is " + result);