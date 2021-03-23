// Assignment Code
// var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", getUserChoice);


// // Write password to the #password input

// var specialCharacters=["+","-","*","/"]
// function getUserChoice() {
    
//     var passwordLength=prompt("How Many Characters Would You Like Your Password To Contain? (Length: 8-128 characters)");
//     if (passwordLength < 8 || passwordLength > 128) {
//         alert("Please Select A Valid Character Amount");
//         return;
//     }
   
//       else if (passwordLength >8 || passwordLength < 128) {
//           var specialCharacters=confirm("Click OK to Confirm Including Special Characters");
//           var numericCharacters=confirm("Click OK to Confirm Including Numeric Characters");
//           var lowerCharacters=confirm("Click OK to Confirm Including Lowercase Characters");
//           var upperCharacters=confirm("Click OK to Confirm Including Uppercase Characters");

//         //alert("Please Select a Character Amount");
//         return;
//       }
//       else {
//        alert("Put valid length");
//        return;
//           }

// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// }

// // Add event listener to generate button
// //generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", getUserInput);

// Write password to the #password input
function getUserInput() {
  var passwordLength = prompt("How Many Characters Would You Like Your Password To Be? (Length: 8-128 characters)");
  if (passwordLength === null) {
    alert("Looks Like You Don't Want A Randomly Generated Password :(")
    return;
  }
  else if (!passwordLength) {
    alert("Please Select a Character Amount")
    return;
  }
  // make sure it is number not string
  else {
    if (!isNaN(passwordLength)) {
      passwordLength = parseInt(passwordLength)
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Please Select A Valid Character Amount")
      }
      else {
        var specialCharacters = confirm("Click OK If You Would Like To Include Special Characters (!@#$%^&*(){}[]+<>/,.?)");
        var upperCharacters = confirm("Click OK If You Would Like Uppercase Characters");
        var lowerCharacters = confirm("Click OK If You Would Like Lowercase Characters");
        var numberCharacters = confirm("Click OK If You Would Like To Include Numbers");

        if (!specialCharacters && !upperCharacters && !lowerCharacters && !numberCharacters) {
          alert("Must Click OK On At Least One Option To Proceed!")
        }
        else {
          generatePassword(passwordLength, specialCharacters, numberCharacters, upperCharacters, lowerCharacters);
          
        }

        
      }
    } else {
      alert("You Did Not Enter a Number. Please Type a Number Between 8 and 128")
      return;
    }
  }

 


}

// function for generating password 
function generatePassword(passwordLength, specialCharacters, numberCharacters, upperCharacters, lowerCharacters) {
  var chosenPassword = "";
  var passwordText = document.querySelector("#password");
  var randomFunction = {};
  var count = 0;

  if (specialCharacters) {
    randomFunction[count] = getSpecial
    count++
  }
  if (numberCharacters) {
    randomFunction[count] = getNumbers
    count++
  }
  if (upperCharacters) {
    randomFunction[count] = getUpper
    count++
  }
  if (lowerCharacters) {
    randomFunction[count] = getLower
    count++
  }

  for (var i = 1; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * count);
    chosenPassword += randomFunction[randomNumber]();
  }

  passwordText.textContent = chosenPassword;
}

// function to filter false confirms


// for loop


// function for specialCharacter 
function getSpecial() {
  var special = '!@#$%^&*(){}[]+<>/,.?';
  return special[Math.floor(Math.random() * special.length)];
}

// function for numberCharacters 
function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function for upperCharacters
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// function for lowerCharacters  
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}