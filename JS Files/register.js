document.querySelector('button[type="submit"]').addEventListener('click', async (event) => {
    event.preventDefault();
    const username = document.querySelector('input[id="username"]').value;
    const email = document.querySelector('input[id="email"]').value;
    const password = document.querySelector('input[id="password"]').value;

    console.log(`Registering: ${username}, ${email}`);

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
        alert('Registration successful!');
        // Redirect to login page or perform other actions
    } else {
        alert('Registration failed: ' + result.message);
    }
});

// Add show/hide password functionality
const passwordField = document.querySelector('input[id="password"]');
const eyeIcon = document.querySelector('#eye-icon path');
eyeIcon.addEventListener("click", () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.setAttribute('fill', '#333');
    } else {
        passwordField.type = 'password';
        eyeIcon.setAttribute('fill', '#aaa');
    }
});
