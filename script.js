document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
    document.getElementById('loginForm').reset();
});

    document.getElementById('womensLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#secondSection .image-container').classList.add('visible');
        // Optionally, scroll to the section smoothly
        document.getElementById('secondSection').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('mensLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#secondSection .image-container').classList.add('visible');
        // Optionally, scroll to the section smoothly
        document.getElementById('secondSection').scrollIntoView({ behavior: 'smooth' });
    });

