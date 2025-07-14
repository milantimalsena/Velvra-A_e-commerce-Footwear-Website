const subscribeButton = document.getElementById('Subscribe');
subscribeButton.addEventListener('click', function() {
    const emailInput = document.querySelector('.userInput input[type=email]');
    const email = emailInput.value.trim();
    if (email === '' || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert(email+' '+'Thank you for subscribing!');
    emailInput.value = '';
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}