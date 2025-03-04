document.getElementById('playerInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordError = document.getElementById('password-error');

    // Check if the passwords match
    if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match';
        passwordError.style.color = 'red';
    } else {
        passwordError.textContent = ''; // Clear error message
        // Redirect to trainingpage.html if the form is valid
        window.location.href = 'trainingpage.html';
    }
});
