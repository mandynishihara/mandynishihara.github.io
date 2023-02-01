var today = new Date();
var hourNow = today.getHours();
var greeting;

alert('Welcome User!')
var message;
var firstname = prompt('What is your first name?'); var lastname= prompt('What is your last name?'); alert (firstname + '' +lastname);



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