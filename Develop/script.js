// function to ask user for types of characters in password (password options)
function getPasswordOptions() {
  // variable to contain password length from user input
  var length = parseInt(
    prompt('How many characters should your password contain?');
  )

  // conditional to check if length is a number
  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }

  // conditional to check if password length is at least 8 char long. Prompts end if false.

  if (length < 8) {
    alert('Your password must be at least 8 characters')l
    return null;
  }

  // conditional to check if password length is < 128 characters. Prompts end if false.

  if (length > 128) {
    alert('Password must be less than 128 characters')
    return null;
  }

  // var to store boolean value - should password have special characters?

  var hasSpecialCharacters = confirm(
    'Click OK to include special characters'
  );

  // var to store boolean value - should password have numbers?

  var hasNumericCharacters = confirm(
    'Click OK to include numeric characters'
  )

  // var to store boolean value - should password have lowercase letters?

  var hasLowerCasedCharacters = confirm(
    'Click OK to include lowercase letters'
  )

  // var to store boolean value - should password have uppercase letters?

  var hasUpperCasedCharacters = confirm(
    'Click OK to include uppercase letters'
  )

    //  conditional to check if the user didn't choose to include any types of characters - if all are false the function ends

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('You must select a minimum of one character type');
    return null;
  }












  // end of getPasswordOptions function
}









// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  //Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // check if options object exists, if not exit the function
  if (!options) return null;

  // conditional statement that add array of special characters into array of possible characters based on user input
  // push new random specialcharacter to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // conditional statement that adds array of numeric characters into array of possible character based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));

  }

  // conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // conditional statement that adds array of uppercase characters into array of possible characters based on user input

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // line 209 in Slavic's code... NEED MORE CODE HERE...



// end of generate password function
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







// // Function for getting a random element from an array - from SLAVIC

// function getRandom(arr) {
//   var randIndex = Math.floor(Math.random() * arr.length);
//   var randElement = arr[randIndex];

//   return randElement;}