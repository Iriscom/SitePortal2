// Функция для перелистывания изображений в галерее
let currentSlide = 0;

const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
const totalSlides = slides.length;

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateGallery();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1;
  }
  updateGallery();
}

function updateGallery() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000); // Перелистывание через каждые 3 секунды

