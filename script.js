// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Ask questions

characterSet=(function() {
  let number = null
  while ( number == null ) {
      let value = prompt( "How many characters in password? 8-128" )
      if ( isNaN( value ) ) {
          alert( "Invalid input." )
      } else if(value<8) {
        alert( "Invalid input." )
      } else if(value>128) {
        alert( "Invalid input." )
      } else {
          number = parseInt( value )
      }
  }
  return number;
})();

var upperChoice = confirm("Would you like upper case?")
var lowerChoice = confirm("Would you like lower case?")
var numberChoice = confirm("Would you like numbers?")
var figureChoice = confirm("Would you like symbols?")

var value = []

if(upperChoice === true){
  value.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
}

if(lowerChoice === true){
  value.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
}

if(numberChoice === true){
  value.push("0","1","2","3","4","5","6","7","8","9")
}

if(figureChoice === true){
  value.push("~","!","@","#","$","%","^","&","*","+")
}

function generatePassword(){
  var password = "";
  for(var i = 0; i < characterSet; i++){
    var randomIndex = Math.floor(Math.random()*value.length);
    var password = password + value[randomIndex];
    console.log(randomIndex)
  }
  return password;
  
 }
  
  var passwordSet = generatePassword();
  var passwordText = document.querySelector("#password");

   passwordText.value = passwordSet;

}
 
 

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);