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