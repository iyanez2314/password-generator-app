const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*"];

const passwordLength = parseInt(
  window.prompt("How many characters would you like in your password?")
);
const lowerCase = window.confirm("Would you like to include lowecase letters?");
const upperCase = window.confirm(
  "Would you like to include uppercase letters?"
);
const specialChar = window.confirm(
  "Would you like to include special char letters?"
);
const symbols = window.confirm("Would you like to include symbols?");
const numbers = window.confirm("Would you like numbers?");

const password = generatePassword(
  passwordLength,
  lowerCase,
  upperCase,
  numbers,
  symbols
);

console.log(password);
