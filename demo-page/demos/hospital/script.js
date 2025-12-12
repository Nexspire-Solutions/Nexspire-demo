// ===== Data =====
const services = [
    { icon: 'fa-heart', title: 'Cardiology', desc: 'Complete heart care including diagnostics, treatment, and rehabilitation.', color: '#FF6B6B' },
    { icon: 'fa-baby', title: 'Pediatrics', desc: 'Specialized healthcare for infants, children, and adolescents.', color: '#4ECDC4' },
    { icon: 'fa-bone', title: 'Orthopedics', desc: 'Treatment of musculoskeletal system including bones, joints, and muscles.', color: '#45B7D1' },
    { icon: 'fa-brain', title: 'Neurology', desc: 'Expert care for disorders of the nervous system and brain.', color: '#96CEB4' },
    { icon: 'fa-lungs', title: 'Pulmonology', desc: 'Respiratory care for lung diseases and breathing disorders.', color: '#DDA0DD' },
    { icon: 'fa-eye', title: 'Ophthalmology', desc: 'Complete eye care from exams to surgery and vision correction.', color: '#F7DC6F' },
    { icon: 'fa-tooth', title: 'Dentistry', desc: 'Comprehensive dental care and cosmetic dentistry services.', color: '#85C1E2' },
    { icon: 'fa-user-md', title: 'Internal Medicine', desc: 'Diagnosis and treatment of adult diseases and conditions.', color: '#FAC8CD' },
    { icon: 'fa-x-ray', title: 'Radiology', desc: 'Advanced imaging and diagnostic radiology services.', color: '#A8E6CF' },
    { icon: 'fa-dna', title: 'Oncology', desc: 'Cancer treatment with latest therapies and compassionate care.', color: '#FFB7B2' },
    { icon: 'fa-heartbeat', title: 'Emergency Care', desc: '24/7 emergency services with rapid response team.', color: '#FF6F61' },
    { icon: 'fa-pills', title: 'Pharmacy', desc: 'Full-service pharmacy with prescription and wellness products.', color: '#B4A7D6' }
];

const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', exp: '15+ years experience', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', education: 'MD, Harvard Medical School', rating: 4.9 },
    { name: 'Dr. Michael Chen', specialty: 'Neurologist', exp: '12+ years experience', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', education: 'MD, Johns Hopkins', rating: 4.8 },
    { name: 'Dr. Emily Williams', specialty: 'Pediatrician', exp: '10+ years experience', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', education: 'MD, Stanford Medical', rating: 5.0 },
    { name: 'Dr. James Wilson', specialty: 'Orthopedic Surgeon', exp: '18+ years experience', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80', education: 'MD, Mayo Clinic', rating: 4.9 },
    { name: 'Dr. Lisa Anderson', specialty: 'Oncologist', exp: '14+ years experience', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', education: 'MD, Yale School of Medicine', rating: 4.9 },
    { name: 'Dr. Robert Martinez', specialty: 'Emergency Medicine', exp: '16+ years experience', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', education: 'MD, Columbia Medical', rating: 4.8 },
    { name: 'Dr. Jennifer Lee', specialty: 'Ophthalmologist', exp: '9+ years experience', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', education: 'MD, Duke Medical School', rating: 4.9 },
    { name: 'Dr. David Brown', specialty: 'Internal Medicine', exp: '20+ years experience', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80', education: 'MD, UCLA Medical Center', rating: 5.0 }
];

const departments = [
    { name: 'Emergency Department', desc: '24/7 emergency care with state-of-the-art trauma center', icon: 'fa-ambulance', beds: 30 },
    { name: 'Intensive Care Unit', desc: 'Critical care with advanced life support systems', icon: 'fa-bed', beds: 45 },
    { name: 'Surgical Center', desc: 'Modern operating rooms with latest technology', icon: 'fa-procedures', beds: 12 },
    { name: 'Maternity Ward', desc: 'Comprehensive obstetric and neonatal care', icon: 'fa-baby-carriage', beds: 25 },
    { name: 'Radiology Suite', desc: 'Advanced imaging including MRI, CT, and X-ray', icon: 'fa-x-ray', beds: 0 },
    { name: 'Laboratory', desc: 'Full-service diagnostic and pathology lab', icon: 'fa-flask', beds: 0 }
];

const facilities = [
    { title: 'Advanced MRI Center', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80' },
    { title: 'Modern Operating Rooms', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
    { title: 'ICU Ward', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80' },
    { title: 'Patient Rooms', image: 'https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=600&q=80' }
];

// ===== DOM Elements =====
const servicesGrid = document.getElementById('servicesGrid');
const doctorsGrid = document.getElementById('doctorsGrid');
const appointmentModal = document.getElementById('appointmentModal');

// ===== Render Services =====
function renderServices() {
    servicesGrid.innerHTML = services.map((service, i) => `
        <div class="service-card" style="animation: fadeIn 0.6s ease ${i * 0.1}s backwards">
            <div class="service-icon" style="background: ${service.color}">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </div>
    `).join('');
}

// ===== Render Doctors =====
function renderDoctors() {
    doctorsGrid.innerHTML = doctors.map((doctor, i) => `
        <div class="doctor-card" style="animation: fadeIn 0.6s ease ${i * 0.1}s backwards">
            <div class="doctor-image">
                <img src="${doctor.image}" alt="${doctor.name}" loading="lazy">
                <div class="doctor-social">
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <div class="doctor-specialty">${doctor.specialty}</div>
                <div class="doctor-exp">${doctor.exp}</div>
            </div>
        </div>
    `).join('');
}

// ===== Modal Functions =====
function openAppointmentModal() {
    appointmentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAppointmentModal() {
    appointmentModal.classList.remove('active');
    document.body.style.overflow = '';
}

appointmentModal.addEventListener('click', (e) => {
    if (e.target === appointmentModal) closeAppointmentModal();
});

// ===== Form Handler =====
function handleAppointment(e) {
    e.preventDefault();
    showNotification('Appointment booked successfully! We will contact you shortly.');
    closeAppointmentModal();
    e.target.reset();
}

// ===== Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        padding: 18px 32px;
        background: linear-gradient(135deg, #0066FF, #00D4AA);
        color: white;
        border-radius: 16px;
        font-weight: 600;
        font-size: 15px;
        z-index: 3000;
        animation: slideIn 0.4s ease, slideOut 0.4s ease 3s forwards;
        box-shadow: 0 10px 40px rgba(0, 102, 255, 0.3);
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3500);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
`;
document.head.appendChild(style);

// ===== Animated Counter =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString() + (target === 24 ? '/7' : '+');
            }
        };

        updateCounter();
    });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== Initialize =====
renderServices();
renderDoctors();

// Trigger counter animation when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) observer.observe(heroStats);

console.log('🏥 MediCare Hospital loaded successfully!');
