"use strict";
/////////  tamrin 1
function calculator(a = 0, b = 0, operator = "+") {
    if (!isNaN(a + b)) {
        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return operator + " is wrong";
        }
    }
    return a + "or" + b + "is wrong";
}
console.log(calculator(5, 8, "*"));
/////////////  tamrin 2
function textToUpperCase(text) {
    return text.toUpperCase();
}
console.log(textToUpperCase("maryam dehghani"));
/////////////  tamrin 3
function avrage(a, b, c, d, e) {
    const sum = a + b + c + d + e;
    const miyangin = sum / 5;
    if (miyangin < 12) {
        return miyangin + " is less than 12";
    }
    return miyangin;
}
console.log(avrage(11, 12, 13, 14, 15));
