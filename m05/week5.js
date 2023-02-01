var today = new Date();
var hourNow = today.getHours();
var greeting;

var message = (first + " " + last);
var first;
var last;

alert("Welcome User!");
prompt("What is your first name", "first");
console.log(first);

prompt("What is your last name", "last");
console.log(last);



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