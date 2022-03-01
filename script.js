// Assignment Code


var generateBtn = document.querySelector("#generate");

// variables including all possible characters to choose from, and var all - which ensures all character types are used //
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var special = "!@#$*_";
var all = "";

// determines number of characters to be used based on user's input //
function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  

  
  // Prompts for specific amount of characters and character type //
  if (!count || count < 8 || count > 128) {
    alert('Please choose between 8 and 128 characters.');
  }
  
  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * lowercase.length);
    genPassword += lowercase[random];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
