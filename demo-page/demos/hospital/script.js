// MediCare+ Premium Hospital Demo - JavaScript

// ===== Data =====
const services = [
    {
        icon: 'fa-heart',
        title: 'Cardiology',
        description: 'Advanced cardiac care with state-of-the-art catheterization labs, AI-powered diagnostics, and minimally invasive procedures.'
    },
    {
        icon: 'fa-brain',
        title: 'Neurology',
        description: 'Comprehensive brain and spine care featuring robotic surgery, advanced imaging, and neurological rehabilitation.'
    },
    {
        icon: 'fa-bone',
        title: 'Orthopedics',
        description: 'Joint replacement, sports medicine, and trauma care with 3D-printed implants and regenerative therapies.'
    },
    {
        icon: 'fa-baby',
        title: 'Pediatrics',
        description: 'Child-focused healthcare in a nurturing environment with specialized pediatric ICU and neonatal care.'
    },
    {
        icon: 'fa-lungs',
        title: 'Pulmonology',
        description: 'Respiratory care excellence with advanced bronchoscopy, sleep labs, and pulmonary rehabilitation programs.'
    },
    {
        icon: 'fa-flask',
        title: 'Oncology',
        description: 'Personalized cancer treatment with genomic profiling, immunotherapy, and precision radiation therapy.'
    }
];

const doctors = [
    {
        name: 'Dr. Sarah Chen',
        specialty: 'Cardiology',
        experience: '20+ Years Experience',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
        rating: 5
    },
    {
        name: 'Dr. Michael Roberts',
        specialty: 'Neurology',
        experience: '18+ Years Experience',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
        rating: 5
    },
    {
        name: 'Dr. Emily Johnson',
        specialty: 'Pediatrics',
        experience: '15+ Years Experience',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
        rating: 5
    },
    {
        name: 'Dr. James Wilson',
        specialty: 'Orthopedics',
        experience: '22+ Years Experience',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
        rating: 5
    }
];

const departments = {
    emergency: {
        title: 'Emergency Care',
        description: 'Our 24/7 emergency department is equipped with trauma bays, rapid diagnostic imaging, and a dedicated team of emergency medicine specialists ready to handle any medical crisis.',
        features: ['24/7 Trauma Center', 'Air Ambulance Service', 'Rapid Response Team', 'Advanced Life Support']
    },
    icu: {
        title: 'Intensive Care Unit',
        description: 'State-of-the-art ICU with continuous monitoring, specialized equipment, and round-the-clock care from critical care specialists.',
        features: ['Advanced Monitoring Systems', 'Isolation Rooms', 'Dedicated ICU Pharmacy', 'Family Support Program']
    },
    surgery: {
        title: 'Surgical Excellence',
        description: 'Our surgical suites feature robotic surgery systems, hybrid operating rooms, and advanced minimally invasive techniques.',
        features: ['Robotic Surgery', 'Hybrid OR', 'Minimally Invasive', 'Same-Day Surgery']
    },
    maternity: {
        title: 'Maternity & Childbirth',
        description: 'A comfortable, family-centered environment for labor, delivery, and postpartum care with private suites and neonatal ICU.',
        features: ['Private Suites', 'Water Birth Options', 'Level III NICU', 'Lactation Support']
    },
    radiology: {
        title: 'Diagnostic Imaging',
        description: 'Comprehensive imaging services with the latest MRI, CT, PET, and ultrasound technology for accurate diagnosis.',
        features: ['3T MRI Scanner', '128-Slice CT', 'PET-CT Fusion', 'Digital Mammography']
    }
};

const testimonials = [
    {
        name: 'Jennifer Martinez',
        treatment: 'Cardiac Surgery',
        text: 'The cardiac team at MediCare+ saved my life. From diagnosis to recovery, every step was handled with incredible expertise and compassion.',
        initials: 'JM'
    },
    {
        name: 'Robert Thompson',
        treatment: 'Knee Replacement',
        text: 'After years of chronic pain, Dr. Wilson gave me back my mobility. The robotic surgery was precise and my recovery exceeded expectations.',
        initials: 'RT'
    },
    {
        name: 'Lisa Chen',
        treatment: 'Pediatric Care',
        text: 'The pediatric team made my daughter feel safe and cared for. Their attention to detail and warmth made a difficult time much easier.',
        initials: 'LC'
    }
];

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderDoctors();
    renderTestimonials();
    initDepartmentTabs();
    initScrollAnimations();
    initNavbar();
    createParticles();
    animateStats();
});

// ===== Render Functions =====
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = services.map((service, index) => `
        <div class="service-card" style="animation-delay: ${index * 0.1}s">
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

function renderDoctors() {
    const grid = document.getElementById('doctorsGrid');
    if (!grid) return;

    grid.innerHTML = doctors.map((doctor, index) => `
        <div class="doctor-card" style="animation-delay: ${index * 0.1}s">
            <div class="doctor-img">
                <img src="${doctor.image}" alt="${doctor.name}">
            </div>
            <div class="doctor-info">
                <h3 class="doctor-name">${doctor.name}</h3>
                <p class="doctor-specialty">${doctor.specialty}</p>
                <p class="doctor-exp">${doctor.experience}</p>
                <div class="doctor-rating">
                    ${Array(doctor.rating).fill('<i class="fas fa-star"></i>').join('')}
                    <span>(${Math.floor(Math.random() * 100) + 150} reviews)</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card" style="animation-delay: ${index * 0.1}s">
            <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.initials}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <span>${testimonial.treatment}</span>
                </div>
                <div class="testimonial-stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        </div>
    `).join('');
}

function initDepartmentTabs() {
    const tabs = document.querySelectorAll('.dept-tab');
    const content = document.getElementById('deptContent');

    function updateContent(deptKey) {
        const dept = departments[deptKey];
        if (!dept) return;

        content.innerHTML = `
            <div class="dept-info">
                <h3>${dept.title}</h3>
                <p>${dept.description}</p>
                <div class="dept-features">
                    ${dept.features.map(f => `
                        <div class="dept-feature">
                            <i class="fas fa-check-circle"></i>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateContent(tab.dataset.dept);
        });
    });

    // Initialize with first tab
    updateContent('emergency');
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

    document.querySelectorAll('.service-card, .doctor-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Add CSS for visible state
    const style = document.createElement('style');
    style.textContent = `
        .service-card.visible, .doctor-card.visible, .testimonial-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// ===== Stats Counter Animation =====
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + (target < 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// ===== Navbar Scroll Effect =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        } else {
            navbar.style.padding = '16px 0';
            navbar.style.background = 'rgba(10, 14, 26, 0.85)';
        }

        lastScroll = currentScroll;
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

// ===== Particle Effect =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(0, 217, 255, ${0.1 + Math.random() * 0.3});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }

    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% { transform: translate(0, 0); opacity: 0.3; }
            25% { transform: translate(20px, -30px); opacity: 0.6; }
            50% { transform: translate(-10px, 20px); opacity: 0.4; }
            75% { transform: translate(30px, 10px); opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
}

// ===== Modal Functions =====
function openAppointmentModal() {
    document.getElementById('appointmentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAppointmentModal() {
    document.getElementById('appointmentModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleAppointment(e) {
    e.preventDefault();

    // Show success message
    const form = e.target;
    const originalContent = form.innerHTML;

    form.innerHTML = `
        <div style="text-align: center; padding: 40px 0;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #00E676, #00C853); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 36px; color: white;">
                <i class="fas fa-check"></i>
            </div>
            <h3 style="font-size: 24px; margin-bottom: 12px;">Appointment Booked!</h3>
            <p style="color: #8892A5; margin-bottom: 24px;">We'll send you a confirmation email shortly with all the details.</p>
            <button type="button" class="btn btn-primary" onclick="closeAppointmentModal()">
                <span>Done</span>
            </button>
        </div>
    `;

    // Reset form after close
    setTimeout(() => {
        form.innerHTML = originalContent;
    }, 5000);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAppointmentModal();
    }
});
