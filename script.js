document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (email) {
        // Retrieve existing emails from localStorage
        let emails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

        // Check if email is already subscribed
        if (emails.includes(email)) {
            message.textContent = "You're already subscribed!";
            message.style.color = "red";
        } else {
            // Add new email to the list
            emails.push(email);
            localStorage.setItem("subscribedEmails", JSON.stringify(emails));

            message.textContent = "Thank you for subscribing!";
            message.style.color = "green";
            document.getElementById("newsletterForm").reset();
        }
    } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    }
});

// Retrieve stored emails on page load
window.addEventListener("load", function() {
    let emails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    console.log("Subscribed emails:", emails);
});