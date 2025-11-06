const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('currentImage');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 1;

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.src;
    currentIndex = index;
  });
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbs.length;
  updateImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
  updateImage();
});

function updateImage() {
  thumbs.forEach(t => t.classList.remove('active'));
  thumbs[currentIndex].classList.add('active');
  mainImage.src = thumbs[currentIndex].src;
}
