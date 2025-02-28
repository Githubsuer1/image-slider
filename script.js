// Initialize variables
let currentSlide = 0;
let slides = document.querySelectorAll(".images"); // Correct class selector
let totalSlides = slides.length;
console.log(slides);
console.log(totalSlides);

// Function to show the next image
let nextImage = () => {
    currentSlide += 1;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showImages(currentSlide);
}

// Function to show the previous image
let prevImage = () => {
    currentSlide -= 1;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    showImages(currentSlide);
}

// Function to display the active image
let showImages = (index) => {
    slides.forEach((img) => {
        img.classList.remove("active"); // Hide all images
    });
    slides[index].classList.add("active"); // Show the active image
}

// Add event listeners to buttons
document.getElementById('next-button').addEventListener("click", nextImage);
document.getElementById('prev-button').addEventListener("click", prevImage);

// Automatically slide every 3 seconds
// setInterval(nextImage, 3000);

// Show the first image on page load
showImages(currentSlide);
