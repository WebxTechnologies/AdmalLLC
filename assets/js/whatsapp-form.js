
// ===== WhatsApp Form Submission =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    const whatsappNumber = '971526331330'; 
    
    // Add WhatsApp submit button if not exists
    const originalSubmitBtn = contactForm.querySelector('.submit-btn');
    if (originalSubmitBtn) {
        // Create WhatsApp button container
        const whatsappBtnContainer = document.createElement('div');
        whatsappBtnContainer.className = 'whatsapp-btn-container';
        whatsappBtnContainer.style.display = 'flex';
        whatsappBtnContainer.style.gap = '15px';
        whatsappBtnContainer.style.marginTop = '20px';
        whatsappBtnContainer.style.flexWrap = 'wrap';
        
        // Wrap original button in container
        originalSubmitBtn.parentNode.insertBefore(whatsappBtnContainer, originalSubmitBtn);
        whatsappBtnContainer.appendChild(originalSubmitBtn);
        
        // Create WhatsApp button
        const whatsappBtn = document.createElement('button');
        whatsappBtn.type = 'button';
        whatsappBtn.className = 'btn btn-whatsapp submit-btn';
        whatsappBtn.innerHTML = `
            <i class="fab fa-whatsapp"></i>
            Send via WhatsApp
        `;
        
        // Style WhatsApp button
        whatsappBtn.style.background = '#25D366';
        whatsappBtn.style.color = 'white';
        whatsappBtn.style.border = 'none';
        whatsappBtn.style.padding = '15px 25px';
        whatsappBtn.style.borderRadius = '8px';
        whatsappBtn.style.fontWeight = '600';
        whatsappBtn.style.cursor = 'pointer';
        whatsappBtn.style.transition = 'all 0.3s ease';
        whatsappBtn.style.flex = '1';
        whatsappBtn.style.minWidth = '200px';
        
        whatsappBtn.onmouseenter = () => {
            whatsappBtn.style.background = '#128C7E';
            whatsappBtn.style.transform = 'translateY(-2px)';
        };
        
        whatsappBtn.onmouseleave = () => {
            whatsappBtn.style.background = '#25D366';
            whatsappBtn.style.transform = 'translateY(0)';
        };
        
        whatsappBtnContainer.appendChild(whatsappBtn);
        
        // WhatsApp button click handler
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Validate required fields
            if (!name || !phone) {
                showWhatsAppError('Please fill in at least Name and Phone Number');
                return;
            }
            
            // Service display names
            const serviceNames = {
                'fitouts': 'Interior Fitouts',
                'mep': 'MEP Services', 
                'digital': 'Digital Solutions',
                'all': 'All Services'
            };
            
            // Create formatted WhatsApp message
            const whatsappMessage = createWhatsAppMessage({
                name,
                phone: phone || 'Not provided',
                email: email || 'Not provided',
                service: serviceNames[service] || service,
                message: message || 'No additional details provided',
                date: new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                time: new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            });
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Show loading state
            whatsappBtn.classList.add('loading');
            whatsappBtn.innerHTML = `
                <i class="fas fa-spinner fa-spin"></i>
                Opening WhatsApp...
            `;
            
            // Open WhatsApp in new tab after short delay
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                
                // Reset button
                setTimeout(() => {
                    whatsappBtn.classList.remove('loading');
                    whatsappBtn.innerHTML = `
                        <i class="fab fa-whatsapp"></i>
                        Send via WhatsApp
                    `;
                    
                    // Show success message
                    showWhatsAppSuccess(name);
                    
                    // Clear form after WhatsApp submission (optional)
                    // contactForm.reset();
                }, 1000);
                
            }, 500);
        });
    }
    
    // Function to create formatted WhatsApp message
function createWhatsAppMessage(data) {
    // Service display names
    const serviceNames = {
        'fitouts': 'Interior Fitouts',
        'mep': 'MEP Services', 
        'digital': 'Digital Solutions',
        'all': 'All Services'
    };
    
    return `NEW PROJECT INQUIRY - ADMAL LLC WEBSITE

CLIENT INFORMATION
Name: ${data.name}
Contact Number: ${data.phone}
Email Address: ${data.email}
Service Interest: ${serviceNames[data.service] || data.service}
Inquiry Date: ${new Date().toLocaleDateString()}

PROJECT DESCRIPTION
${data.message}

PREFERRED CONTACT METHOD
Please contact me via ${data.phone ? 'phone' : 'email'} to discuss this project further.

Thank you,

${data.name}

Note: This inquiry was submitted through the ADMAL LLC website contact form.`;
}
    
    // Function to show WhatsApp success message
    function showWhatsAppSuccess(name) {
        // Create or get success message element
        let successMsg = document.querySelector('.whatsapp-success');
        if (!successMsg) {
            successMsg = document.createElement('div');
            successMsg.className = 'whatsapp-success form-success';
            successMsg.style.display = 'none';
            successMsg.style.marginTop = '15px';
            successMsg.style.padding = '15px';
            successMsg.style.borderRadius = '8px';
            successMsg.style.background = '#25D36620';
            successMsg.style.border = '1px solid #25D366';
            successMsg.style.color = '#075E54';
            
            const whatsappBtnContainer = document.querySelector('.whatsapp-btn-container');
            if (whatsappBtnContainer) {
                whatsappBtnContainer.parentNode.insertBefore(successMsg, whatsappBtnContainer.nextSibling);
            }
        }
        
        successMsg.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fab fa-whatsapp" style="font-size: 1.5em;"></i>
                <div>
                    <strong>WhatsApp message ready!</strong><br>
                    WhatsApp should open with a pre-filled message for ${name}.<br>
                    <small>Please review and send to contact us.</small>
                </div>
            </div>
            <div style="margin-top: 10px; padding: 8px; background: white; border-radius: 5px; font-size: 0.85em;">
                <i class="fas fa-lightbulb"></i> 
                <strong>Tip:</strong> If WhatsApp doesn't open, please send the message manually to +${whatsappNumber}
            </div>
        `;
        
        successMsg.style.display = 'block';
        
        // Hide message after 8 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 8000);
    }
    
    // Function to show WhatsApp error message
    function showWhatsAppError(message) {
        // Create or get error message element
        let errorMsg = document.querySelector('.whatsapp-error');
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'whatsapp-error form-error';
            errorMsg.style.display = 'none';
            errorMsg.style.marginTop = '15px';
            errorMsg.style.padding = '15px';
            errorMsg.style.borderRadius = '8px';
            errorMsg.style.background = '#FF000020';
            errorMsg.style.border = '1px solid #FF0000';
            errorMsg.style.color = '#CC0000';
            
            const whatsappBtnContainer = document.querySelector('.whatsapp-btn-container');
            if (whatsappBtnContainer) {
                whatsappBtnContainer.parentNode.insertBefore(errorMsg, whatsappBtnContainer.nextSibling);
            }
        }
        
        errorMsg.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-exclamation-circle"></i>
                <div>
                    <strong>Unable to send via WhatsApp</strong><br>
                    ${message}
                </div>
            </div>
        `;
        
        errorMsg.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 5000);
    }
    
    // Add CSS styles for WhatsApp button states
    const style = document.createElement('style');
    style.textContent = `
        .btn-whatsapp.loading {
            opacity: 0.8;
            cursor: not-allowed;
        }
        
        .btn-whatsapp.loading:hover {
            transform: none !important;
        }
        
        @keyframes whatsappPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        
        .btn-whatsapp {
            animation: whatsappPulse 2s infinite;
        }
        
        .form-success.show {
            display: block !important;
            animation: fadeIn 0.3s ease;
        }
        
        .whatsapp-success {
            animation: fadeIn 0.3s ease;
        }
        
        .whatsapp-error {
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .whatsapp-btn-container {
                flex-direction: column;
            }
            
            .btn-whatsapp, .submit-btn {
                width: 100% !important;
                min-width: auto !important;
            }
        }
    `;
    document.head.appendChild(style);
});

// ===== WhatsApp Link for Phone Numbers =====
document.addEventListener('DOMContentLoaded', function() {
    // Make phone numbers clickable with WhatsApp
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        const phoneNumber = link.getAttribute('href').replace('tel:+', '').trim();
        const cleanNumber = phoneNumber.replace(/\D/g, '');
        
        // Create WhatsApp alternative link
        const whatsappLink = document.createElement('a');
        whatsappLink.href = `https://wa.me/${cleanNumber}`;
        whatsappLink.className = 'whatsapp-contact-link';
        whatsappLink.innerHTML = `
            <i class="fab fa-whatsapp"></i>
            WhatsApp
        `;
        whatsappLink.style.marginLeft = '10px';
        whatsappLink.style.fontSize = '0.85em';
        whatsappLink.style.color = '#25D366';
        whatsappLink.style.textDecoration = 'none';
        whatsappLink.style.border = '1px solid #25D366';
        whatsappLink.style.padding = '4px 10px';
        whatsappLink.style.borderRadius = '4px';
        whatsappLink.style.display = 'inline-block';
        whatsappLink.style.marginTop = '5px';
        
        whatsappLink.addEventListener('mouseenter', () => {
            whatsappLink.style.background = '#25D366';
            whatsappLink.style.color = 'white';
        });
        
        whatsappLink.addEventListener('mouseleave', () => {
            whatsappLink.style.background = 'transparent';
            whatsappLink.style.color = '#25D366';
        });
        
        // Insert WhatsApp link after phone link
        link.parentNode.insertBefore(whatsappLink, link.nextSibling);
    });
});

// ===== Mobile WhatsApp Detection =====
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is on mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add mobile-specific WhatsApp enhancements
        const whatsappBtns = document.querySelectorAll('.btn-whatsapp');
        whatsappBtns.forEach(btn => {
            btn.setAttribute('data-mobile', 'true');
            
            // Add instruction for mobile users
            const mobileTip = document.createElement('div');
            mobileTip.className = 'mobile-whatsapp-tip';
            mobileTip.innerHTML = `
                <small style="color: #666; display: block; margin-top: 5px;">
                    <i class="fas fa-mobile-alt"></i> 
                    Tap to open in WhatsApp app
                </small>
            `;
            
            btn.parentNode.appendChild(mobileTip);
        });
    }
});