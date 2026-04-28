// --- EXAMPLE 1: Smooth Scrolling (Enhances user experience) ---

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent the default jump action
        e.preventDefault();

        // Get the target element's ID
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Scroll smoothly to the target element
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset by navbar height
                behavior: 'smooth'
            });
        }
    });
});


// --- EXAMPLE 2: Image Gallery/Modal (Advanced) ---
/* 
// If you wanted to add a lightbox or modal when clicking an image, the logic would go here:

const images = document.querySelectorAll('.image-gallery img');
const overlay = document.getElementById('lightbox-overlay');

images.forEach(img => {
    img.addEventListener('click', () => {
        // Logic to make the image full screen and display it in a modal
        console.log("Image clicked, show modal!"); 
    });
});
*/

// Always keep your JS focused on enhancement, not core structure!
console.log("Apartment site initialized successfully."); 
