// Simulate Login functionality
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "student" && password === "password") {
        // Redirect to the marketplace after successful login
        window.location.href = "marketplace.html"; // Replace with your marketplace page URL
    } else {
        // Show error message for invalid credentials
        document.getElementById('error-msg').style.display = 'block';
    }
});
