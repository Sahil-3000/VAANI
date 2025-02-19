document.querySelector('button[type="submit"]').addEventListener('click', async (event) => {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        console.log(result);
        if (result.success) {
            window.location.href = result.redirect;
        } else {
            alert('Login failed: ' + result.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
    }
});

// Add show/hide password functionality
const passwordField = document.querySelector('input[type="password"]');
const eyeIcon = document.querySelector('#eye-icon path');
eyeIcon.addEventListener("click",()=>{
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.setAttribute('fill', '#333');
    } else {
        passwordField.type = 'password';
        eyeIcon.setAttribute('fill', '#aaa');
    }
});
