
// Get the button and the dropdown content
const dropdownBtn = document.getElementById('dropdownDefaultButton');
const dropdownContent = document.getElementById('dropdownContent');

// Toggle the visibility of the dropdown content when the button is clicked
dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.remove('hidden');
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
  if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.classList.add('hidden');
  }
});

const carousel = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * carouselItems[0].clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

updateCarousel();

const popup = document.getElementById('photoPopup');
const popupImage = document.getElementById('popupImage');

function closePhotoPopup() {
  popup.style.display = 'none';
}

popup.addEventListener('click', () => {
  closePhotoPopup();
});

function showPhotoPopup(imageUrl) {
  popupImage.src = imageUrl;
  popup.style.display = 'flex';
}

const rozwin = document.getElementById('rozwin');
const designsContainer = document.getElementById('designs-container');
const rozwinContainer = document.getElementById('rozwin-container');

rozwin.addEventListener('click', () => {
  designsContainer.classList.remove('max-h-[95rem]');
  designsContainer.classList.remove('max-h-[40rem]');
  designsContainer.classList.add('pb-24');
  rozwinContainer.remove();
});