alert("Welcome User!");

var first;
prompt("What is your first name");
console.log(first);

var last;
prompt("What is your last name");
console.log(last);


var today = new Date();
var hourNow = today.getHours();
var greeting;



if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var message = (first + ' ' + last);
document.write('<h3>' + message + '/<h3>');
