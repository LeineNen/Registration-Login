// Select form by id
const registerForm = document.querySelector('#register-form');
// console.log(registerForm);
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // save user information
    // send confirmation email
    // display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account registered successfully!';
});

// age variable
const age = 44;
// square of age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}

const squaredAge = squareAge(45);
// console.log(squaredAge);


// function to get full name
function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;

}

const myFullName = fullName('Mary', 'Mag')
// console.log(myFullName);