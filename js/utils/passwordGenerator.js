/**
 *
 * @param {*} length - The length of the password we need to generate
 * @param {*} includeLower - Boolean value to include lower case characters
 * @param {*} includeUpper - Boolean value to include upper case characters
 * @param {*} includeNumbers - Boolean value to include numbers
 * @param {*} includeSymbols - Boolean value to include symbols
 * @returns the generated password
 */

function generatePassword(
  length,
  includeLower,
  includeUpper,
  includeNumbers,
  includeSymbols
) {
  let password = "";
  let characters = "";

  if (includeLower) {
    characters += randomizeLower();
  }
  if (includeUpper) {
    characters += randomizeUpper();
  }
  if (includeNumbers) {
    characters += randomizeSpecialNum();
  }
  if (includeSymbols) {
    characters += randomizeSpecialChar();
  }

  if (characters.length === 0) {
    throw new Error(
      "Invalid options: Please include at least one type of characters"
    );
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
