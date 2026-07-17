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

// Plan Button Pre-Fill Logic
const planButtons = document.querySelectorAll('.plan-btn');
const messageBox = document.getElementById('form-message');

planButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.pricing-card');
        const planName = card.querySelector('h3').innerText;
        // Grabs the price and removes the newline from the span element
        const price = card.querySelector('.price').innerText.replace(/\n/g, ''); 
        
        if (messageBox) {
            messageBox.value = `Hi, I am interested in the ${planName} plan at ${price}. Could you please provide more details?`;
            // Briefly wait for smooth scroll to finish, then focus the user's cursor on the message box
            setTimeout(() => {
                messageBox.focus();
            }, 800); 
        }
    });
});

// Web-Based Form Submission (via FormSubmit.co AJAX)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        
        // Retrieve form input values
        const nameVal = this.querySelector('input[name="name"]').value;
        const emailVal = this.querySelector('input[name="email"]').value;
        const messageVal = this.querySelector('textarea[name="message"]').value;
        
        // Provide visual feedback
        btn.innerText = 'Sending...';
        btn.style.backgroundColor = '#059669'; // Success green
        
        // Send data through the web asynchronously without reloading the page
        fetch("https://formsubmit.co/ajax/info@aiaccounting.works", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: nameVal,
                email: emailVal,
                message: messageVal,
                _subject: `New Lead: ${nameVal} - Website Inquiry`
            })
        })
        .then(response => response.json())
        .then(data => {
            btn.innerText = 'Message Sent!';
            this.reset(); // Clear the form
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Revert to CSS default color
            }, 3000);
        })
        .catch(error => {
            console.error("Submission Error:", error);
            btn.innerText = 'Error! Try Again';
            btn.style.backgroundColor = '#ef4444'; // Red error state
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; 
            }, 3000);
        });
    });
}