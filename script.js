const numbers='1234567890'
const symbols='~!@#$%^&*_+'
const lowercaseletters='azxcvbnmkljshgdfqwertyuiop'
const uppercaseletters='AZXCVBNMLKSJHGDFQWERTYUIOP'
let newpassword=''
let password=''


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  let passwordlength =prompt('how long do you need your password')
  if(passwordlength<8||passwordlength>128){
    alert('password must be great than 8 and less than 128')
    return null
    
  }
  const wantnum=confirm('would you like numbers')
  const wantsym=confirm('would you like symbols')
  const wantuppercase=confirm('would you like uppercase')
  const wantlowercase=confirm('would you like lowercase')
  if(wantnum===true){
    newpassword += numbers
  }
  if(wantsym===true){
    newpassword+=symbols
  }

  if(wantuppercase===true){
    newpassword +=uppercaseletters
  }

  if(wantlowercase===true){
    newpassword +=lowercaseletters
  }
  if(!wantnum && !wantsym && !wantuppercase && !wantlowercase){
    alert('you must select atleast one choice')
    return null
  }
  for(let i=0;i<passwordlength;i++){
    let chosenpassword=Math.floor(Math.random()* newpassword.length)
    password +=newpassword.charAt(chosenpassword)
   
  console.log(chosenpassword)
  
  }
  return password
  console.log('this is a message to sandeep!!!!!',passwordlength,wantnum,wantsym,wantuppercase,wantlowercase,
  newpassword)
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);