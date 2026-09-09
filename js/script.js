document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. ELEMENTOS DEL DOM
    // ==========================================
    const starsContainer = document.getElementById('stars-container');
    const wishForm = document.getElementById('wish-form');
    const successMessage = document.getElementById('success-message');
    const downloadBtn = document.getElementById('download-btn');
    
    // Elementos del secreto (Animación del corazón)
    const secretOverlay = document.getElementById('secret-overlay');
    const closeSecretBtn = document.getElementById('close-secret-btn');
    const heartCanvas = document.getElementById('heartCanvas');
    let heartCtx;
    if (heartCanvas) {
        heartCtx = heartCanvas.getContext('2d');
    }
    let animationId;

    // Elementos del Video de YouTube
    const videoOverlay = document.getElementById('video-overlay');
    const closeVideoBtn = document.getElementById('close-video-btn');
    const youtubeVideo = document.getElementById('youtube-video');

    // ==========================================
    // 2. EFECTOS VISUALES (FONDO Y CURSOR)
    // ==========================================
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

    function spawnFloatingWords() {
        const words = ["te amo", "mai y nyo"];
        
        setInterval(() => {
            const wordEl = document.createElement('div');
            wordEl.classList.add('floating-word');
            
            wordEl.innerText = words[Math.floor(Math.random() * words.length)];
            
            const x = Math.random() * 90; 
            const y = Math.random() * 90;
            const rotation = (Math.random() * 30) - 15; 
            const fontSize = Math.random() * 1.5 + 1.2; 
            const duration = Math.random() * 4 + 4; 
            
            wordEl.style.setProperty('--rot', `${rotation}deg`);
            wordEl.style.left = `${x}vw`;
            wordEl.style.top = `${y}vh`;
            wordEl.style.fontSize = `${fontSize}rem`;
            wordEl.style.animationDuration = `${duration}s`;
            
            starsContainer.appendChild(wordEl);
            
            setTimeout(() => {
                wordEl.remove();
            }, duration * 1000);
        }, 3000);
    }

    createSparkles(100);
    spawnFloatingWords();

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

    // ==========================================
    // 3. ENVÍO DEL FORMULARIO
    // ==========================================
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

    // ==========================================
    // 4. LÓGICA DEL BOTÓN SECRETO (3 OPCIONES)
    // ==========================================
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const prob = Math.random();

            if (prob < 0.33) {
                // OPCIÓN 1 (33% PROBABILIDAD): GENERAR Y DESCARGAR CARTA EN CANVAS
                const canvas = document.createElement('canvas');
                canvas.width = 800;
                canvas.height = 800; 
                const ctx = canvas.getContext('2d');

                // Fondo oscuro-morado
                const gradient = ctx.createRadialGradient(400, 400, 0, 400, 400, 600);
                gradient.addColorStop(0, '#1a0b2e');
                gradient.addColorStop(1, '#0a0410');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Destellos/estrellas estáticas
                ctx.fillStyle = '#f9e287';
                for(let i = 0; i < 70; i++) {
                    const cx = Math.random() * canvas.width;
                    const cy = Math.random() * canvas.height;
                    const r = Math.random() * 2.5;
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Bordes decorativos
                ctx.strokeStyle = 'rgba(224, 176, 255, 0.4)';
                ctx.lineWidth = 4;
                ctx.strokeRect(40, 40, 720, 720);
                
                ctx.strokeStyle = 'rgba(249, 226, 135, 0.6)';
                ctx.lineWidth = 1;
                ctx.strokeRect(30, 30, 740, 740);

                // Textos
                ctx.textAlign = 'center';
                ctx.font = 'bold 36px "Segoe UI", sans-serif';
                ctx.fillStyle = '#f9e287';
                ctx.fillText('Feliz 9° Aniversario', 400, 140);

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

                ctx.font = 'bold 24px "Segoe UI", sans-serif';
                ctx.fillStyle = '#e0b0ff';
                ctx.fillText('- Con todo mi amor -', 400, 730);

                // Descarga
                const dataURL = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = 'Feliz_9_Aniversario.png';
                link.href = dataURL;
                link.click();

            } else if (prob < 0.66) {
                // OPCIÓN 2 (33% PROBABILIDAD): MOSTRAR ANIMACIÓN DEL CORAZÓN
                if(secretOverlay) {
                    secretOverlay.classList.remove('hidden');
                    setTimeout(() => {
                        secretOverlay.classList.add('active');
                        startHeartAnimation();
                    }, 50);
                }
                
            } else {
                // OPCIÓN 3 (34% PROBABILIDAD): MOSTRAR VIDEO DE YOUTUBE
                if (videoOverlay) {
                    youtubeVideo.src = "https://www.youtube.com/embed/_pCT5HPzCfk?autoplay=1";
                    
                    videoOverlay.classList.remove('hidden');
                    setTimeout(() => {
                        videoOverlay.classList.add('active');
                    }, 50);
                }
            }
        });
    }

    // ==========================================
    // 5. CERRAR PANTALLAS SUPERPUESTAS
    // ==========================================
    
    // Cerrar Corazón
    if (closeSecretBtn) {
        closeSecretBtn.addEventListener('click', () => {
            if (secretOverlay) {
                secretOverlay.classList.remove('active');
                setTimeout(() => {
                    secretOverlay.classList.add('hidden');
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                    }
                    if (heartCtx && heartCanvas) {
                        heartCtx.setTransform(1, 0, 0, 1, 0, 0); 
                        heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
                    }
                }, 800);
            }
        });
    }

    // Cerrar Video
    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', () => {
            if (videoOverlay) {
                videoOverlay.classList.remove('active');
                setTimeout(() => {
                    videoOverlay.classList.add('hidden');
                    youtubeVideo.src = ""; // Apaga el video
                }, 800);
            }
        });
    }

    // ==========================================
    // 6. FUNCIÓN ANIMACIÓN DEL CORAZÓN
    // ==========================================
    function startHeartAnimation() {
        if (!heartCanvas || !heartCtx) return;

        heartCanvas.width = window.innerWidth;
        heartCanvas.height = window.innerHeight;
        
        heartCtx.setTransform(1, 0, 0, 1, 0, 0); 
        heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
        
        heartCtx.translate(heartCanvas.width / 2, heartCanvas.height / 2);
        
        const baseWidth = 1100; 
        const zoom = (window.innerWidth * 0.95) / baseWidth; 
        
        heartCtx.scale(zoom, zoom); 

        heartCtx.fillStyle = '#ffb6c1';
        heartCtx.font = 'bold 12px Arial'; 
        heartCtx.textAlign = 'center';
        heartCtx.textBaseline = 'middle';

        let scale = 22; 
        const maxScale = 35;
        let i = 0;
        const maxI = 140; 

        function drawHeart() {
            if (scale >= maxScale) return; 

            const angle = i * (Math.PI * 2 / maxI);
            
            const x = 16 * Math.pow(Math.sin(angle), 3) * scale;
            const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) * scale;

            heartCtx.fillText('I love you', x, y);

            i++;
            if (i >= maxI) {
                i = 0;
                scale++;
            }
            
            animationId = requestAnimationFrame(drawHeart);
        }
        
        drawHeart();
    }
});