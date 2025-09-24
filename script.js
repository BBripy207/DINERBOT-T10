let currentSlideIndex = 1;
const totalSlides = 4;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > totalSlides) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = totalSlides; }

    // Ocultar todas las slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index + 1 === currentSlideIndex) {
            slide.classList.add('active');
        } else if (index + 1 < currentSlideIndex) {
            slide.classList.add('prev');
        }
    });

    // Actualizar dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index + 1 === currentSlideIndex) {
            dot.classList.add('active');
        }
    });

    // Actualizar indicadores
    updateSlideIndicators();
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

function updateSlideIndicators() {
    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, index) => {
        indicator.textContent = String(index + 1).padStart(2, '0');
    });
}

// Navegación con teclado
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'Backspace':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            currentSlide(1);
            break;
        case 'End':
            e.preventDefault();
            currentSlide(totalSlides);
            break;
        default:
            // Números 1-4 para ir a slide específico
            if (e.key >= '1' && e.key <= '4') {
                e.preventDefault();
                currentSlide(parseInt(e.key));
            }
            break;
    }
});

// Navegación con gestos táctiles
let startX = null;
let startY = null;

document.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function (e) {
    if (!startX || !startY) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = startX - endX;
    const diffY = startY - endY;

    // Solo procesar si el movimiento horizontal es mayor que el vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) > 50) { // Mínimo 50px de movimiento
            if (diffX > 0) {
                nextSlide(); // Swipe left (siguiente)
            } else {
                prevSlide(); // Swipe right (anterior)
            }
        }
    }

    startX = null;
    startY = null;
});

// Auto-play opcional (descomentado para activar)
// let autoPlayInterval;

// function startAutoPlay(interval = 10000) {
//     autoPlayInterval = setInterval(() => {
//         nextSlide();
//     }, interval);
// }

// function stopAutoPlay() {
//     if (autoPlayInterval) {
//         clearInterval(autoPlayInterval);
//         autoPlayInterval = null;
//     }
// }

// Pausar auto-play cuando el usuario interactúa
// document.addEventListener('click', stopAutoPlay);
// document.addEventListener('keydown', stopAutoPlay);
// document.addEventListener('touchstart', stopAutoPlay);

// Efectos de animación adicionales
function addSlideAnimations() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide, index) => {
        const elements = slide.querySelectorAll('.content > *');

        slide.addEventListener('transitionend', function () {
            if (slide.classList.contains('active')) {
                elements.forEach((el, elIndex) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, elIndex * 200);
                });
            } else {
                elements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                });
            }
        });
    });
}

// Inicializar la presentación
document.addEventListener('DOMContentLoaded', function () {
    showSlide(1);
    addSlideAnimations();

    // Opcional: iniciar auto-play
    // startAutoPlay();

    // Mostrar controles de ayuda al inicio
    setTimeout(() => {
        console.log('Controles de navegación:');
        console.log('- Flechas izquierda/derecha: Navegar slides');
        console.log('- Espacio/Enter: Siguiente slide');
        console.log('- Números 1-4: Ir a slide específico');
        console.log('- Home: Primera slide');
        console.log('- End: Última slide');
        console.log('- Swipe en móvil: Navegar slides');
    }, 1000);
});

// Funciones de utilidad
function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        currentSlide(slideNumber);
        return true;
    }
    return false;
}

function getCurrentSlide() {
    return currentSlideIndex;
}

function getTotalSlides() {
    return totalSlides;
}

// Exportar funciones para uso externo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        nextSlide,
        prevSlide,
        currentSlide,
        goToSlide,
        getCurrentSlide,
        getTotalSlides
    };
}