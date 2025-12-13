// STILLNESS Spa - Minimalist Premium Theme JavaScript

// ===== Data =====
const rituals = [
    {
        number: '01',
        title: 'Signature Massage',
        description: 'A deeply restorative full-body experience combining Swedish, deep tissue, and aromatherapy techniques.',
        duration: '90 min',
        price: '$195'
    },
    {
        number: '02',
        title: 'Hot Stone Therapy',
        description: 'Heated volcanic stones placed on energy points melt tension and restore natural flow.',
        duration: '75 min',
        price: '$175'
    },
    {
        number: '03',
        title: 'Ayurvedic Journey',
        description: 'Ancient Indian healing practice with warm oils tailored to your unique dosha type.',
        duration: '120 min',
        price: '$245'
    },
    {
        number: '04',
        title: 'Facial Glow',
        description: 'Organic botanical facials customized for your skin type, restoring radiance and vitality.',
        duration: '60 min',
        price: '$155'
    },
    {
        number: '05',
        title: 'Body Wrap',
        description: 'Detoxifying mineral or seaweed wraps that purify, hydrate, and rejuvenate.',
        duration: '90 min',
        price: '$185'
    },
    {
        number: '06',
        title: 'Thai Healing',
        description: 'Traditional Thai massage combining stretching, acupressure, and energy work.',
        duration: '90 min',
        price: '$195'
    }
];

const journeys = [
    {
        title: 'Half-Day Escape',
        description: 'A curated 4-hour journey including massage, facial, and thermal bathing.',
        price: '$395',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80'
    },
    {
        title: 'Full-Day Retreat',
        description: 'Complete wellness immersion with all treatments, yoga, and organic cuisine.',
        price: '$695',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec66?w=600&q=80'
    },
    {
        title: 'Couples Harmony',
        description: 'Shared wellness experience in our private couples suite with champagne.',
        price: '$795',
        image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80'
    },
    {
        title: 'Weekend Wellness',
        description: 'Two-day escape with overnight accommodations and premium treatments.',
        price: '$1,295',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80'
    }
];

const features = [
    { icon: 'fa-water', text: 'Thermal Mineral Pools' },
    { icon: 'fa-leaf', text: '100% Organic Products' },
    { icon: 'fa-spa', text: 'Private Treatment Suites' },
    { icon: 'fa-om', text: 'Daily Yoga & Meditation' }
];

const testimonials = [
    {
        text: 'Stillness is more than a spa — it is a sanctuary. Every detail has been thoughtfully considered. I left feeling like a completely different person.',
        author: 'SARAH MITCHELL — WELLNESS EDITOR'
    },
    {
        text: 'The most transformative wellness experience I have ever had. The therapists are true healers, and the atmosphere is pure serenity.',
        author: 'JENNIFER HAYES — FOUNDER, GLOW CO.'
    },
    {
        text: 'I have visited spas around the world, and Stillness is in a league of its own. The attention to ritual and intention is unmatched.',
        author: 'MICHAEL CHEN — ENTREPRENEUR'
    }
];

let currentTestimonial = 0;

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
    renderRituals();
    renderJourneys();
    renderFeatures();
    initTestimonials();
    initNavbarScroll();
    initScrollAnimations();
    initDraggableScroll();
});

// ===== Render Functions =====
function renderRituals() {
    const grid = document.getElementById('ritualsGrid');
    if (!grid) return;

    grid.innerHTML = rituals.map((ritual, index) => `
        <div class="ritual-card" style="animation-delay: ${index * 0.1}s">
            <span class="ritual-number">${ritual.number}</span>
            <h3>${ritual.title}</h3>
            <p>${ritual.description}</p>
            <div class="ritual-meta">
                <span class="ritual-duration">${ritual.duration}</span>
                <span class="ritual-price">${ritual.price}</span>
            </div>
        </div>
    `).join('');
}

function renderJourneys() {
    const track = document.getElementById('journeyTrack');
    if (!track) return;

    track.innerHTML = journeys.map((journey, index) => `
        <div class="journey-card" style="animation-delay: ${index * 0.1}s">
            <div class="journey-image">
                <img src="${journey.image}" alt="${journey.title}">
            </div>
            <div class="journey-content">
                <h3>${journey.title}</h3>
                <p>${journey.description}</p>
                <span class="journey-price">${journey.price}</span>
            </div>
        </div>
    `).join('');
}

function renderFeatures() {
    const list = document.getElementById('sanctuaryFeatures');
    if (!list) return;

    list.innerHTML = features.map(feature => `
        <li>
            <span class="feature-icon"><i class="fas ${feature.icon}"></i></span>
            <span>${feature.text}</span>
        </li>
    `).join('');
}

// ===== Testimonials =====
function initTestimonials() {
    showTestimonial(0);

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        animateTestimonial();
    }, 8000);
}

function showTestimonial(index) {
    const quoteEl = document.getElementById('testimonialQuote');
    const authorEl = document.getElementById('testimonialAuthor');

    if (!quoteEl) return;

    const testimonial = testimonials[index];
    quoteEl.textContent = `"${testimonial.text}"`;
    authorEl.textContent = `— ${testimonial.author}`;
}

function animateTestimonial() {
    const quoteEl = document.getElementById('testimonialQuote');
    const authorEl = document.getElementById('testimonialAuthor');

    quoteEl.style.opacity = 0;
    quoteEl.style.transform = 'translateY(20px)';
    authorEl.style.opacity = 0;

    setTimeout(() => {
        showTestimonial(currentTestimonial);
        quoteEl.style.opacity = 1;
        quoteEl.style.transform = 'translateY(0)';
        authorEl.style.opacity = 1;
    }, 400);
}

// Add transition to testimonial elements
document.addEventListener('DOMContentLoaded', () => {
    const quoteEl = document.getElementById('testimonialQuote');
    const authorEl = document.getElementById('testimonialAuthor');

    if (quoteEl) {
        quoteEl.style.transition = 'all 0.5s ease';
        authorEl.style.transition = 'all 0.5s ease 0.1s';
    }
});

// ===== Navbar Scroll =====
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

    document.querySelectorAll('.ritual-card, .journey-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Add visible state styles
    const style = document.createElement('style');
    style.textContent = `
        .ritual-card.visible, .journey-card.visible, .stat.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// ===== Draggable Scroll for Journey Section =====
function initDraggableScroll() {
    const scroll = document.getElementById('journeyScroll');
    if (!scroll) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    scroll.addEventListener('mousedown', (e) => {
        isDown = true;
        scroll.style.cursor = 'grabbing';
        startX = e.pageX - scroll.offsetLeft;
        scrollLeft = scroll.scrollLeft;
    });

    scroll.addEventListener('mouseleave', () => {
        isDown = false;
        scroll.style.cursor = 'grab';
    });

    scroll.addEventListener('mouseup', () => {
        isDown = false;
        scroll.style.cursor = 'grab';
    });

    scroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scroll.offsetLeft;
        const walk = (x - startX) * 2;
        scroll.scrollLeft = scrollLeft - walk;
    });
}

// ===== Modal Functions =====
function openReserve() {
    document.getElementById('reserveModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReserve() {
    document.getElementById('reserveModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleReserve(e) {
    e.preventDefault();

    const form = e.target;
    const originalContent = form.innerHTML;

    form.innerHTML = `
        <div style="text-align: center; padding: 48px 0;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #8FA68E, #7A9E9F); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; color: white; font-size: 28px;">
                <i class="fas fa-check"></i>
            </div>
            <h3 style="font-size: 28px; font-weight: 400; margin-bottom: 12px;">Reservation Confirmed</h3>
            <p style="color: #5C5C5C; margin-bottom: 28px; font-size: 16px;">We look forward to welcoming you to Stillness.</p>
            <button type="button" class="btn btn-primary" onclick="closeReserve()">
                <span>Done</span>
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
        closeReserve();
    }
});
