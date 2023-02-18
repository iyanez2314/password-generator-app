// Randomizer for Lower Case Letters
function randomizeLower() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomIndexOfLetter = Math.floor(
      Math.random() * lowercaseLetters.length
    );
    password += lowercaseLetters[randomIndexOfLetter];
  }
  return password;
}

// Randomizer for Upper case Letters
function randomizeUpper() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomIndexOfLetter = Math.floor(
      Math.random() * uppercaseLetters.length
    );
    password += uppercaseLetters[randomIndexOfLetter];
  }
  return password;
}

// Randomizer for numbers
function randomizeSpecialNum() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomIndexOfNum = Math.floor(Math.random() * NUMBERS.length);
    password += NUMBERS[randomIndexOfNum];
  }
  return password;
}

// Randomizer for special Char
function randomizeSpecialChar() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomIndexOfChar = Math.floor(Math.random() * SYMBOLS.length);
    password += SYMBOLS[randomIndexOfChar];
  }
  return password;
}
