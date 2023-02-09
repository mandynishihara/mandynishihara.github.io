var table=prompt('Enter a number');
console.log(table);

var operator=prompt('Enter addition or multiplication');
console.log(operator);

var i = 1;                 // Set counter to 1
var msg = '';              // Message


generatetable(table,operator)
function generatetable(base,operator){

// Type of calculation


if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;}