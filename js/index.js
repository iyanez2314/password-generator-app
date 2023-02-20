const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*"];
const generatedPasswordElem = document.querySelector(".generated-password");
const sliderElem = document.querySelector("#myRange");
const sliderOutputElem = document.querySelector("#slider-output");
const copyButtonElem = document.querySelector("#copy-btn");
const checkboxElements = document.querySelectorAll(".checkbox");
const generateButtonElem = document.querySelector("#generate-btn");
let passowrdLength = sliderElem.value;
/**
 * Will hold state of wether the user wants any of the options for the password
 */
const state = {
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false,
};

/**
 * This function will take in the checkbox we have clicked get the attribute name and then we create a variable that will hold a boolean value if the button is clicked or not.
 * @param {*} checkbox will be the option we chose in the checkbox
 */
function updateState(checkbox) {
  const name = checkbox.getAttribute("name");
  const checked = checkbox.checked;
  state[name] = checked;
}
/**
 * Will Display the value of what ever the slider value is
 */
sliderElem.oninput = function () {
  sliderOutputElem.innerHTML = this.value;
  passowrdLength = this.value;
};

/**
 * on the check box elements we add a event listener that will add the updateState function to it passing in said checkbox element.
 */
checkboxElements.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    updateState(checkbox);
  });
});

/**
 * Will Give us the possibility to copy what ever is generated for the passowrd to the clipboard
 */
async function clipboard() {
  try {
    await navigator.clipboard.writeText(generatedPasswordElem.innerHTML);
    console.log("Content copied to clipboard");
  } catch (err) {
    console("Failed to copy: ", err);
  }
}

/**
 *
 * @param {*} checkboxes takes in a argument of the node list of checkbox arrays
 * @returns the list of the checked items in the array
 */

function getCheckboxes(checkboxes) {
  let checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked.push(checkboxes[i].getAttribute("name"));
    }
  }
  return checked;
}

copyButtonElem.addEventListener("click", clipboard);

generateButtonElem.addEventListener("click", function () {
  const checkedItems = getCheckboxes(checkboxElements);
  if (checkedItems.length === 0) {
    return;
  }
  while (true) {
    try {
      const newPassword = generatePassword(passowrdLength, state);
      generatedPasswordElem.innerHTML = newPassword;
      break;
    } catch (err) {
      console.error(err);
    }
  }
});
