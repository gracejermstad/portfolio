    window.addEventListener('load', function() {
        document.querySelectorAll('.slide-in').forEach(function(element) {
            element.classList.add('slide-in');
        });
    });
    // script.js
// script.js
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'grid';
}

// Click event for each individual page
document.querySelectorAll('.carousel-slide img').forEach((img, index) => {
    img.addEventListener('click', () => {
        if (index % 2 === 0) {
            // Clicked on the first image of a pair, go to the previous pair
            showSlide(currentSlide - 2);
        } else {
            // Clicked on the second image of a pair, go to the next pair
            showSlide(currentSlide + 2);
        }
    });
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    showSlide(currentSlide - 2);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    showSlide(currentSlide + 2);
});

// Initial display
showSlide(currentSlide);


                
