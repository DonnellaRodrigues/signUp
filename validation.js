const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const rpwd = document.getElementById('rpwd');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidName = element => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(element));
}

const isValidPwd = pwd => {
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!&])[A-Za-z\d@#$!&]{6,}$/;
    return re.test(String(pwd));
}

const isValidPhone = phone => {
    const re = /^(?:\+?[1-9]\d{10,12}$|^[1-9]\d{9,9}$)/;
    return re.test(phone);
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const rpwdValue = rpwd.value.trim();

    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    }else if (!isValidName(fnameValue)) {
        setError(fname, 'Name should contain only alphabets');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    }else if (!isValidName(lnameValue)) {
        setError(lname, 'Name should contain only alphabets');
    }else {
        setSuccess(lname);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    }else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Provide a valid phone number');
    }else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(pwdValue === '') {
        setError(pwd, 'Password is required');
    } else if (!isValidPwd(pwdValue)) {
        setError(pwd,'Password must be atleast 6 characters long and contain atleast one alphabet,one number,one char among @#$&!');
    } else {
        setSuccess(pwd);
    }

    if(rpwdValue === '') {
        setError(rpwd, 'Please confirm your password');
    } else if (rpwdValue !== pwdValue) {
        setError(rpwd,"Passwords don't match");
    } else {
        setSuccess(rpwd);
    }

    if
    (document.querySelectorAll('.success'). length === 6) { 
    form.submit(); }



};
