const form = document.getElementById("sign-in-form");
const username = document.getElementsByClassName("js-username")[0];
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const mobile = document.getElementById("mobile");

let formSuccess;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    formSuccess = true;

    // Username 
    if (username.value.trim() === '') {
        setError(username, 'Name can not be empty!');
    } else if(username.value.trim().length < 5 || username.value.trim().length > 15) {
        setError(username, 'Needs to be btween 5 and 15 characters');
    } else {
        setSuccess(username);
    }


    // Email
    if (email.value.trim() === '') {
        setError(email, 'Email can not be empty!');
    } else if(isEmailValid(email.value)) {
        setSuccess(email);
    } else {
        setError(email, 'Email address is invalid');
    }


    // Password
    if (password.value.trim() === '') {
        setError(password, 'Password can not be empty!');
    } else if (password.value.trim().length < 6 || password.value.trim().length > 20) {
        setError(password, 'Password  min 6 and max 20 characters');
    } else {
        setSuccess(password);
    }

    // D.O.B
    if (dob.value.trim() == '') {
        setError(dob, 'Date of birth can not be empty');
    } else {
        setSuccess(dob);
    }
    
    // MOBILE
    if (mobile.value.trim() == '') {
    setError(mobile, 'Mobile can not be empty');
    } else {
    setSuccess(mobile);
    }
    if(formSuccess === true) {
        form.submit();
    }


});

// Function error
function setError(element, errorMessage) {
    formSuccess = false;
    const parent = element.parentElement;
    element.style.borderColor = 'red';
    
    const paragraph = parent.getElementsByClassName('error-message')[0];
    paragraph.innerHTML = errorMessage;
    
    const errorIcon = parent.getElementsByClassName('failure-icon')[0];
    errorIcon.style.visibility = "visible";

    const successIcon = parent.getElementsByClassName('success-icon')[0];
    successIcon.style.visibility = "hidden";
}

// function success
function setSuccess(element) {
    const parent = element.parentElement;
    element.style.borderColor = 'grey';
    
    const paragraph = parent.getElementsByClassName('error-message')[0];
    paragraph.innerHTML = '';

    const errorIcon = parent.getElementsByClassName('failure-icon')[0];
    errorIcon.style.visibility = "hidden";

    const successIcon = parent.getElementsByClassName('success-icon')[0];
    successIcon.style.visibility = "visible";


}


// email pattern
function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

