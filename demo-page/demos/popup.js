(function () {
    // Configuration
    const API_URL = 'http://localhost:5000/api/inquiries';
    const POPUP_INTERVAL_MIN = 10000; // 10 seconds
    const POPUP_INTERVAL_MAX = 30000; // 30 seconds
    const STORAGE_KEY = 'nexspire_demo_inquiry_submitted';

    // Check if already submitted
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        return;
    }

    // Styles
    const styles = `
        #nexs-popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(5px);
            z-index: 99999;
            display: none;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        #nexs-popup-overlay.active {
            display: flex;
            opacity: 1;
        }
        #nexs-popup-container {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            width: 90%;
            max-width: 500px;
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        #nexs-popup-overlay.active #nexs-popup-container {
            transform: scale(1);
        }
        #nexs-popup-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: transparent;
            border: none;
            font-size: 24px;
            color: #6b7280;
            cursor: pointer;
            z-index: 10;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
        }
        #nexs-popup-close:hover {
            background: #f3f4f6;
            color: #111827;
        }
        .nexs-popup-header {
            padding: 24px 24px 0;
            text-align: center;
        }
        .nexs-popup-title {
            font-size: 24px;
            font-weight: 700;
            color: #111827;
            margin: 0 0 8px;
        }
        .nexs-popup-subtitle {
            font-size: 14px;
            color: #6b7280;
            margin: 0;
        }
        .nexs-popup-body {
            padding: 24px;
        }
        .nexs-form-group {
            margin-bottom: 16px;
        }
        .nexs-form-label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 4px;
        }
        .nexs-form-input, .nexs-form-textarea {
            width: 100%;
            padding: 10px 12px;
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 8px;
            font-size: 14px;
            color: #111827;
            transition: all 0.2s;
            box-sizing: border-box;
            box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        }
        .nexs-form-input:focus, .nexs-form-textarea:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.8);
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .nexs-form-textarea {
            resize: vertical;
            min-height: 80px;
        }
        .nexs-submit-btn {
            width: 100%;
            background: linear-gradient(to right, #2563eb, #7c3aed);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.1s, opacity 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .nexs-submit-btn:hover {
            opacity: 0.95;
            transform: translateY(-1px);
        }
        .nexs-submit-btn:active {
            transform: translateY(0);
        }
        .nexs-submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }
        .nexs-message {
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .nexs-message.success {
            background-color: #f0fdf4;
            color: #15803d;
            border: 1px solid #bbf7d0;
        }
        .nexs-message.error {
            background-color: #fef2f2;
            color: #b91c1c;
            border: 1px solid #fecaca;
        }
        .nexs-hidden {
            display: none !important;
        }
        .nexs-spinner {
            width: 18px;
            height: 18px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: nexs-spin 0.8s linear infinite;
        }
        @keyframes nexs-spin {
            to { transform: rotate(360deg); }
        }
    `;

    // HTML Structure
    const html = `
        <div id="nexs-popup-overlay">
            <div id="nexs-popup-container">
                <button id="nexs-popup-close">&times;</button>
                <div class="nexs-popup-header">
                    <h3 class="nexs-popup-title">Let's Connect</h3>
                    <p class="nexs-popup-subtitle">Ready to start your project? Send us a message.</p>
                </div>
                <div class="nexs-popup-body">
                    <form id="nexs-contact-form">
                        <div id="nexs-status-message" class="nexs-hidden"></div>
                        <div class="nexs-form-group">
                            <label class="nexs-form-label" for="nexs-name">Full Name *</label>
                            <input type="text" id="nexs-name" name="name" class="nexs-form-input" placeholder="Your Name" required>
                        </div>
                        <div class="nexs-form-group">
                            <label class="nexs-form-label" for="nexs-email">Email Address *</label>
                            <input type="email" id="nexs-email" name="email" class="nexs-form-input" placeholder="you@example.com" required>
                        </div>
                        <div style="display: flex; gap: 12px;">
                            <div class="nexs-form-group" style="flex: 1;">
                                <label class="nexs-form-label" for="nexs-phone">Phone</label>
                                <input type="tel" id="nexs-phone" name="phone" class="nexs-form-input" placeholder="+1 234 567 890">
                            </div>
                            <div class="nexs-form-group" style="flex: 1;">
                                <label class="nexs-form-label" for="nexs-company">Company</label>
                                <input type="text" id="nexs-company" name="company" class="nexs-form-input" placeholder="Your Company">
                            </div>
                        </div>
                        <div class="nexs-form-group">
                            <label class="nexs-form-label" for="nexs-message">Message *</label>
                            <textarea id="nexs-message" name="message" class="nexs-form-textarea" placeholder="Tell us about your project..." required></textarea>
                        </div>
                        <button type="submit" class="nexs-submit-btn">
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Inject CSS
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Inject HTML
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);

    // Elements
    const overlay = document.getElementById('nexs-popup-overlay');
    const closeBtn = document.getElementById('nexs-popup-close');
    const form = document.getElementById('nexs-contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('nexs-status-message');

    // State
    let popupTimer;

    // Functions
    function showPopup() {
        if (localStorage.getItem(STORAGE_KEY) === 'true') return;
        overlay.classList.add('active');
    }

    function hidePopup() {
        overlay.classList.remove('active');
        scheduleNextPopup();
    }

    function scheduleNextPopup() {
        if (localStorage.getItem(STORAGE_KEY) === 'true') return;

        // Random time between 10s and 30s
        const delay = Math.floor(Math.random() * (POPUP_INTERVAL_MAX - POPUP_INTERVAL_MIN + 1) + POPUP_INTERVAL_MIN);

        clearTimeout(popupTimer);
        popupTimer = setTimeout(showPopup, delay);
    }

    // Event Listeners
    closeBtn.addEventListener('click', hidePopup);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) hidePopup();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('nexs-name').value,
            email: document.getElementById('nexs-email').value,
            phone: document.getElementById('nexs-phone').value,
            company: document.getElementById('nexs-company').value,
            message: document.getElementById('nexs-message').value
        };

        // UI Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="nexs-spinner"></div> Sending...';
        statusDiv.className = 'nexs-hidden';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit form');
            }

            // Success
            localStorage.setItem(STORAGE_KEY, 'true');
            statusDiv.innerHTML = 'Thank you! We will contact you soon.';
            statusDiv.className = 'nexs-message success';
            form.reset();

            setTimeout(() => {
                overlay.classList.remove('active');
            }, 3000);

        } catch (error) {
            console.error('Submission error:', error);
            statusDiv.innerHTML = error.message || 'Something went wrong. Please try again.';
            statusDiv.className = 'nexs-message error';
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span>';
        }
    });

    // Start Timer
    scheduleNextPopup();

})();
