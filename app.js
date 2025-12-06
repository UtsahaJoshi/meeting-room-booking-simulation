document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // BUG: The confirmation message is not shown correctly
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    // BUG: Missing check for time and date validity
    I DONT KNOW
    const confirmation = document.getElementById('confirmation');
    confirmation.innerText = 'Booking confirmed for ' + name + ' on ' + date + ' at ' + time + '!';
    // TODO: Add functionality to save the booking
});

// BUG: The submit button should be disabled after booking
const button = document.getElementById('submit-btn');
// BUG: Button should reset after confirmation (not implemented)
