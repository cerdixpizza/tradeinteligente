// Matrix Effect
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.matrix').appendChild(canvas);

// Ajustar el tamaño del canvas para cubrir toda la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "0123456789";
const fontSize = 16;  // Tamaño de la fuente
const columns = canvas.width / fontSize;  // Calcular el número de columnas en función del tamaño del canvas
const drops = Array(Math.floor(columns)).fill(1);  // Inicializar las gotas para cada columna

function drawMatrix() {
    // Hacer el fondo negro con transparencia
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";  // Color verde para los caracteres
    ctx.font = `${fontSize}px 'Share Tech Mono'`;

    // Dibujar las gotas
    drops.forEach((y, index) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, index * fontSize, y * fontSize);

        // Si la gota pasa del fondo, la reiniciamos al principio
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;  // Mover la gota hacia abajo
    });
}

// Dibujar la animación cada 50ms
setInterval(drawMatrix, 50);

// Ajustar el tamaño del canvas cuando la ventana se redimensione
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
