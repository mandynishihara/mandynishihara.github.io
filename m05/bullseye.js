var table = Number(prompt('Choose a number between 0 and 10'));             // Unit of table
var operator = prompt('Choose 'addition' or 'multiplication');  // Type of calculation
var i = 0;                 // Set counter to 1
var msg = '';              // Message

if (operator === 'addition') {
  // Do addition
  while (i < 10) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 10) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

userInput = prompt('Enter a number between 0 and 10'); 
if (userInput != '' && userInput != null) 
{ // the user enter a value } else{// the user hits the Cancel button}