function validateForm(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var validFirstname=false;
    var validLastname=false;
    var validEmail=false;
    var validPhone=false;
    var validUsername=false;
    var validPassword=false;
    var validAddress=false;
    var validCity=false;
    var validZipcode=false;
    var validState=false;
    var validCountry=false;
    var validZipcode=false;
    var errorMessages="";
    //2) create variables to read the values from html text inputs
    var firstname=document.getElementById("fname").value;
    var lastname= document.getElementById("lname").value;
    var userEmail=document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos= userEmail.lastIndexOf(".");
    var phone=document.getElementById("phone").value;
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
    var city=document.getElementById("city").value;
    var address=document.getElementById("adrs").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;
    var code=document.getElementById("zip").value;

    //3) do the validation

//FIRSTNAME VALLIDATION//
if ( !/^[a-zA-Z]+$/.test (firstname) ||firstname==="null" ||firstname==="" ||firstname.length > 20){
errorMessages += "First name is required and may contain only letters and not exceed 20 characters";
    }
else{
validFirstname = true;}

//LASTNAME VALLIDATION//
if(!/^[a-zA-Z]+$/.test (lastname) ||lastname==="null" || lastname===""|| lastname.length > 50){
errorMessages += "<br>Last name is required and may contain only letters and may not exceed 50 character";}
else{
validLastname= true;}

//EMAIL VALLIDATION//
if(atpos < 1 || dotpos<atpos +2 || dotpos+2 >= userEmail.length){
errorMessages += "<br>Invalid email";}
else{
validEmail = true;}

//PHONE VALLIDATION//
if (/^[a-zA-Z]+$/.test (phone) ||phone==="null" ||phone==="" ||phone.length > 15){
errorMessages += "<br>Phone number is required and should be less than 15 characters";}
else{
validPhone = true;}

//USERNAME VALLIDATION//
if(username==="null" || username==="" || username > 12){
errorMessages += "<br> Username is required and may not exceed 12 character";}
else {
validUsername = true;}

//PASSWORD VALLIDATION//
if(password==="null" || password==="" || password > 7 ||!/[a-z]/.test (password) || !/[A-Z]/.test (password) || !/[0-9]/.test (password) || !/[\!\*\$\#\%\.\,\&\?\-\_]/.test(password)) {
errorMessages += "<br> Password is required and may not exceed 7 character (must include 1 lowercase, 1 uppercase, 1 number, and 1 special character)";}
else {
validPassword = true;}


//ADDRESS VALLIDATION//
if(address==="null" || address===""){
errorMessages += "<br> Address field is required";}
else {
validAddress = true;}

//CITY VALLIDATION//
if(city==="null" || city===""){
errorMessages += "<br> City field is required";}
else {
validCity = true;}

//STATE VALLIDATION//
if(state===""){
errorMessages += "<br> State is required";}
else{
validState = true;}

//COUNTRY VALLIDATION//
if(country===""){
errorMessages += "<br> Country is required";}
else{
validCountry = true;}

//ZIPCODE VALLIDATION//
if(country==="USA"){
if(code.length > 5 || code==="" || code==="null"){
    errorMessages += "<br> Zipcode required for USA";}
else{
    validZipcode = true;}}


    //4) send error messages 
    document.getElementById("errorMessages").innerHTML= errorMessages;

    //5) return the status of each field
    return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);
    }