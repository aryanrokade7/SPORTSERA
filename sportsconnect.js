ocument.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for the "Get Started" button
    const getStartedButton = document.getElementById('get-started-btn');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            window.location.href = 'createchannel.html'; // Replace with your target page
        });
    }

    // Add event listeners for the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target ID
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Smooth scroll to the target element
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Optional: Add form validation for future enhancements
function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (!name || !email) {
            alert("Please fill in all required fields.");
            event.preventDefault(); // Prevent form submission
        }
    });
}

// Call the validateForm function if you have a form in the future
// validateForm();


