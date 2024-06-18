// scripts.js
let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    images.forEach((img, i) => {
        img.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Initialize the gallery by showing the first image
showImage(currentIndex);
