// Assignment code here
var passwordLength;

var lowerCaseInput;
var upperCaseInput;
var numericCharInput;
var specialCharInput;


//declaring arrays of character options
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var numeric = ['0123456789'];
var specialChar= ['!@#$%^&*()_+'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
