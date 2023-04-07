// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.number.value;
    var country = document.contactForm.country.value;
    var adults = document.contactForm.adults.value;
    var children = document.contactForm.children.value;

    // let terms=document.contactForm.terms.value;

    var terms=document.getElementById("terms");

    // var gender = document.contactForm.gender.value;
    // var hobbies = [];
    // var checkboxes = document.getElementsByName("hobbies[]");
    // for(var i=0; i < checkboxes.length; i++) {
    //     if(checkboxes[i].checked) {
    //         // Populate hobbies array with selected values
    //         hobbies.push(checkboxes[i].value);
    //     }
    // }
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr =countryErr = termsErr =adultsErr = childrenErr=true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your Room Type");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
//terms
    if(terms.checked) {

        printError("termsErr", "");
        termsErr = false;
        console.log("In if");
    } else {
        printError("termsErr", "Please Agree Terms and Conditions");
        termsErr= true;
        console.log("In else");


        }
        // Validate number of adults
        if(adults == "") {
            printError("adultsErr", "Please enter number of adults");
        } else {
            var regex = /^[0-9]$/;                
            if(regex.test(adults) === false) {
                printError("adultsErr", "Please enter a valid number");
            } else {
                printError("adultsErr", "");
                adultsErr = false;
            }
        }
                // Validate number of children
                if(children == "") {
                    printError("childrenErr", "Please  enter number of children");
                } else {
                    var regex = /^[0-9]$/;                
                    if(regex.test(children) === false) {
                        printError("childrenErr", "Please enter a valid number");
                    } else {
                        printError("childrenErr", "");
                        childrenErr = false;
                    }
                }


    
        // // Validate gender
    // if(gender == "") {
    //     printError("genderErr", "Please select your gender");
    // } else {
    //     printError("genderErr", "");
    //     genderErr = false;
    // }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr ||termsErr || adultsErr ||childrenErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " +  + "\n" +
                          "Email Address: " + + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                        //   "Gender: " + gender + "\n";

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
}