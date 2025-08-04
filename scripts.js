// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Get the form and the status message element
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Clear any previous status messages
        formStatus.textContent = '';
        formStatus.className = '';

        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // --- Basic Validation ---
        if (name === '' || email === '' || message === '') {
            showStatusMessage('Please fill out all fields.', 'error');
            return;
        }

        // Email format validation using a simple regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatusMessage('Please enter a valid email address.', 'error');
            return;
        }

        // --- Success ---
        // If validation passes, show a success message
        // In a real application, you would send the data to a server here (e.g., using fetch API)
        showStatusMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // Clear the form fields after successful submission
        contactForm.reset();
    });

    /**
     * A helper function to display status messages to the user.
     * @param {string} message - The message to display.
     * @param {string} type - The type of message ('success' or 'error').
     */
    function showStatusMessage(message, type) {
        formStatus.textContent = message;
        formStatus.className = type; // Applies .success or .error class from CSS
    }

});
