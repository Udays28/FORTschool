// navbar js
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// croulse

//circle
function showPopup(info) {
    document.getElementById('popupContent').innerHTML = info;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

let hoverTimer;

function startHoverTimer(info) {
    hoverTimer = setTimeout(function () {
        showPopup(info);
    }, 2000); // Set the duration in milliseconds (1 second in this case)
}

function clearHoverTimer() {
    clearTimeout(hoverTimer);
}


function showPopup(info) {
    document.getElementById('popupContent').innerHTML = info;
    document.getElementById('popup').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.carousel-item').length;

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }

        function updateCarousel() {
            const carouselContent = document.querySelector('.carousel-content');
            const slideWidth = document.querySelector('.carousel-item').offsetWidth;
            const transformValue = -currentIndex * slideWidth + 'px';
            carouselContent.style.transform = 'translateX(' + transformValue + ')';
        }