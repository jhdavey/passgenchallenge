//Create random Array to build during prompts
var RandomArray = [];
var length = 0;
var lowercase = '';
var uppercase = '';
var numbers = '';
var specialChar = '';
var generateBtn = document.querySelector("#generate");
var generatePassword = document.getElementById("password");
var lengthInput = document.getElementById('length-check');
var lowerInput = document.getElementById('lowercase-check');
var upperInput = document.getElementById('uppercase-check');
var numberInput = document.getElementById('number-check');
var specialInput = document.getElementById('special-check');


// Add event listener to generate button
  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //Remove initial rendered password from UI
    generatePassword.innerHTML = "";
    lengthCheck();
    generateBtn.hidden = true;
  });

//Prompt user to input parameters for password, starting with length between 8-128 characters
function lengthCheck() {
  length = lengthInput.value;
//Check if input exists, if not send user back to select length, otherwise, check if length is between 8-128 characters
  if (length < 8 || length > 128) {
      alert("Your password must be between 8 and 128 characters. Please try again.");
  } else {
    lowerCheck();
  }
}

function lowerCheck() {
//ask user if lowercase characters are accepted
  lowercase = lowerInput;
//If entry is not y, or n
  if (lowercase.checked) {
    var acceptedLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
//add lowercase characters to randomArray
    RandomArray = acceptedLowercase;
    upperCheck();
  } else {
    upperCheck();
  }
}

function upperCheck() {
//Ask user if uppercase is accepted
  uppercase = upperInput;
  if (uppercase.checked) {
    var acceptedUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
    //add uppercase characters to randomArray
    RandomArray = RandomArray.concat(acceptedUppercase);
    numberCheck();
  } else {
    numberCheck();
  }
}

function numberCheck() {
//Ask user if numbers are accepted
  numbers = numberInput;
  if (numbers.checked) {
    var acceptedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //add numbers to randomArray
    RandomArray = RandomArray.concat(acceptedNumbers);
    specialCheck();
  } else {
    specialCheck();
  }
}

function specialCheck() {
//ask user if special characters are accepted
  specialChar = specialInput;
if (specialChar.checked) {
    var acceptedSpecialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "_", "~"];
    //add special characters to randomArray
    RandomArray = RandomArray.concat(acceptedSpecialChar);
    lastCheck();
  } else {
    lastCheck();
  }
}

function lastCheck() {
//User must select at least one character type
  if (RandomArray.length === 0) {
    alert("You must select at least one character type to include for your password. Please retry.");
  } else {
    generatePass();
  }
  }

  function generatePass() {
//Generate password for length given
    var randomPass = '';
    for (let i = 0; i < length; i++) {
      randomPass += RandomArray[Math.floor(Math.random() * RandomArray.length)];
    }
      // Write password to the #password input
      generatePassword.innerHTML = randomPass;
    }