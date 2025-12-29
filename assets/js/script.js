// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
    
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// ===== Mobile Navigation =====
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}

if (mobileLinks.length > 0) {
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileToggle) mobileToggle.classList.remove('active');
            if (mobileNav) mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            updateActiveNavLink(targetId);
        }
    });
});

function updateActiveNavLink(targetId) {
    // Update desktop nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
    
    // Update mobile nav
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Back to top button
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Update active section based on scroll position
    updateActiveSection();
});

// ===== Back to Top Button =====
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Update Active Section =====
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

// ===== Animated Counter =====
const counters = document.querySelectorAll('.stat-number, .stat-number-large');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(), 1);
        } else {
            counter.innerText = target + '+';
        }
    });
};

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class
            entry.target.classList.add('animate-in');
            
            // Animate counters if they're in view
            if (entry.target.querySelector('.stat-number') || entry.target.querySelector('.stat-number-large')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .stat-card-large, .feature, .info-card').forEach(el => {
    observer.observe(el);
});

// ===== Gallery Data =====
const galleryData = [
    // Fitouts (more than 2)
    {
        id: 1,
        category: 'fitouts',
        title: 'Modern Office Fitout',
        description: 'Complete office interior with custom furniture and space optimization',
        image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'square'
    },
    {
        id: 2,
        category: 'fitouts',
        title: 'Luxury Kitchen Fitout',
        description: 'High-end kitchen design with premium materials and finishes',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'square'
    },
    {
        id: 3,
        category: 'fitouts',
        title: 'Hospitality Interior',
        description: 'Luxury hotel suite with custom furnishings',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'square'
    },
    {
        id: 4,
        category: 'fitouts',
        title: 'Minimalist Apartment',
        description: 'Clean, modern apartment design with smart storage solutions',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'portrait'
    },
    {
        id: 5,
        category: 'fitouts',
        title: 'Executive Boardroom',
        description: 'Professional boardroom with premium audio-visual integration',
        image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'landscape'
    },
    // MEP (more than 2)
    {
        id: 6,
        category: 'mep',
        title: 'Commercial MEP Integration',
        description: 'Integrated electrical and HVAC systems for a corporate building',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'portrait'
    },
    {
        id: 7,
        category: 'mep',
        title: 'Smart Electrical Systems',
        description: 'Advanced electrical wiring and smart home integration',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'portrait'
    },
    {
        id: 8,
        category: 'mep',
        title: 'Industrial Plumbing',
        description: 'Commercial-grade plumbing systems for industrial facility',
        image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'portrait'
    },
    {
        id: 9,
        category: 'mep',
        title: 'HVAC Installation',
        description: 'Energy-efficient heating and cooling systems',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'landscape'
    },
    {
        id: 10,
        category: 'mep',
        title: 'Electrical Control Panel',
        description: 'Custom electrical control panel installation',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'square'
    },
    // Digital (more than 2)
    {
        id: 11,
        category: 'digital',
        title: 'Retail Digital Signage',
        description: 'Interactive digital displays for a retail shopping experience',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'landscape'
    },
    {
        id: 12,
        category: 'digital',
        title: 'Corporate Display Wall',
        description: 'Large format LED video wall for corporate headquarters',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'landscape'
    },
    {
        id: 13,
        category: 'digital',
        title: 'Interactive Museum Display',
        description: 'Touchscreen interactive displays for museum exhibits',
        image: 'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'landscape'
    },
    {
        id: 14,
        category: 'digital',
        title: 'Outdoor LED Billboard',
        description: 'High-resolution outdoor advertising display',
        image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'landscape'
    },
    {
        id: 15,
        category: 'digital',
        title: 'Digital Menu Boards',
        description: 'Interactive menu displays for restaurants and cafes',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        aspect: 'square'
    }
];

// ===== Shuffle Array Function =====
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ===== Get Random Items by Category =====
function getRandomItemsByCategory(items, itemsPerCategory = 2) {
    const categories = ['fitouts', 'mep', 'digital'];
    let selectedItems = [];
    
    categories.forEach(category => {
        const categoryItems = items.filter(item => item.category === category);
        const shuffled = shuffleArray(categoryItems);
        selectedItems.push(...shuffled.slice(0, itemsPerCategory));
    });
    
    return shuffleArray(selectedItems); // Shuffle final selection
}

// ===== Category Names =====
const categoryNames = {
    'fitouts': 'Interior Fitouts',
    'mep': 'MEP Services',
    'digital': 'Digital Solutions'
};

// ===== Create Gallery Item Element =====
function createGalleryItem(item) {
    const galleryItem = document.createElement('a');
    galleryItem.href = item.image;
    galleryItem.setAttribute('data-fancybox', 'gallery');
    galleryItem.setAttribute('data-caption', `<h3>${item.title}</h3><p>${item.description}</p><span class="gallery-category">${categoryNames[item.category]}</span>`);
    galleryItem.className = `gallery-item`;
    galleryItem.setAttribute('data-category', item.category);
    
    // Remove aspect ratio class addition since all images will be square
    // const aspectClass = item.aspect === 'portrait' ? 'aspect-portrait' : 
    //                    item.aspect === 'landscape' ? 'aspect-landscape' : 'aspect-square';
    // galleryItem.classList.add(aspectClass);
    
    galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
            <div class="gallery-category">${categoryNames[item.category]}</div>
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-description">${item.description}</p>
        </div>
    `;
    
    return galleryItem;
}
// ===== Initialize Homepage Gallery =====
function initHomepageGallery() {
    const galleryGrid = document.querySelector('#gallery .gallery-grid');
    if (!galleryGrid) return;
    
    // Get 2 random items from each category (6 total)
    const homepageItems = getRandomItemsByCategory(galleryData, 2);
    
    galleryGrid.innerHTML = '';
    
    homepageItems.forEach((item) => {
        const galleryItem = createGalleryItem(item);
        galleryGrid.appendChild(galleryItem);
    });
    
    initFancybox();
}

// ===== Initialize Full Gallery =====
function initFullGallery() {
    const galleryGrid = document.querySelector('.full-gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    // Show all items for full gallery page
    galleryData.forEach((item) => {
        const galleryItem = createGalleryItem(item);
        galleryGrid.appendChild(galleryItem);
    });
    
    initFancybox();
    
    // Setup filter for full gallery
    setupGalleryFilter(galleryGrid, galleryData);
}

// ===== Setup Gallery Filter =====
function setupGalleryFilter(galleryGrid, items) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            const currentFilter = button.getAttribute('data-filter');
            let filteredItems;
            
            if (currentFilter === 'all') {
                filteredItems = items;
            } else {
                filteredItems = items.filter(item => item.category === currentFilter);
            }
            
            // Clear and render filtered items
            galleryGrid.innerHTML = '';
            filteredItems.forEach(item => {
                const galleryItem = createGalleryItem(item);
                galleryGrid.appendChild(galleryItem);
            });
            
            initFancybox();
        });
    });
}

// ===== Modify Load More Button =====
const loadMoreBtn = document.getElementById('load-more');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        // Redirect to gallery page
        window.location.href = 'gallery.html';
    });
    
    // Update homepage filter buttons
    const filterButtons = document.querySelectorAll('#gallery .filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get 2 random items from selected category
                const currentFilter = button.getAttribute('data-filter');
                let filteredItems;
                
                if (currentFilter === 'all') {
                    filteredItems = getRandomItemsByCategory(galleryData, 2);
                } else {
                    const categoryItems = galleryData.filter(item => item.category === currentFilter);
                    filteredItems = shuffleArray(categoryItems).slice(0, 6); // Show 6 items from selected category
                }
                
                // Update gallery grid
                const galleryGrid = document.querySelector('#gallery .gallery-grid');
                if (galleryGrid) {
                    galleryGrid.innerHTML = '';
                    filteredItems.forEach(item => {
                        const galleryItem = createGalleryItem(item);
                        galleryGrid.appendChild(galleryItem);
                    });
                    initFancybox();
                }
            });
        });
    }
}

// ===== Fancybox Gallery =====
function initFancybox() {
    if (typeof Fancybox === 'undefined') return;
    
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: false,
        Toolbar: true,
        infinite: true,
        animated: true,
        hideScrollbar: false,
        Carousel: {
            Navigation: true,
            Dots: true,
            infinite: true,
        },
        Images: {
            zoom: true,
            Panzoom: {
                maxScale: 5,
            },
        },
        on: {
            reveal: (fancybox, slide) => {
                // Add custom styling to caption
                const caption = slide.$caption;
                if (caption) {
                    caption.style.padding = '20px';
                    caption.style.background = 'rgba(15, 23, 42, 0.9)';
                    caption.style.backdropFilter = 'blur(10px)';
                    caption.style.borderRadius = '10px';
                }
            }
        }
    });
}

// ===== Testimonials Slider =====
const testimonials = [
    {
        name: "Address",
        role: "Hotels & Resorts",
        text: "Admal LLC transformed our entire office space. Their integrated approach saved us time and money, and the results are spectacular!",
        avatar: "assets/imgs/logos/address.png"
    },
    {
        name: "DAMAC Group",
        role: "Real Estate,tech,hospitality and sports",
        text: "The digital signage solutions they implemented have significantly improved our customer engagement. Professional service from start to finish.",
        avatar: "assets/imgs/logos/damac.png"
    },
    {
        name: "",
        role: "Manager, Luxury Hotels Group",
        text: "From MEP integration to interior design, Admal LLC delivered beyond our expectations. Their attention to detail is exceptional.",
        avatar: "assets/imgs/logos/emaar.png"
    },
        {
        name: "KCAL",
        role: "",
        text: "From MEP integration to interior design, Admal LLC delivered beyond our expectations. Their attention to detail is exceptional.",
        avatar: "assets/imgs/logos/kcal.png"
    },
];

const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');

let currentTestimonial = 0;

function initTestimonials() {
    if (!testimonialTrack) return;
    
    testimonialTrack.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial-item';
        testimonialItem.innerHTML = `
            <div class="testimonial-avatar">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" loading="lazy">
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        `;
        testimonialTrack.appendChild(testimonialItem);
    });
    
    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    if (testimonialTrack) {
        testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
}

if (testimonialPrev && testimonialNext) {
    testimonialPrev.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonialPosition();
    });
    
    testimonialNext.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonialPosition();
    });
}

// Auto-rotate testimonials
let testimonialInterval;

function startTestimonialRotation() {
    if (testimonialTrack) {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonialPosition();
        }, 5000);
    }
}

function stopTestimonialRotation() {
    clearInterval(testimonialInterval);
}

// Pause rotation on hover
if (testimonialTrack) {
    testimonialTrack.addEventListener('mouseenter', stopTestimonialRotation);
    testimonialTrack.addEventListener('mouseleave', startTestimonialRotation);
}

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
const submitBtn = document.querySelector('.submit-btn');
const formSuccess = document.querySelector('.form-success');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        if (submitBtn) {
            submitBtn.classList.add('loading');
        }
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Hide loading state
        if (submitBtn) {
            submitBtn.classList.remove('loading');
        }
        
        // Show success message
        if (formSuccess) {
            formSuccess.classList.add('show');
        }
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            if (formSuccess) {
                formSuccess.classList.remove('show');
            }
        }, 5000);
    });
}



// ===== Parallax Effect =====
function initParallax() {
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', () => {
        if (heroBackground) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    });
}

// ===== URL Filter Check =====
function checkUrlFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    
    if (filter && ['fitouts', 'mep', 'digital'].includes(filter)) {
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (filterBtn) {
            filterBtn.click();
            
            // Scroll to gallery
            setTimeout(() => {
                const gallerySection = document.querySelector('#gallery');
                if (gallerySection) {
                    window.scrollTo({
                        top: gallerySection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }
}

// ===== Service Cards Hover Effect =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== Newsletter Form =====
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input');
        const submitBtn = newsletterForm.querySelector('button');
        
        if (emailInput.value) {
            // Simulate subscription
            submitBtn.innerHTML = '<i class="fas fa-check"></i>';
            submitBtn.style.background = '#22c55e';
            
            setTimeout(() => {
                emailInput.value = '';
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
                submitBtn.style.background = '';
            }, 2000);
        }
    });
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on
    const isHomepage = document.querySelector('#gallery .gallery-grid');
    const isGalleryPage = document.querySelector('.full-gallery-grid');
    
    // Initialize appropriate gallery
    if (isHomepage) {
        initHomepageGallery();
    } else if (isGalleryPage) {
        initFullGallery();
    }
    
    // Initialize other components
    initTestimonials();
    initParallax();
    
    // Start testimonial rotation
    startTestimonialRotation();
    
    // Check for URL filters
    checkUrlFilter();
    
    // Update active section on load
    updateActiveSection();
});
// ===== Interactive Map =====
document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    // Accurate coordinates for Deira, Dubai
    const officeLocation = [25.245826432431002, 55.27310868026732];

    // Initialize map
    const map = L.map("map").setView(officeLocation, 15);

    // Load OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

     const googleMapsUrl =
        "https://maps.app.goo.gl/1UHjxUjGwXFCcMps8";
    // Custom marker
    const marker = L.marker(officeLocation).addTo(map);
        marker.on("click", function () {
        window.open(googleMapsUrl, "_blank");
    });

    // Popup info
    marker.bindPopup(`
        <strong>ADMAL CONTRACTING LLC</strong><br>
        Deira, Dubai, UAE<br>
        PO Box: 376460
    `).openPopup();
});
// Contact Form Email Client Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Service display names
            const serviceNames = {
                'fitouts': 'Interior Fitouts',
                'mep': 'MEP Services', 
                'digital': 'Digital Solutions',
                'all': 'All Services'
            };
            
            // Your email address
            const yourEmail = 'forcreative25@gmail.com';
            
            // Email subject
            const subject = `New Project Inquiry - ${serviceNames[service] || service}`;
            
            // Professional email body
            const body = `
NEW PROJECT INQUIRY - ADMAL LLC WEBSITE

CLIENT INFORMATION
Name: ${name}
Contact Number: ${phone}
Email Address: ${email}
Service Interest: ${serviceNames[service] || service}
Inquiry Date: ${new Date().toLocaleDateString()}

PROJECT DESCRIPTION
${message}

PREFERRED CONTACT METHOD
Please contact me via ${phone ? 'phone' : 'email'} to discuss this project further.

Thank you,

${name}

Note: This inquiry was submitted through the ADMAL LLC website contact form.
            `.trim();
            
            // Create mailto link
            const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client in new tab
            window.open(mailtoLink, '_blank');
            
            // Show success message
            const successMessage = contactForm.querySelector('.form-success');
            if (successMessage) {
                successMessage.style.display = 'block';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    Your email client is opening with a pre-filled message. Please review and send to contact us.
                    <div class="email-tip" style="font-size: 0.9em; margin-top: 8px; color: #666;">
                        <i class="fas fa-lightbulb"></i> Tip: Check your spam folder if you don't see our reply.
                    </div>
                `;
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                }, 3000);
                
                // Hide message after 8 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 8000);
            }
            
            // Track form submission
            console.log('Contact form submitted:', { name, service: serviceNames[service] });
        });
    }
});