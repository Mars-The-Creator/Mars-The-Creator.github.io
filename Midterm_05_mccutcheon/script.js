document.addEventListener('DOMContentLoaded', () => {
    const textBoxes = document.querySelectorAll('.text-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.dataset.bg;

                // Check if the background image URL is valid
                if (bgImage) {
                    console.log(`Changing background to: ${bgImage}`);
                    document.body.style.backgroundImage = `url('${bgImage}')`;
                } else {
                    console.error(`No background image found for: ${entry.target}`);
                }

                // Remove 'active' class from all text boxes
                textBoxes.forEach(box => {
                    box.classList.remove('active');
                    box.style.opacity = '0'; // Hide text box
                });

                // Add 'active' class to the current text box
                entry.target.classList.add('active');
                entry.target.style.opacity = '1'; // Make it visible

                console.log(`Active Box: ${entry.target.textContent}, Background: ${bgImage}`);
            }
        });
    }, { threshold: 0.5 });

    // Observe each text box
    textBoxes.forEach((box) => observer.observe(box));
});
