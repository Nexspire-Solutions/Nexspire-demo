(function () {
    // Styles
    const styles = `
        #nexs-loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            z-index: 100000;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s ease-out, visibility 0.5s;
        }
        #nexs-loader-overlay.hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
        .nexs-loader-spinner {
            width: 48px;
            height: 48px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3b82f6;
            border-radius: 50%;
            animation: nexs-spin 1s linear infinite;
        }
        @keyframes nexs-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    // Inject CSS
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.id = 'nexs-loader-overlay';
    overlay.innerHTML = '<div class="nexs-loader-spinner"></div>';
    document.body.prepend(overlay);

    // Hide loader when loaded
    function hideLoader() {
        overlay.classList.add('hidden');
    }

    // Check if mostly loaded (for fast connections or cached)
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }

    // Fallback in case load event fails or hangs
    setTimeout(hideLoader, 10000);

})();
