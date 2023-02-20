const rootStyles = getComputedStyle(document.documentElement);
const redColor = rootStyles.getPropertyValue("--Red");
const orangeColor = rootStyles.getPropertyValue("--Orange");
const yellowColor = rootStyles.getPropertyValue("--Yellow");
const greenColor = rootStyles.getPropertyValue("--Neon-green");
const strengthMetterElemnts = document.querySelectorAll(".strength-meters");
const passwordStrengthElem = document.querySelector("#password-strength");

/**
 *
 * @param {*} value Takes in the password value and will display the specifed text
 */
function passwordStrengthText(value) {
  if (value <= 3) {
    divColor(1);
    passwordStrengthElem.innerHTML = "TOO WEAK!";
  }
  if (value >= 5) {
    divColor(2);
    passwordStrengthElem.innerHTML = "WEAK";
  }
  if (value >= 7) {
    divColor(3);
    passwordStrengthElem.innerHTML = "MEDIUM";
  }
  if (value > 7) {
    divColor(4);
    passwordStrengthElem.innerHTML = "STRONG";
  }
}

/**
 *THIS CAN BE DONE BETTER WITH A LOOP AND I WILL DO IT EVENTUALLY
 * @param {*} value The value it is getting in as argument will depend on the color of the divs
 */
function divColor(value) {
  if (value === 1) {
    strengthMetterElemnts[0].style["background-color"] = redColor;
    strengthMetterElemnts[1].style["background-color"] = "transparent";
    strengthMetterElemnts[2].style["background-color"] = "transparent";
    strengthMetterElemnts[3].style["background-color"] = "transparent";
  }
  if (value === 2) {
    strengthMetterElemnts[0].style["background-color"] = orangeColor;
    strengthMetterElemnts[1].style["background-color"] = orangeColor;
    strengthMetterElemnts[2].style["background-color"] = "transparent";
    strengthMetterElemnts[3].style["background-color"] = "transparent";
  }

  if (value === 3) {
    strengthMetterElemnts[0].style["background-color"] = yellowColor;
    strengthMetterElemnts[1].style["background-color"] = yellowColor;
    strengthMetterElemnts[2].style["background-color"] = yellowColor;
    strengthMetterElemnts[3].style["background-color"] = "transparent";
  }

  if (value === 4) {
    strengthMetterElemnts[0].style["background-color"] = greenColor;
    strengthMetterElemnts[1].style["background-color"] = greenColor;
    strengthMetterElemnts[2].style["background-color"] = greenColor;
    strengthMetterElemnts[3].style["background-color"] = greenColor;
  }
}
