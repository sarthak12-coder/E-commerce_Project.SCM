// Existing selectors and setup
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prevBtn2 = document.getElementById('prev2');  // New button for prev 2
const nextBtn2 = document.getElementById('next2');  // New button for next 2
const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;
let slideCount = slides.length;

// Function to clone the first slide at the end for seamless looping
function cloneFirstSlide() {
    const firstSlide = slides[0].cloneNode(true);
    slidesContainer.appendChild(firstSlide);
}

// Show slide based on the current index
function showSlide(index) {
    if (index < 0) {
        currentIndex = slideCount - 1;
    } else if (index >= slideCount) {
        currentIndex = 0;
    }
    
    const offset = -(currentIndex * 100);
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
}

// Go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
}

// Next 2 slides
function next2Slides() {
    // Move 2 slides forward
    currentIndex = (currentIndex + 2) % slideCount;
    showSlide(currentIndex);
}

// Previous 2 slides
function prev2Slides() {
    // Move 2 slides backward
    currentIndex = (currentIndex - 2 + slideCount) % slideCount;
    showSlide(currentIndex);
}

// Event listeners for the main navigation buttons (next/prev)
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Event listeners for the 2-slide navigation buttons (next2/prev2)
nextBtn2.addEventListener('click', next2Slides);
prevBtn2.addEventListener('click', prev2Slides);

// Auto slide every 5 seconds (using the standard next button)
setInterval(nextSlide, 5000);

// Initialize the slide carousel
cloneFirstSlide();
showSlide(currentIndex);





//   neqjdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

// List carousel setup (keeping the existing functionality)
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let unAcceptClick;
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Function to show list items in carousel
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000); // Delay before re-enabling the buttons
}

nextButton.onclick = function () {
    showSlider('next');
}
prevButton.onclick = function () {
    showSlider('prev');
}

// See more button functionality (show more details in carousel)
seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});

// Back button to return from details view in carousel
backButton.onclick = function () {
    carousel.classList.remove('showDetail');
}

// Ensure the prev2 and next2 buttons are tied to the carousel list movement
nextBtn2.addEventListener('click', () => showSlider('next'));
prevBtn2.addEventListener('click', () => showSlider('prev'));
