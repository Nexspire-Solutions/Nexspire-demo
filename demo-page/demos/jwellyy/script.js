// ===== Product Data =====
const products = [
    // Rings
    { id: 1, name: "Diamond Eternity Ring", category: "rings", price: 2499, badge: "Bestseller", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", desc: "Exquisite 18K white gold ring with brilliant diamonds." },
    { id: 2, name: "Emerald Crown Ring", category: "rings", price: 2899, badge: "", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80", desc: "Stunning emerald center stone with diamond halo." },
    { id: 3, name: "Ruby Solitaire Ring", category: "rings", price: 3299, badge: "Luxury", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", desc: "Breathtaking Burmese ruby in platinum setting." },
    { id: 4, name: "Rose Gold Band", category: "rings", price: 1899, badge: "", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", desc: "Elegant 14K rose gold wedding band with diamond accents." },

    // Necklaces
    { id: 5, name: "Sapphire Royal Necklace", category: "necklaces", price: 3999, badge: "New", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", desc: "Luxurious platinum necklace with rare blue sapphires." },
    { id: 6, name: "Pearl Strand Necklace", category: "necklaces", price: 2799, badge: "", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", desc: "Graduated Akoya pearls with diamond clasp." },
    { id: 7, name: "Diamond Pendant", category: "necklaces", price: 1999, badge: "Trending", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", desc: "Brilliant cut diamond pendant in white gold." },
    { id: 8, name: "Gold Chain Necklace", category: "necklaces", price: 1599, badge: "", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", desc: "Classic 18K yellow gold link chain." },

    // Bracelets
    { id: 9, name: "Infinity Love Bracelet", category: "bracelets", price: 1599, badge: "Trending", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", desc: "Rose gold bracelet with infinity symbol studded with diamonds." },
    { id: 10, name: "Diamond Tennis Bracelet", category: "bracelets", price: 4299, badge: "Luxury", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", desc: "Classic tennis bracelet with 50 round brilliant diamonds." },
    { id: 11, name: "Gold Bangle Set", category: "bracelets", price: 2199, badge: "", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", desc: "Set of 3 stackable 22K gold bangles." },
    { id: 12, name: "Charm Bracelet", category: "bracelets", price: 999, badge: "New", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", desc: "Sterling silver charm bracelet with heart charms." },

    // Earrings
    { id: 13, name: "Pearl Drop Earrings", category: "earrings", price: 899, badge: "", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", desc: "Timeless freshwater pearls in 14K yellow gold." },
    { id: 14, name: "Diamond Stud Earrings", category: "earrings", price: 2599, badge: "Bestseller", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", desc: "Classic 1 carat total weight diamond studs." },
    { id: 15, name: "Hoop Earrings", category: "earrings", price: 1299, badge: "", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", desc: "Elegant 18K gold hoops with pave diamonds." },
    { id: 16, name: "Sapphire Drop Earrings", category: "earrings", price: 1899, badge: "New", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", desc: "Stunning blue sapphire and diamond drops." },
    { id: 17, name: "Chandelier Earrings", category: "earrings", price: 3499, badge: "Luxury", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", desc: "Dramatic statement earrings with cascading diamonds." },
    { id: 18, name: "Rose Gold Studs", category: "earrings", price: 799, badge: "", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", desc: "Dainty rose gold geometric stud earrings." }
];

let cart = [];

// ===== DOM Elements =====
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const quickViewModal = document.getElementById('quickViewModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// ===== Render Products =====
function renderProducts(category = 'all') {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);

    productsGrid.innerHTML = filtered.map((product, index) => `
        <div class="product-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button onclick="openQuickView(${product.id})" title="Quick View"><i class="fas fa-eye"></i></button>
                    <button title="Add to Wishlist"><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Filter Products =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// ===== Cart Functions =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toLocaleString()}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toLocaleString()} × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

// ===== Cart Sidebar Toggle =====
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

// ===== Quick View Modal =====
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <p style="color: var(--gray); margin-bottom: 24px;">${product.desc}</p>
            <span class="product-price" style="font-size: 32px;">$${product.price.toLocaleString()}</span>
            <button class="btn btn-primary" style="margin-top: 24px;" onclick="addToCart(${product.id}); closeQuickView();">
                <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
        </div>
    `;

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeQuickView);
quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickView();
});

// ===== Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        padding: 16px 28px;
        background: linear-gradient(135deg, #D4AF37, #FFD700);
        color: #0A0A0A;
        border-radius: 12px;
        font-weight: 600;
        font-size: 14px;
        z-index: 3000;
        animation: slideIn 0.4s ease, slideOut 0.4s ease 2.5s forwards;
        box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
    `;
    notification.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 10px;"></i>${message}`;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
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
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.padding = '12px 0';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.padding = '20px 0';
    }
});

// ===== Initialize =====
renderProducts();
updateCart();

console.log('✨ JWellyy Premium loaded successfully!');
