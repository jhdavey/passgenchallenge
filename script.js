//Create random Array to build during prompts
var RandomArray = [""];
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    passwordGen();
    generateBtn.hidden = true;
  });

//Prompt user to input parameters for password, starting with length between 8-128 characters
function passwordGen() {
var length = window.prompt("Please answer the following questions to generate your password.\nInput the desired length of your password.\nMust be at least 8 and no more than 128 characters.");
//Check if input exists, if not send user back to select length, otherwise, check if length is between 8-128 characters
  if (length < 8 || length > 128) {
      window.prompt("Your password must be between 8 and 128 characters. Please try again.");
    passwordGen();
  }

//ask user if lowercase characters are accepted
  var lowercase = window.prompt("Would you like to include lowercase character?\nEnter Y or N.");
//change user input to uppercase y, n for comparison
  lowercase = lowercase.toUpperCase();
//If entry is not y, or n
  if (lowercase != "Y" && lowercase != "N") {
    window.prompt("Invalid entry. Please try again.");
    passwordGen();
//If Y, Create array of lowercase characters to include
  } else if (lowercase === "Y") {
    var acceptedLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
//add lowercase characters to randomArray
    var RandomArray = acceptedLowercase;
    }

//Ask user if uppercase is accepted
  var uppercase = window.prompt("Would you like to include uppercase character?\nEnter Y or N.");
//change user input to uppercase y, n for comparison
  uppercase = uppercase.toUpperCase();
//If entry is not y, or n
  if (uppercase != "Y" && uppercase != "N") {
    window.prompt("Invalid entry. Please try again.");
    passwordGen();
//Create array of uppercase characters to include
  } else if (uppercase === "Y") {
    var acceptedUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
//add uppercase characters to randomArray
    for (var i of acceptedUppercase) {
      RandomArray.push(i);
    }
  }

//Ask user if numbers are accepted
  var numbers = window.prompt("Would you like to include numbers in your password?\nEnter Y or N.");
//change user input to uppercase y, n for comparison
  numbers = numbers.toUpperCase();
//If entry is not y, or n
  if (numbers != "Y" && numbers != "N") {
  window.prompt("Invalid entry. Please try again.");
  passwordGen();
  }
//Create array of numbers to include
    else if (numbers === "Y") {
    var acceptedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //add numbers to randomArray
    for (var i of acceptedNumbers) {
      RandomArray.push(i);
    }
  }

//ask user if special characters are accepted
  var specialChar = window.prompt("Would you like to include special characters in your password?\nEnter Y or N.");
//change user input to uppercase y, n for comparison
  specialChar = specialChar.toUpperCase();
//If entry is not y, or n
  if (specialChar != "Y" && specialChar != "N") {
  window.prompt("Invalid entry. Please try again.");
  passwordGen();
  }
//Create array of special characters to include
    else if (specialChar === "Y") {
    var acceptedSpecialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "_", "~"];
    //add special characters to randomArray
    for (var i of acceptedSpecialChar) {
      RandomArray.push(i);
    }
  }

//User must select at least one character type
  if (lowercase === "N" && uppercase === "N" && numbers === "N" && specialChar === "N") {
    window.prompt("You must select at least one character type to include for your password. Please retry.");
    passwordGen();
  } else {
//Generate password for length given
    var randomChars = '';
    for (let i = 0; i < length; i++) {
      randomChars += RandomArray[Math.floor(Math.random() * RandomArray.length)];
      var password = randomChars;
    }
  // Write password to the #password input
  function writePassword() {
    document.getElementById("password").innerHTML = password;
  }
  writePassword();
  }
}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
//   generateBtn.addEventListener("click", writePassword);