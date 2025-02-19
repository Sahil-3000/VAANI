document.querySelector('button[type="submit"]').addEventListener('click', async (event) => {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const newPassword = document.querySelector('input[name="newPassword"]').value;

    const response = await fetch('/forget-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, newPassword })
    });

    const result = await response.json();
    if (result.success) {
        alert('Password updated successfully!');
        // Redirect to login page or perform other actions
    } else {
        alert('Password update failed: ' + result.message);
    }
});

// Add show/hide password functionality
const passwordField = document.querySelector('input[name="newPassword"]');
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
