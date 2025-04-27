document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
    } else {
        alert('Sign up successful!');
        // Redirect to front_page.html after successful sign-up
        window.location.href = 'front_page.html';
    }
});
