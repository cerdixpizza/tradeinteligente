const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const body = document.body;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        window.location.href = "main.html"; // Redirige si el login es exitoso
    } else {
        errorMessage.style.display = 'block';
        body.classList.add('invalid');
        setTimeout(() => {
            body.classList.remove('invalid');
            errorMessage.style.display = 'none';
        }, 2000); // Oculta el mensaje después de 2 segundos
    }
});
