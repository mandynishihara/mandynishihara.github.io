var today = new Date();
var hourNow = today.getHours();
var greeting;

var message = (firstname + " " + lastname);
var firstname;
var lastname;

alert("Welcome User!");
prompt("What is your first name", "first name");
console.log(first name);

prompt("What is your last name", "last name");
console.log(last name);



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