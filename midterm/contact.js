function validateForm(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var validFirstname=false;
    var validLastname=false;
    var validPhone=false;
    var errorMessages="";
    //2) create variables to read the values from html text inputs
    var firstname=document.getElementById("fname").value;
    var lastname= document.getElementById("lname").value;
    var phone=document.getElementById("phone").value;
    //3) do the validation
    if ( !/^[a-zA-Z]+$/.test (firstname) ||firstname==="null" ||firstname==="" ||firstname.length > 20)
    errorMessages += "First name is required and may contain only letters and not exceed 20 characters";
    else
        validFirstname = true;

    if(!/^[a-zA-Z]+$/.test (lastname) ||lastname==="null" || lastname===""|| lastname.length > 50)
    errorMessages += "<br>Last name is required and may contain only letters and may not exceed 50 character";
    else
        validLastname= true;

    if (/^[a-zA-Z]+$/.test (phone) ||phone==="null" ||phone==="" ||phone.length > 15)
    errorMessages += "<br>Phone number is required and should be less than 15 characters";
    else
    validPhone = true;

    //4) send error messages 
    document.getElementById("errorMessages").innerHTML= errorMessages;

    //5) return the status of each field
    return (validFirstname && validLastname && validPhone);
    }