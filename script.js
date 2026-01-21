// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
const form = document.getElementById("migrationForm");

form.addEventListener("submit", function(event) {
    // Note: The actual submission is handled by Formspree in the HTML action
    // This script just adds a nice alert
    
    const ign = form.elements['ign'].value;
    const hq = form.elements['hq_level'].value;

    if(ign.length < 3) {
        alert("Please enter a valid In-Game Name.");
        event.preventDefault(); // Stop submission if validation fails
    } else {
        // You can add custom analytics here if needed
        console.log(`Application started for: ${ign}`);
    }
});