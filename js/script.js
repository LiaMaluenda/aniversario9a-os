document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
    const wishForm = document.getElementById('wish-form');
    const successMessage = document.getElementById('success-message');

    // Generación de destellos iridiscentes en el fondo
    function createSparkles(count) {
        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 5;

            sparkle.style.left = `${x}vw`;
            sparkle.style.top = `${y}vh`;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.animationDuration = `${duration}s`;
            sparkle.style.animationDelay = `${delay}s`;

            starsContainer.appendChild(sparkle);
        }
    }

    createSparkles(100);

    // Interacción del cursor
    document.addEventListener('mousemove', (e) => {
        if(Math.random() > 0.9) { 
            const cursorSparkle = document.createElement('div');
            cursorSparkle.classList.add('sparkle');
            cursorSparkle.style.left = `${e.pageX}px`;
            cursorSparkle.style.top = `${e.pageY}px`;
            cursorSparkle.style.width = '4px';
            cursorSparkle.style.height = '4px';
            cursorSparkle.style.animation = 'twinkle 1s linear forwards';
            
            starsContainer.appendChild(cursorSparkle);
            
            setTimeout(() => {
                cursorSparkle.remove();
            }, 1000);
        }
    });

    // Envío del formulario al Google Form provisto
    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLScI0ab7unbIteUeiMpv07GCeFC8EsL1LFUfpwriIOeFxf1ZTA/formResponse'; 
        const formData = new FormData(wishForm);

        fetch(formURL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).then(() => {
            wishForm.style.opacity = '0';
            setTimeout(() => {
                wishForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }, 400);
        }).catch((error) => {
            console.error('Error al enviar el deseo:', error);
            alert('Hubo un error al enviar el deseo, por favor intenta de nuevo.');
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
    const wishForm = document.getElementById('wish-form');
    const successMessage = document.getElementById('success-message');
    const downloadBtn = document.getElementById('download-btn'); // NUEVO

    // Generación de destellos iridiscentes en el fondo
    function createSparkles(count) {
        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 5;

            sparkle.style.left = `${x}vw`;
            sparkle.style.top = `${y}vh`;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.animationDuration = `${duration}s`;
            sparkle.style.animationDelay = `${delay}s`;

            starsContainer.appendChild(sparkle);
        }
    }

    createSparkles(100);
// NUEVO: Generación de palabras "te amo" y "mai y nyo" flotantes
    function spawnFloatingWords() {
        const words = ["te amo", "mai y nyo"];
        
        setInterval(() => {
            const wordEl = document.createElement('div');
            wordEl.classList.add('floating-word');
            
            wordEl.innerText = words[Math.floor(Math.random() * words.length)];
            
            // Posición aleatoria (evitando un poco los bordes extremos)
            const x = Math.random() * 90; 
            const y = Math.random() * 90;
            
            // Rotación leve para darle un aspecto natural
            const rotation = (Math.random() * 30) - 15; 
            wordEl.style.setProperty('--rot', `${rotation}deg`);
            
            const fontSize = Math.random() * 1.5 + 1.2; 
            const duration = Math.random() * 4 + 4; 
            
            wordEl.style.left = `${x}vw`;
            wordEl.style.top = `${y}vh`;
            wordEl.style.fontSize = `${fontSize}rem`;
            wordEl.style.animationDuration = `${duration}s`;
            
            starsContainer.appendChild(wordEl);
            
            setTimeout(() => {
                wordEl.remove();
            }, duration * 1000);
        }, 3000); // Aparece una palabra nueva cada 3 segundos
    }

    spawnFloatingWords();



    // Interacción del cursor
    document.addEventListener('mousemove', (e) => {
        if(Math.random() > 0.9) { 
            const cursorSparkle = document.createElement('div');
            cursorSparkle.classList.add('sparkle');
            cursorSparkle.style.left = `${e.pageX}px`;
            cursorSparkle.style.top = `${e.pageY}px`;
            cursorSparkle.style.width = '4px';
            cursorSparkle.style.height = '4px';
            cursorSparkle.style.animation = 'twinkle 1s linear forwards';
            
            starsContainer.appendChild(cursorSparkle);
            
            setTimeout(() => {
                cursorSparkle.remove();
            }, 1000);
        }
    });

    // Envío del formulario al Google Form provisto
    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLScI0ab7unbIteUeiMpv07GCeFC8EsL1LFUfpwriIOeFxf1ZTA/formResponse'; 
        const formData = new FormData(wishForm);

        fetch(formURL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).then(() => {
            wishForm.style.opacity = '0';
            setTimeout(() => {
                wishForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }, 400);
        }).catch((error) => {
            console.error('Error al enviar el deseo:', error);
            alert('Hubo un error al enviar el deseo, por favor intenta de nuevo.');
        });
    });

    // NUEVO: Lógica para generar la carta como imagen (PNG) y descargarla
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Ampliamos el canvas a 800x800 para que quepa todo el texto
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 800; 
            const ctx = canvas.getContext('2d');

            // 1. Dibujar el fondo oscuro-morado (ajustado al nuevo centro)
            const gradient = ctx.createRadialGradient(400, 400, 0, 400, 400, 600);
            gradient.addColorStop(0, '#1a0b2e');
            gradient.addColorStop(1, '#0a0410');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 2. Dibujar destellos/estrellas estáticas
            ctx.fillStyle = '#f9e287';
            for(let i = 0; i < 70; i++) {
                const cx = Math.random() * canvas.width;
                const cy = Math.random() * canvas.height;
                const r = Math.random() * 2.5;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
            }

            // 3. Dibujar bordes interiores decorativos (ajustados al nuevo alto)
            ctx.strokeStyle = 'rgba(224, 176, 255, 0.4)';
            ctx.lineWidth = 4;
            ctx.strokeRect(40, 40, 720, 720);
            
            ctx.strokeStyle = 'rgba(249, 226, 135, 0.6)';
            ctx.lineWidth = 1;
            ctx.strokeRect(30, 30, 740, 740);

            // 4. Configurar y dibujar los textos
            ctx.textAlign = 'center';
            
            // Título
            ctx.font = 'bold 36px "Segoe UI", sans-serif';
            ctx.fillStyle = '#f9e287';
            ctx.fillText('Feliz 9° Aniversario', 400, 140);

            // Mensaje (Coordenadas Y ajustadas progresivamente con 35px de separación)
            ctx.font = 'italic 26px "Segoe UI", sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('9 años compartiendo la misma órbita.', 400, 220);
            ctx.fillText('9 años de pareja, pero más de 13', 400, 275);
            ctx.fillText('conociéndonos y haciendo cada día más', 400, 310);
            ctx.fillText('especial que el anterior. Está en mi', 400, 345);
            ctx.fillText('fortuna tenerla en la vida, y espero que', 400, 380);
            ctx.fillText('dure para toda la eternidad. Que el', 400, 415);
            ctx.fillText('universo sea testigo de lo mucho que la', 400, 450);
            ctx.fillText('amo.', 400, 485);
            
            ctx.fillText('Cada deseo que pida será escuchado por', 400, 540);
            ctx.fillText('las estrellas, que en su infinito poder,', 400, 575);
            ctx.fillText('se apiadarán de nuestros corazones.', 400, 610);
            
            ctx.fillText('Te amo (´▽`ʃ♡ƪ)', 400, 660);

            // Firma
            ctx.font = 'bold 24px "Segoe UI", sans-serif';
            ctx.fillStyle = '#e0b0ff';
            ctx.fillText('- Con todo mi amor -', 400, 730);

            // 5. Descargar la imagen
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'Feliz_9_Aniversario.png';
            link.href = dataURL;
            link.click();
        });
    }
});
