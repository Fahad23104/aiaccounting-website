// Sticky Navbar Shadow and Resize
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
    } else {
        header.style.padding = '0';
    }
});

// Mobile Menu Toggle for Responsive Design
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form Submission Simulation
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.style.backgroundColor = '#059669'; // Darker success green
        
        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            this.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Reverts back to CSS default
            }, 3000);
        }, 1500);
    });
}