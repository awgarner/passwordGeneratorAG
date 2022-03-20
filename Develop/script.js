// Assignment code here


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