let contador = 0;
let audio = document.getElementById("music");
let nyanCat;

const gif = document.getElementById("gif");

// Función para reproducir la música
function playMusic() {
    // Reproducir música solo si no está en reproducción
    if (audio.paused) {
        audio.play().catch((error) => {
            console.log("Error al intentar reproducir música:", error);
        });
    }
}

// Función para detener la música
function stopMusic() {
    audio.pause();
    audio.currentTime = 0; // Reiniciar la música al principio
}

// Evento 'touchstart' y 'mousedown' (cuando el usuario toca o hace clic en el gif)
gif.addEventListener("mousedown", () => {
    playMusic(); // Reproducir la música

    // Aumentar el contador
    contador++;
    document.getElementById("contador").textContent = contador;

    // Crear el gif de Nyan Cat
    nyanCat = document.createElement("img");
    nyanCat.src = "tu-gif.gif"; // Cambia por tu propio GIF
    nyanCat.classList.add("nyanCat");

    // Posición aleatoria desde la izquierda
    const randomTop = Math.random() * 100; // Generar una posición vertical aleatoria
    nyanCat.style.top = `${randomTop}%`; // Asignar la posición aleatoria
    
    // Añadir el gif de Nyan Cat al fondo de la pantalla
    document.body.appendChild(nyanCat);
    
    // Animar el gif
    setTimeout(() => {
        nyanCat.classList.add("moveNyan");
    }, 50);
});

// Evento 'mouseup' (cuando el usuario suelta el gif)
gif.addEventListener("mouseup", () => {
    stopMusic(); // Detener la música

    // Eliminar el gif de Nyan Cat después de la animación
    setTimeout(() => {
        nyanCat.remove();
    }, 5000); // Tiempo igual al de la animación
});

// Evento 'touchstart' y 'touchend' (para dispositivos móviles)
gif.addEventListener("touchstart", () => {
    playMusic(); // Reproducir la música

    // Aumentar el contador
    contador++;
    document.getElementById("contador").textContent = contador;

    // Crear el gif de Nyan Cat
    nyanCat = document.createElement("img");
    nyanCat.src = "tu-gif.gif"; // Cambia por tu propio GIF
    nyanCat.classList.add("nyanCat");

    // Posición aleatoria desde la izquierda
    const randomTop = Math.random() * 100; // Generar una posición vertical aleatoria
    nyanCat.style.top = `${randomTop}%`; // Asignar la posición aleatoria
    
    // Añadir el gif de Nyan Cat al fondo de la pantalla
    document.body.appendChild(nyanCat);
    
    // Animar el gif 
    setTimeout(() => {
        nyanCat.classList.add("moveNyan");
    }, 50);
});

gif.addEventListener("touchend", () => {
    stopMusic(); // Detener la música

    // Eliminar el gif de Nyan Cat después de la animación
    setTimeout(() => {
        nyanCat.remove();
    }, 5000); // Tiempo igual al de la animación
});