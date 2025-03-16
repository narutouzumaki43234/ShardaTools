// Handle WhatsApp Button Click
document.getElementById('whatsapp-button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Your WhatsApp number (with country code, e.g., +91 for India)
    const yourWhatsAppNumber = '+919417480807'; // Replace with your WhatsApp number

    // Create the WhatsApp message
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

    // Open the link in a new tab
    window.open(whatsappLink, '_blank');

    // Show success message
    const responseMessage = document.getElementById('form-response');
    responseMessage.textContent = 'Redirecting to WhatsApp...';
    responseMessage.style.color = 'green';
});