// Define the image paths in the array
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

// Initialize the image index
let currentImageIndex = 0;

// Get the image element
const sliderImage = document.getElementById('slider-image');

// Add a click event listener to the image container
document.getElementById('image-container').addEventListener('click', function() {
    // Increment the image index
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Change the image source
    sliderImage.src = images[currentImageIndex];
});
