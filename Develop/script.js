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



// determining password length
function lengthOption() {
  passwordLength =
      window.prompt("How many characters would you like?");
      passwordLength = Number(passwordLength);
      console.log(passwordLength);
        if (passwordLength >= 8 && passwordLength <= 128) {
          alert(" Your password will be " +passwordLength+ " characters.");
    
        }
        
        else { (passwordLength < Number(8) || passwordLength > Number(128)) 
          alert("Choose a value between 8 and 128.");
          lengthOption();
        }
      }





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
