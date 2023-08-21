const firstNumber = +prompt("please enter first number");
const operator = prompt("please enter operator");
const secondNumber = +prompt("please enter second number");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("error :first number or second number is wrong");
}

switch (operator) {
  case "+":
    console.log(firstNumber + secondNumber);
    break;

  case "-":
    console.log(firstNumber - secondNumber);
    break;

  case "*":
    console.log(firstNumber * secondNumber);
    break;

  case "/":
    console.log(firstNumber / secondNumber);
    break;

  default:
    console.log("error");
    break;
}
