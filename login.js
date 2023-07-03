document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        window.location.href = 'perfil.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
