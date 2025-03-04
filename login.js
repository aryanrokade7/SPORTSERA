document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === 'aryan' && password === '24') {
        alert('Login successful!');
        error.textContent = '';
    } else {
        error.textContent = 'Invalid username or password';
    }
    if (username === 'mandar' && password === '30') {
        alert('Login successful!');
        error.textContent = '';
    } else {
        error.textContent = 'Invalid username or password';
    }
    if (username === 'vedant' && password === '26') {
        alert('Login successful!');
        error.textContent = '';
    } else {
        error.textContent = 'Invalid username or password';
    }
    if (username === 'ankush' && password === '42') {
        alert('Login successful!');
        error.textContent = '';
    } else {
        error.textContent = 'Invalid username or password';
    }
});
