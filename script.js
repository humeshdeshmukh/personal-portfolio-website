// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email.');
    } else {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset(); // Reset form after successful submission
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Toggle Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Scroll-to-Top Button
const scrollTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Reveal Animations (optional)
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1, // Reveal when 10% of the element is in the viewport
    rootMargin: "0px 0px -100px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Unobserve once the animation is triggered
    });
}, revealOptions);

revealElements.forEach(revealElement => {
    revealOnScroll.observe(revealElement);
});

// Typing Effect
const typedText = document.getElementById('typed-text');
const words = ["Humesh Deshmukh", "Web Developer", "Designer", "Creator"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    if (wordIndex < words.length) {
        currentWord = words[wordIndex];

        if (!isDeleting && letterIndex < currentWord.length) {
            typedText.innerHTML += currentWord.charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && letterIndex > 0) {
            typedText.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(type, 100);
        } else if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
            setTimeout(type, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Delay before typing starts
});
