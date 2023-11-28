// Function to validate the registration form
function validateForm() {
    // Get input values from the registration form
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
//In the context of form input fields, the .value property is used to get the current value of an input element.
// For example, if you have an input field with the id 'username', 
//document.getElementById('username').value retrieves the text entered by the user in that input field.
    



// Get the message element where validation messages will be displayed
    var message = document.getElementById('message')

    // Simple validation: Check if any of the fields are empty
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        // Display an error message if any field is empty
        showMessage('error', 'All fields are required')
    } else {
        // Display a success message if all fields are filled
        showMessage('success', 'Registration successful!')

        // For this siple project, we'll just display a success message.
    }
}

// Function to display messages
function showMessage(type, text) {
    // Get the message element
    var message = document.getElementById('message')

    // Set the text content and styling class based on the message type
    message.textContent = text;
    message.className = type;

    // Make the message element visible
    message.style.display = 'block'

    // Hide the message after 3 seconds using a setTimeout function
    setTimeout(function() {
        message.style.display = 'none'
    }, 3000)
}
