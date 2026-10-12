// Smooth scroll
document.getElementById('view-work').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('images').scrollIntoView({ behavior: 'smooth' });
});

// Lightbox
const images = document.querySelectorAll('.photo img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
