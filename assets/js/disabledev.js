/**
 * Disable browser inspect/dev tools
 * Note: This is for basic protection only
 */

document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showWarning();
        return false;
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function(e) {
        // F12 key
        if (e.keyCode === 123) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Ctrl+U (view source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Ctrl+Shift+C (Chrome dev tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            showWarning();
            return false;
        }
    });
    
    // Disable drag and drop of images
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    
    // Clear console on page load
    console.clear();
    
    // Override console methods
    ['log', 'warn', 'error', 'info', 'debug'].forEach(function(method) {
        console[method] = function() {};
    });
    
    // Prevent opening dev tools via browser menu
    Object.defineProperty(window, 'console', {
        value: console,
        writable: false,
        configurable: false
    });
    
    // Add a message to console if someone manages to open it
    console.log = function() {
        console.error('Developer tools are disabled on this page.');
    };
    
    // Periodically check if dev tools are open
    let devToolsOpen = false;
    const threshold = 160; // Width difference when dev tools are open
    
    function checkDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if ((widthThreshold || heightThreshold) && !devToolsOpen) {
            devToolsOpen = true;
            showWarning();
            // Redirect or take action
            // window.location.href = 'about:blank';
        } else if (!widthThreshold && !heightThreshold) {
            devToolsOpen = false;
        }
    }
    
    // Check periodically
    setInterval(checkDevTools, 500);
    
    // Show warning message
    function showWarning() {
        // Create warning overlay
        const warning = document.createElement('div');
        warning.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 20px;
            ">
                <div style="font-size: 2em; margin-bottom: 20px;">⚠️</div>
                <h2 style="color: #ff0000ff; margin-bottom: 15px;">Access Restricted</h2>
                <p style="max-width: 600px; line-height: 1.6; margin-bottom: 20px;">
                    Developer tools are disabled on this website.<br>
                    This is to protect the intellectual property and design elements.
                </p>
                <p style="font-size: 0.9em; color: #aaa; max-width: 600px;">
                    If you need access to any code or design elements, please contact the website owner.
                </p>
                <p>Designed & Developed by <a href="https://github.com/M3N7OR" target="_blank" style="color: white;">M3N7OR</a></p>
                <small>Crafted with 🤍 for ADMAL LLC</small>
                <button onclick="this.parentElement.remove()" style="
                    margin-top: 30px;
                    padding: 12px 24px;
                    background: #2563eb;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1em;
                    cursor: pointer;
                ">
                    I Understand
                </button>
            </div>
        `;
        
        // Remove any existing warning
        const existingWarning = document.querySelector('.devtools-warning');
        if (existingWarning) {
            existingWarning.remove();
        }
        
        warning.className = 'devtools-warning';
        document.body.appendChild(warning);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (warning.parentElement) {
                warning.remove();
            }
        }, 5000);
    }
    
    // Add a simple blur effect when right-click is attempted
    document.addEventListener('mousedown', function(e) {
        if (e.button === 2) { // Right click
            document.body.style.filter = 'blur(2px)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 300);
        }
    });
    
    // Prevent text selection on some elements
    const noSelectElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'];
    noSelectElements.forEach(tag => {
        const elements = document.querySelectorAll(tag);
        elements.forEach(el => {
            el.style.userSelect = 'none';
            el.style.webkitUserSelect = 'none';
        });
    });
    
    console.log('Page protection enabled.');
});