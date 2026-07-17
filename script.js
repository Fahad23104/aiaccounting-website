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

// Form Submission & Mailto Trigger
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents standard page reload
        
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        
        // Grab values from the form inputs
        const nameVal = this.querySelector('input[type="text"]').value;
        const emailVal = this.querySelector('input[type="email"]').value;
        
        // Trigger the user's default email client directly to your address
        window.location.href = `mailto:info@aiaccounting.works?subject=Website Contact from ${encodeURIComponent(nameVal)}&body=Name: ${encodeURIComponent(nameVal)}%0D%0AEmail: ${encodeURIComponent(emailVal)}%0D%0A%0D%0A(Please write your message here...)`;
        
        btn.innerText = 'Sending...';
        btn.style.backgroundColor = '#059669'; // Darker success green
        
        setTimeout(() => {
            btn.innerText = 'Redirecting...';
            this.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Reverts back to CSS default
            }, 3000);
        }, 1500);
    });
}