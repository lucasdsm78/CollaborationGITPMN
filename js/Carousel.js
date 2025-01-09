const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

// Fonction pour mettre à jour le carousel
function updateCarousel() {
    const offset = -currentIndex * 1195; // largeur de la propriété
    carousel.style.transform = `translateX(${offset}px)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Gérer les clics pour naviguer à gauche/droite
document.addEventListener('click', (event) => {
    if (event.clientX < window.innerWidth / 2) {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    } else {
        currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : indicators.length - 1;
    }
    updateCarousel();
});

// Gérer le clic sur les indicateurs
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Gérer le glissement (swipe)
carousel.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    isDragging = true;
});

carousel.addEventListener('mouseup', (event) => {
    if (!isDragging) return;
    const endX = event.clientX;
    handleSwipe(startX, endX);
    isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false; // Réinitialiser si la souris quitte l'élément
});

carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
});

carousel.addEventListener('touchend', (event) => {
    if (!isDragging) return;
    const endX = event.changedTouches[0].clientX;
    handleSwipe(startX, endX);
    isDragging = false;
});

// Fonction pour gérer le glissement
function handleSwipe(start, end) {
    const threshold = 50; // seuil pour considérer un glissement
    if (start - end > threshold) {
        currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : indicators.length - 1;
    } else if (end - start > threshold) {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    }
    updateCarousel();
}
