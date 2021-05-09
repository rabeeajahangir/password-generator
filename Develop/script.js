// Assignment code here

// assigning global variables
var passwordLength;
var lowerCaseInput;
var upperCaseInput;
var numericCharInput;
var specialCharInput;

var characterString = "";
var newPassword = "";

//variables for character options
var lowerCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var upperCase = ['abcdefghijklmnopqrstuvwxyz'];
var numbers = ['0123456789'];
var specialChar = ['!@#$%^&*()_+'];

// variable to fill in the new password with user preferences
var newPasswordCharacters = [];


 //empty array to add characters according to user preference
 function reset() {
  var newPasswordCharacters = [];
  var newPassword = "";
  var characterString = "";
   }
  

// determining password length
function lengthOptions() {
  passwordLength = prompt("How many characters would you like?");
      passwordLength = Number(passwordLength);
      console.log(passwordLength);
        if (passwordLength >= 8 && passwordLength <= 128) {
          alert(" Your password will be " +passwordLength+ " characters.");
    charOptions();
        }
        
        else { (passwordLength < 8 || passwordLength > 128 || characterLength === "null" || characterLength === " ")  
          alert("Choose a value between 8 and 128.");
          lengthOptions();
        }
      }


// function to determine which characters to use
function charOptions() {

  //option to use lowercase characters
  lowerCaseInput =
      confirm("Would you like to include lowercase characters?");
  
    if (lowerCaseInput) {
      alert("Okay, include lowercase characters.");
      console.log("Yes, include lowercase");
  
    } else {
      (!lowerCaseInput)
      alert("Okay, don't include lowercase characters.");
    };
  

    //option to use uppercase characters
    upperCaseInput =
      confirm("Would you like to include uppercase characters?")
  
    if (upperCaseInput) {
      alert("Okay, include uppercase characters.");
      console.log("Yes, include uppercase");
    } else {
      (!upperCaseInput)
      alert("Okay, don't include uppercase characters.");
    };
  
    // option to use special characters
    specialCharInput =
      confirm("Would you like to include special characters?")
  
    if (specialCharInput) {
      alert("Okay, include special characters.");
      console.log("Yes, include special characters");
    } else {
      (!specialCharInput)
      alert("Okay, don't include special characters.");
    };
  
    //choose to include numbers
    numbers =
      confirm("Would you like to include numbers?")
  
    if (numbers) {
      alert("Okay, include numbers.");
      console.log("Yes, include numbers");
    } else {
      (!numbers)
      alert("Okay, don't include numbers.");
    }
    if (lowerCaseInput === false && upperCaseInput === false && specialCharInput === false && numbers === false) {
      alert("Choose atleast one criteria to generate a password!");
      charOptions();
    }
  };


// inserting values to arrays according to user preference
function generatePassword() {
  if (lowerCaseInput === true) {
    //add lowercase to array
    newPasswordCharacters.push(lowerCase);
}

  if (upperCaseInput === true) {
    //add uppercase to array
    newPasswordCharacters.push(upperCase);
}

  if (specialCharInput === true) {
    //add special characters to array
    newPasswordCharacters.push(specialChar);
}

  if (numbers === true) {
    //add numbers to array
    newPasswordCharacters.push(numbers);
}


 // loop to choose characters with passwordLength
 for (var i = 0; i < passwordLength; i ++) {
  newPassword = newPassword.concat(characterString[Math.floor(Math.random() * characterString.length)]);  
}
console.log(newPassword);
}

//Provided code//
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  reset();
  lengthOptions();
  generatePassword();
  var newPasswordText = document.querySelector("#password");
  newPasswordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);