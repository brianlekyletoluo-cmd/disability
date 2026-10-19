// Mobile navigation menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});


// Contact form
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        document.querySelector(".contact-form").reset();
    }
}


// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();