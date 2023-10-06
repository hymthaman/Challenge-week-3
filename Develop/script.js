// Password Generator
// Determine Variables Needed
let password = ''
// Determine included Characters
  let passwordInclusions = '';
  const lengthPassword = passwordLength()
  // Define Character Sets
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789'
  const specialCharacters = '~`!@#$%^&*+<?/;:(=)|{';
  // Ask to include characters 
  confirm('Include Lower Case Characters?');
  confirm('Include Upper Case Characters?');
  confirm('Include Numbers?');
  confirm('Include Special Characters?');
    password = generatePassword(lengthPassword,);
  // Validate Selections
  if (confirmLower) {
    passwordInclusions += lowerCase;
  }
  if (confirmUpper) {
    passwordInclusions += upperCase;
  }
  if (confirmNumber) {
    passwordInclusions += numbers;
  }
  if (confirmSpecial) {
    passwordInclusions += specialCharacters;
  }
  return passwordInclusions;
  
// Function to generate the length of the password
var passwordLength = function () {
  let lengthPassword;
  do {
    // Prompt for password length
    lengthPassword = prompt('Enter Desired Length of New Password. Must Be Between 8 and 128 Characters Long.')
    if (lengthPassword < 8 || lengthPassword > 128 || lengthPassword === '') {
      alert('Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long.')
    } else {
      lengthPassword = Math.floor(Number(lengthPassword));
    }
  } while (lengthPassword < 8 || lengthPassword > 128 || lengthPassword === '');

  return lengthPassword;
}
// Function to generate the password
var generatePassword = function (length, characterSet) {
  let password = ''
  for (let i = 0; i < length; i++); {
    const randomIndex = Math.floor(Math.random() * characterSet.length)
    password += characterSet.charAt(randomIndex);
  }
  return password;
const generateBtn = window.document.querySelector('#generate');
}
// Write password to the HTML input
        alert("Your generated password is:\n" + password);
             else {
                alert("Password length must be between 8 and 128 characters.");
            }   
  generatePassword()
  const passwordText = document.querySelector.push('#password');
  passwordText.value = password;
generateBtn.addEventListener('click', writePassword);
