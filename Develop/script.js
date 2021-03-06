// function to ask user for types of characters in password (password options)
function getPasswordOptions() {
  // variable to contain password length from user input
  var length = parseInt(
    prompt('How many characters should your password contain?')
  );

  // conditional to check if length is a number
  if (typeof(length) !== 'number') {
    alert('Password length must be a number');
    return null;
  }

  // conditional to check if password length is at least 8 char long. Prompts end if false.

  if (length < 8) {
    alert('Your password must be at least 8 characters')
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

  // array object that will store the user's character selections - stores a boolean value from the confirm windows

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };


  // returns the array with boolean password options to the function call getPasswordOptions()

  return passwordOptions;

  // end of getPasswordOptions function
}




function getRandom(array){
  // based on the array length, return a random char from the array

  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];

}








// Function to generate password with user input
function generatePassword() {

// arrays with characters

    const specialCharacters = [
      "!",
      "#",
      "$",
      "%",
      "&",
      "'",
      ")",
      "(",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      ">",
      "?",
      "@",
      "]",
      "[",
      "^",
      "_",
      "|",
      "{",
      "}"
    ]


    const numericCharacters = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0"
    ]
    const upperCasedCharacters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ]
    const lowerCasedCharacters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ]



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
  }

  // conditional statement that adds array of numeric characters into array of possible character based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);

  }

  // conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  // conditional statement that adds array of uppercase characters into array of possible characters based on user input

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  
  // use the length of the password to determine how many times getRandom will be called.
  
  // for loop that iterates over the length value that user chose - passing possibleCharacters as a parameter into the getRandom function returning a random character

  for (let i = 0; i < options.length ; i++){

    guaranteedCharacters.push(getRandom(possibleCharacters));

  }

return guaranteedCharacters.join('');
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

