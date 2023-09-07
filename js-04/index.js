"use strict";
////////////////// tamrin 1
function changeToFahrenheit(Celsius) {
    const fahrenheit = Celsius * 1.8 + 32;
    return fahrenheit;
}
console.log(changeToFahrenheit(10));
/////////////// tamrin 2
function findWord(word) {
    let text = "Mr. Blue has a blue house";
    let position = text.includes(word);
    if (position) {
        return word + " is exist";
    }
    else {
        return word + " is not exist!!";
    }
}
console.log(findWord("blue"));
const product = {
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
