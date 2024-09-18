// Select form by id
const loginForm = document.querySelector('#login-form');

// Handle form submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect login data
    const loginData = new FormData(event.target);
    console.log(
        loginData.get('username'),
        loginData.get('email'),
        loginData.get('password')
    );
    // save user information
    // send confirmation email
    // display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Welcome to your profile!';
});

