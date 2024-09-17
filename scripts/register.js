// Select form by id
const registerForm = document.querySelector('#register-form');
console.log(registerForm);
// Handle form submit event
registerForm.addEventListener('submit', function () {
    // collect username
    // collect email
    // collect password
    // save user information
    // send confirmation email
});

// age variable
const age = 44;
// square of age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}

const squaredAge = squareAge(45);
console.log(squaredAge);