// Mobile Navigation Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Navbar Shadow Effect on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'bg-darkBg/95');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-darkBg/95');
    }
});

// Project Details Modal Functions
function openProjectModal(title, description, technologies) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');

    if (modal && modalTitle && modalDesc && modalTech) {
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modalTech.textContent = technologies;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of modal content
window.addEventListener('click', (e) => {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Contact Form Handler with Toast Notification
function handleFormSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name').value;
    
    // Show Toast Notification
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');

    if (toast && toastTitle && toastMessage) {
        toastTitle.textContent = "Thank you, " + nameInput + "!";
        toastMessage.textContent = "Your message has been received (Placeholder action).";
        
        toast.classList.remove('translate-y-24', 'opacity-0');
        
        setTimeout(() => {
            toast.classList.add('translate-y-24', 'opacity-0');
        }, 4000);
    }

    // Reset Form
    document.getElementById('contact-form').reset();
}