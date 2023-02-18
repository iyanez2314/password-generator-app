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
