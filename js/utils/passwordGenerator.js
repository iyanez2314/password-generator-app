/**
 *
 * @param {*} length The length of the password being passed in
 * @param {*} state the state of the options
 * @returns the password combination
 */

function generatePassword(length, state) {
  let characters = "";
  if (state.lowercase) {
    characters += lowercaseLetters.join("");
  }
  if (state.uppercase) {
    characters += uppercaseLetters.join("");
  }
  if (state.numbers) {
    characters += NUMBERS.join("");
  }
  if (state.symbols) {
    characters += SYMBOLS.join("");
  }
  if (characters.length === 0) {
    throw new Error(
      "Invalid options: Please include at least one type of characters"
    );
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
