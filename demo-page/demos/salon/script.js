// LUXE Salon - Dark Luxury Theme JavaScript

// ===== Data =====
const services = [
    {
        number: '01',
        title: 'HAIR DESIGN',
        description: 'Precision cuts and transformative styling by internationally trained artists. From classic elegance to avant-garde creations.',
        price: 'From $150'
    },
    {
        number: '02',
        title: 'COLOR ART',
        description: 'Hand-painted balayage, dimensional highlights, and custom color formulations tailored to complement your unique features.',
        price: 'From $250'
    },
    {
        number: '03',
        title: 'BRIDAL LUXE',
        description: 'Complete bridal packages including trials, day-of styling, and touch-up services for your most memorable moments.',
        price: 'From $500'
    },
    {
        number: '04',
        title: 'MAKEUP ART',
        description: 'Red carpet-ready looks using premium luxury products. Perfect for editorial, events, or everyday glamour.',
        price: 'From $180'
    },
    {
        number: '05',
        title: 'TREATMENTS',
        description: 'Restorative keratin treatments, scalp therapies, and deep conditioning rituals for ultimate hair health.',
        price: 'From $200'
    },
    {
        number: '06',
        title: 'EXTENSIONS',
        description: 'Seamless, undetectable hair extensions using 100% virgin Remy hair for natural volume and length.',
        price: 'From $800'
    }
];

const team = [
    {
        name: 'VICTORIA HART',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80'
    },
    {
        name: 'SOPHIA CHEN',
        role: 'Color Specialist',
        image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80'
    },
    {
        name: 'ISABELLA RUSSO',
        role: 'Senior Stylist',
        image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1dfa?w=400&q=80'
    },
    {
        name: 'EMMA LAURENT',
        role: 'Makeup Artist',
        image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&q=80'
    }
];

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', title: 'BALAYAGE' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', title: 'BRIDAL' },
    { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', title: 'EDITORIAL' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', title: 'COLOR' },
    { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80', title: 'STYLING' },
    { src: 'https://images.unsplash.com/photo-1562322140-8baeacacf4ad?w=600&q=80', title: 'GLAMOUR' },
    { src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600&q=80', title: 'TEXTURE' },
    { src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80', title: 'CREATIVE' }
];

const testimonials = [
    {
        text: 'LUXE has completely transformed my approach to beauty. The attention to detail and artistry is unmatched. Victoria and her team are true visionaries.',
        name: 'ALEXANDRA PIERCE',
        title: 'Fashion Editor, Vogue'
    },
    {
        text: 'I have never felt more confident. The color work Sophia did is absolutely magical — it looks so natural yet elevated. Worth every penny.',
        name: 'MADISON WELLS',
        title: 'Celebrity Stylist'
    },
    {
        text: 'My bridal styling was perfection. Isabella understood exactly what I envisioned and exceeded all expectations. The entire team made me feel like royalty.',
        name: 'CHARLOTTE ROSE',
        title: 'Bride'
    }
];

let currentTestimonial = 0;

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderTeam();
    renderGallery();
    initTestimonials();
    initCursorGlow();
    initNavbarScroll();
    initScrollAnimations();
});

// ===== Render Functions =====
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = services.map((service, index) => `
        <div class="service-card" style="animation-delay: ${index * 0.1}s">
            <span class="service-number">${service.number}</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <span class="service-price">${service.price}</span>
        </div>
    `).join('');
}

function renderTeam() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;

    grid.innerHTML = team.map((member, index) => `
        <div class="team-card" style="animation-delay: ${index * 0.1}s">
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="team-info">
                <h4>${member.name}</h4>
                <p class="team-role">${member.role}</p>
                <div class="team-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item" style="animation-delay: ${index * 0.05}s">
            <img src="${img.src}" alt="${img.title}">
            <div class="gallery-overlay">
                <span>${img.title}</span>
            </div>
        </div>
    `).join('');
}

// ===== Testimonials =====
function initTestimonials() {
    showTestimonial(0);
}

function showTestimonial(index) {
    const textEl = document.querySelector('.testimonial-text');
    const nameEl = document.querySelector('.author-name');
    const titleEl = document.querySelector('.author-title');

    if (!textEl) return;

    const testimonial = testimonials[index];
    textEl.textContent = `"${testimonial.text}"`;
    nameEl.textContent = testimonial.name;
    titleEl.textContent = testimonial.title;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    animateTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    animateTestimonial(currentTestimonial);
}

function animateTestimonial(index) {
    const content = document.getElementById('testimonialContent');
    content.style.opacity = 0;
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        showTestimonial(index);
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }, 300);
}

// Add transition styles to testimonial content
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('testimonialContent');
    if (content) {
        content.style.transition = 'all 0.4s ease';
    }
});

// ===== Cursor Glow Effect =====
function initCursorGlow() {
    const cursor = document.getElementById('cursorGlow');
    if (!cursor || window.innerWidth < 768) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
}

// ===== Navbar Scroll Effect =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .team-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Add visible state styles
    const style = document.createElement('style');
    style.textContent = `
        .service-card.visible, .team-card.visible, .gallery-item.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// ===== Modal Functions =====
function openBooking() {
    document.getElementById('bookingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleBooking(e) {
    e.preventDefault();

    const form = e.target;
    const originalContent = form.innerHTML;

    form.innerHTML = `
        <div style="text-align: center; padding: 48px 0;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #8B5CF6, #EC4899); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; font-size: 32px; color: white;">
                <i class="fas fa-check"></i>
            </div>
            <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: 4px; margin-bottom: 12px;">BOOKING CONFIRMED</h3>
            <p style="color: #666; margin-bottom: 28px; font-size: 14px;">We'll send you a confirmation email with all the details.</p>
            <button type="button" class="btn btn-primary" onclick="closeBooking()">
                <span>DONE</span>
            </button>
        </div>
    `;

    setTimeout(() => {
        form.innerHTML = originalContent;
    }, 5000);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBooking();
    }
});
