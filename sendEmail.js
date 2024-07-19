document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the values from the form fields
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;

        // Here you would typically send this data to a server-side script using AJAX or fetch
        // For example, using fetch to send the data to a server-side script
        fetch('sendEmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, contact: contact }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Email sent successfully:', data);
            // You can show a success message to the user if needed
        })
        .catch(error => {
            console.error('Error sending email:', error);
            // Handle errors here, show an error message to the user
        });

        // Clear the form after submission (optional)
        form.reset();
    });
});
