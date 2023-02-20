const generatedPasswordElem = document.querySelector(".generated-password");
const sliderElem = document.querySelector("#myRange");
const sliderOutputElem = document.querySelector("#slider-output");
const copyButtonElem = document.querySelector("#copy-btn");
sliderElem.oninput = function () {
  sliderOutputElem.innerHTML = this.value;
};

copyButtonElem.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(generatedPasswordElem.innerHTML);
    console.log("Content copied to clipboard");
  } catch (err) {
    console("Failed to copy: ", err);
  }
});

// const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
// const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*"];

// const passwordLength = parseInt(
//   window.prompt("How many characters would you like in your password?")
// );
// const lowerCase = window.confirm("Would you like to include lowecase letters?");
// const upperCase = window.confirm(
//   "Would you like to include uppercase letters?"
// );
// const specialChar = window.confirm(
//   "Would you like to include special char letters?"
// );
// const symbols = window.confirm("Would you like to include symbols?");
// const numbers = window.confirm("Would you like numbers?");

// const password = generatePassword(
//   passwordLength,
//   lowerCase,
//   upperCase,
//   numbers,
//   symbols
// );

// generatedPasswordElem.innerHTML = `${password}`;
