////////////////// tamrin 1

function changeToFahrenheit(Celsius: number): number {
  const fahrenheit = Celsius * 1.8 + 32;
  return fahrenheit;
}

console.log(changeToFahrenheit(10));

/////////////// tamrin 2

function findWord(word: string): string {
  let text = "Mr. Blue has a blue house";
  let position = text.includes(word);
  if (position) {
    return word + " is exist";
  } else {
    return word + " is not exist!!";
  }
}

console.log(findWord("blue"));

//////////////////// tamrin 3

type productType = {
  name: string;
  color: string;
  price: number;
  quality: boolean;
  size: number;
  addToBasket: object;
  removeFromBasket: object;
};

const product: productType = {
  name: "shoes",
  color: "red",
  price: 399000,
  quality: true,
  size: 38,
  addToBasket: function () {
    console.log("added!");
  },
  removeFromBasket: function () {
    console.log("removed!");
  },
};
