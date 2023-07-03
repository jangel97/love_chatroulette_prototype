document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var orientation = document.getElementById('orientation').value;
    
    // Aquí es donde normalmente enviarías los datos al servidor
