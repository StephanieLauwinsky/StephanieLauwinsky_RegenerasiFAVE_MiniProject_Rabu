const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('massage');

form.addEventListener('submit', (event) => {
event.preventDefault();
    checkInputs();
    });

function checkInputs() {
// get the values from the inputs
const nameValue = name.value.trim();
const emailValue = email.value.trim();
const messageValue = message.value.trim();

    // check name input
    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank!');
    } else if (nameValue.length < 3) {
        setErrorFor(name, 'Name must be at least 3 characters long!');
    } else {
        setSuccessFor(name);
    }

    // check email input
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid!');
    } else {
        setSuccessFor(email);
    }

    // check message input
    if (messageValue === '') {
        setErrorFor(message, 'Message cannot be blank!');
    } else if (messageValue.split(' ').length < 3) {
        setErrorFor(message, 'Message must contain at least 3 words!');
    } else {
        setSuccessFor(message);
    }

    // if all inputs are valid, submit form
    if (
        name.parentElement.classList.contains('success') &&
        email.parentElement.classList.contains('success') &&
        subject.parentElement.classList.contains('success') &&
        message.parentElement.classList.contains('success')
    ) {
        form.submit();
    }
    }

    function setErrorFor(input, message) {
    const errorLabel = input.parentElement.querySelector('.error');
    input.parentElement.classList.remove('success');
    input.parentElement.classList.add('error');
    errorLabel.innerText = message;
    }

    function setSuccessFor(input) {
    input.parentElement.classList.remove('error');
    input.parentElement.classList.add('success');
    input.parentElement.querySelector('.error').innerText = '';
    }

    function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
