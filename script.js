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
    return 'Please type a number between 8 and 128'
  } else {
    if (confirm('Would you like to include lowercase letters?')) {
      all += lowercase;
    }
    if (confirm('Would you like to include uppercase letters?')) {
      all += uppercase;
    }
    if (confirm('Would you like to include numbers?')) {
      all += numeric;
    }
    if (confirm('Would you like to include special characters?')) {
      all += special;
    }
  }
  
  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * all.length);
    genPassword += all[Math.floor(Math.random() * all.length)];
  }
  // Generates the password
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
