alert("Welcome User!");

var firstName;
prompt("What is your first name");
console.log(firstName);

var lastName;
prompt("What is your last name");
console.log(lastName);


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

var message=
(firstName + "" + lastName);
document.write('<h3>' + message + '</h3>');
