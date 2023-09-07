/////////  tamrin 1

function calculator(
  a: number = 0,
  b: number = 0,
  operator: string = "+"
): number | string {
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

function textToUpperCase(text: string): string {
  return text.toUpperCase();
}

console.log(textToUpperCase("maryam dehghani"));

/////////////  tamrin 3

function avrage(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number | string {
  const sum = a + b + c + d + e;
  const miyangin = sum / 5;
  if (miyangin < 12) {
    return miyangin + " is less than 12";
  }
  return miyangin;
}

console.log(avrage(11, 12, 13, 14, 15));
