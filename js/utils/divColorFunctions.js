const rootStyles = getComputedStyle(document.documentElement);
const redColor = rootStyles.getPropertyValue("--Red");
const orangeColor = rootStyles.getPropertyValue("--Orange");
const yellowColor = rootStyles.getPropertyValue("--Yellow");
const greenColor = rootStyles.getPropertyValue("--Neon-green");
const strengthMetterElemnts = document.querySelectorAll(".strength-meters");
const passwordStrengthElem = document.querySelector("#password-strength");

function passwordStrengthText(value) {
  if (value <= 3) {
    passwordStrengthElem.innerHTML = "TOO WEAK!";
  }
  if (value >= 5) {
    passwordStrengthElem.innerHTML = "WEAK";
  }
  if (value >= 7) {
    passwordStrengthElem.innerHTML = "MEDIUM";
  }
  if (value > 7) {
    passwordStrengthElem.innerHTML = "STRONG";
  }
}

function divColor(value) {
  if (value <= 3) {
    strengthMetterElemnts[0].style["background-color"] = redColor;
  }
  if (value >= 5) {
    strengthMetterElemnts[0].style["background-color"] = orangeColor;
    strengthMetterElemnts[1].style["background-color"] = orangeColor;
  }

  if (value >= 7) {
    strengthMetterElemnts[0].style["background-color"] = yellowColor;
    strengthMetterElemnts[1].style["background-color"] = yellowColor;
    strengthMetterElemnts[2].style["background-color"] = yellowColor;
  }

  if (value > 7) {
    strengthMetterElemnts[0].style["background-color"] = greenColor;
    strengthMetterElemnts[1].style["background-color"] = greenColor;
    strengthMetterElemnts[2].style["background-color"] = greenColor;
    strengthMetterElemnts[3].style["background-color"] = greenColor;
  }
}
