// ===== Data =====
const treatments = [
    { icon: '💆', title: 'Signature Massage', desc: 'Our signature full-body massage combining Swedish and deep tissue techniques', duration: '90 min', price: '$149' },
    { icon: '🌸', title: 'Aromatherapy', desc: 'Therapeutic massage with essential oils for deep relaxation', duration: '60 min', price: '$99' },
    { icon: '🔥', title: 'Hot Stone Therapy', desc: 'Warm volcanic stones melt away tension and stress', duration: '75 min', price: '$129' },
    { icon: '✨', title: 'Facial Rejuvenation', desc: 'Luxurious facial with organic products for radiant skin', duration: '60 min', price: '$119' },
    { icon: '🍃', title: 'Body Wrap', desc: 'Detoxifying wrap with natural herbs and minerals', duration: '90 min', price: '$159' },
    { icon: '🧘', title: 'Meditation Session', desc: 'Guided meditation for mental clarity and inner peace', duration: '45 min', price: '$59' }
];

const packages = [
    { title: 'Day of Bliss', price: '$299', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&q=80', featured: false, features: ['90-min Signature Massage', 'Facial Rejuvenation', 'Aromatherapy Bath', 'Herbal Tea Service'] },
    { title: 'Ultimate Retreat', price: '$449', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec66?w=500&q=80', featured: true, badge: 'Most Popular', features: ['Hot Stone Therapy', 'Body Wrap Treatment', 'Facial Rejuvenation', 'Gourmet Lunch', 'Pool Access'] },
    { title: 'Couples Escape', price: '$549', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=500&q=80', featured: false, features: ['Couples Massage', 'Private Suite', 'Champagne & Chocolates', 'Aromatherapy', 'Sunset Views'] }
];

// ===== DOM Elements =====
const treatmentsGrid = document.getElementById('treatmentsGrid');
const packagesGrid = document.getElementById('packagesGrid');
const bookingModal = document.getElementById('bookingModal');

// ===== Render Functions =====
function renderTreatments() {
    treatmentsGrid.innerHTML = treatments.map((treatment, i) => `
        <div class="treatment-card" style="animation: fadeIn 0.6s ease ${i * 0.1}s backwards">
            <div class="treatment-icon">${treatment.icon}</div>
            <h3>${treatment.title}</h3>
            <p>${treatment.desc}</p>
            <div class="treatment-meta">
                <span><i class="far fa-clock"></i> ${treatment.duration}</span>
                <span><i class="fas fa-tag"></i> ${treatment.price}</span>
            </div>
        </div>
    `).join('');
}

function renderPackages() {
    packagesGrid.innerHTML = packages.map((pkg, i) => `
        <div class="package-card ${pkg.featured ? 'featured' : ''}" style="animation: fadeIn 0.6s ease ${i * 0.15}s backwards">
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
                ${pkg.badge ? `<span class="package-badge">${pkg.badge}</span>` : ''}
            </div>
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                <div class="package-price">${pkg.price}</div>
                <ul class="package-features">
                    ${pkg.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <button class="btn btn-primary btn-full" onclick="openBookingModal()">Book Now</button>
            </div>
        </div>
    `).join('');
}

// ===== Modal Functions =====
function openBookingModal() {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
}

bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
});

// ===== Form Handler =====
function handleBooking(e) {
    e.preventDefault();
    showNotification('Your wellness journey awaits! We\'ll confirm your reservation shortly.');
    closeBookingModal();
    e.target.reset();
}

// ===== Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        padding: 20px 32px;
        background: linear-gradient(135deg, #7D8F69 0%, #A8B89C 100%);
        color: white;
        border-radius: 12px;
        font-weight: 600;
        font-size: 15px;
        z-index: 3000;
        animation: slideIn 0.5s ease, slideOut 0.5s ease 3.5s forwards;
        box-shadow: 0 15px 40px rgba(125, 143, 105, 0.35);
        display: flex;
        align-items: center;
        gap: 14px;
        max-width: 400px;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle" style="font-size: 20px;"></i>${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
`;
document.head.appendChild(style);

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
        navbar.style.background = 'rgba(249, 247, 244, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
        navbar.style.padding = '16px 0';
    } else {
        navbar.style.background = 'rgba(249, 247, 244, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '20px 0';
    }
});

// ===== Initialize =====
renderTreatments();
renderPackages();

console.log('🌿 Serenity Spa loaded successfully!');
