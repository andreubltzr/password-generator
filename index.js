// prettier-ignore
const allCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// prettier-ignore
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// prettier-ignore
const charsAndNums = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// prettier-ignore
const charsAndSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let firstPWEl = document.getElementById("first-pw");
let secondPWEl = document.getElementById("second-pw");

let includeSymbols = document.getElementById("symbols");
let includeNumbers = document.getElementById("numbers");

let errorMsgEl = document.getElementById("error-msg");

function generatePassword() {
  firstPWEl.textContent = "";
  secondPWEl.textContent = "";

  let pwLength = document.getElementById("ageOutputId").value;

  let firstPassword = "";
  let secondPassword = "";

  if (includeSymbols.checked === true && includeNumbers.checked === true) {
    for (let i = 0; i < pwLength; i++) {
      let firstRandomPW = Math.floor(Math.random() * allCharacters.length);
      let secondRandomPW = Math.floor(Math.random() * allCharacters.length);
      firstPassword += allCharacters[firstRandomPW];
      secondPassword += allCharacters[secondRandomPW];
      firstPWEl.textContent = firstPassword;
      secondPWEl.textContent = secondPassword;
      errorMsgEl.textContent = "";
    }
  } else if (
    includeSymbols.checked === true &&
    includeNumbers.checked === false
  ) {
    for (let i = 0; i < pwLength; i++) {
      let firstRandomPW = Math.floor(Math.random() * charsAndSymbols.length);
      let secondRandomPW = Math.floor(Math.random() * charsAndSymbols.length);
      firstPassword += charsAndSymbols[firstRandomPW];
      secondPassword += charsAndSymbols[secondRandomPW];
      firstPWEl.textContent = firstPassword;
      secondPWEl.textContent = secondPassword;
      errorMsgEl.textContent = "";
    }
  } else if (
    includeSymbols.checked === false &&
    includeNumbers.checked === true
  ) {
    for (let i = 0; i < pwLength; i++) {
      let firstRandomPW = Math.floor(Math.random() * charsAndNums.length);
      let secondRandomPW = Math.floor(Math.random() * charsAndNums.length);
      firstPassword += charsAndNums[firstRandomPW];
      secondPassword += charsAndNums[secondRandomPW];
      firstPWEl.textContent = firstPassword;
      secondPWEl.textContent = secondPassword;
      errorMsgEl.textContent = "";
    }
  } else if (
    includeSymbols.checked === false &&
    includeNumbers.checked === false
  ) {
    errorMsgEl.textContent = "Atleast one setting must be selected.";
  }
}

function copyPw1() {
  navigator.clipboard.writeText(firstPWEl.textContent);
  firstPWEl.style.color = "#55f991";
  secondPWEl.style.color = "white";
}

function copyPw2() {
  navigator.clipboard.writeText(secondPWEl.textContent);
  secondPWEl.style.color = "#55f991";
  firstPWEl.style.color = "white";
}
