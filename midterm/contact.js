function validateForm(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var validFirstname=false;
    var errorMessages="";
    //2) create variables to read the values from html text inputs
    var firstname=document.getElementById("fname").value;
    //3) do the validation
    if (firstname==="null" ||firstname==="" ||firstname.length > 20)
    errorMessages += "First name is required and may not exceed 20 characters";
    else
    validFirstname = true;

    //4) send error messages 
    document.getElementById("errorMessages").innerHTML= errorMessages;

    //5) return the status of each field
    return (validFirstname);
    }