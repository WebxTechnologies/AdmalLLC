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

const galleryData = [
    {
        id: 1,
        category: 'fitouts',
        // title: 'Modern Office Fitout',
        // description: 'Complete office interior with custom furniture and space optimization',
        image: 'assets/imgs/InteriorFitouts/1.png',
        aspect: 'square'
    },
    {
        id: 2,
        category: 'fitouts',
        // title: 'Luxury Kitchen Fitout',
        // description: 'High-end kitchen design with premium materials and finishes',
        image: 'assets/imgs/InteriorFitouts/2.png',
        aspect: 'square'
    },
    {
        id: 3,
        category: 'fitouts',
        // title: 'Hospitality Interior',
        // description: 'Luxury hotel suite with custom furnishings',
        image: 'assets/imgs/InteriorFitouts/3.png',
        aspect: 'square'
    },
    {
        id: 4,
        category: 'fitouts',
        // title: 'Minimalist Apartment',
        // description: 'Clean, modern apartment design with smart storage solutions',
        image: 'assets/imgs/InteriorFitouts/4.png',
        aspect: 'portrait'
    },
    {
        id: 5,
        category: 'fitouts',
        // title: 'Executive Boardroom',
        // description: 'Professional boardroom with premium audio-visual integration',
        image: 'assets/imgs/InteriorFitouts/5.png',
        aspect: 'landscape'
    },
    {
        id: 6,
        category: 'fitouts',
        // title: 'Modern Office Fitout',
        // description: 'Complete office interior with custom furniture and space optimization',
        image: 'assets/imgs/InteriorFitouts/6.png',
        aspect: 'square'
    },
    {
        id: 7,
        category: 'fitouts',
        // title: 'Modern Office Fitout',
        // description: 'Complete office interior with custom furniture and space optimization',
        image: 'assets/imgs/InteriorFitouts/7.png',
        aspect: 'square'
    },
    {
        id: 8,
        category: 'fitouts',
        // title: 'Modern Office Fitout',
        // description: 'Complete office interior with custom furniture and space optimization',
        image: 'assets/imgs/InteriorFitouts/8.png',
        aspect: 'square'
    },
    {
        id: 9,
        category: 'fitouts',
        // title: 'Modern Office Fitout',
        // description: 'Complete office interior with custom furniture and space optimization',
        image: 'assets/imgs/InteriorFitouts/9.png',
        aspect: 'square'
    },
    {
        id: 10,
        category: 'fitouts',
        // title: 'Executive Boardroom',
        // description: 'Luxurious boardroom with premium finishes and integrated technology',
        image: 'assets/imgs/InteriorFitouts/10.png',
        aspect: 'square'
    },
    {
        id: 11,
        category: 'fitouts',
        // title: 'Corporate Lobby',
        // description: 'Impressive reception area with custom lighting and seating',
        image: 'assets/imgs/InteriorFitouts/11.png',
        aspect: 'square'
    },
    {
        id: 12,
        category: 'fitouts',
        // title: 'Open Workspace',
        // description: 'Collaborative work environment with ergonomic furniture',
        image: 'assets/imgs/InteriorFitouts/12.png',
        aspect: 'square'
    },
    {
        id: 13,
        category: 'fitouts',
        // title: 'Restaurant Dining',
        // description: 'Elegant restaurant interior with ambient lighting and custom seating',
        image: 'assets/imgs/InteriorFitouts/13.png',
        aspect: 'square'
    },
    {
        id: 14,
        category: 'fitouts',
        // title: 'Residential Living',
        // description: 'Modern apartment with smart home integration',
        image: 'assets/imgs/InteriorFitouts/14.png',
        aspect: 'square'
    },
    {
        id: 15,
        category: 'fitouts',
        // title: 'Hospitality Suite',
        // description: 'Luxury hotel suite with premium amenities',
        image: 'assets/imgs/InteriorFitouts/15.png',
        aspect: 'square'
    },
    {
        id: 16,
        category: 'fitouts',
        // title: 'Retail Store',
        // description: 'Contemporary retail space with strategic product display',
        image: 'assets/imgs/InteriorFitouts/16.png',
        aspect: 'square'
    },
    {
        id: 17,
        category: 'fitouts',
        // title: 'Luxury Hotel Lobby',
        // description: 'Grand entrance with custom lighting and premium materials',
        image: 'assets/imgs/InteriorFitouts/17.png',
        aspect: 'square'
    },
    {
        id: 18,
        category: 'fitouts',
        // title: 'Corporate Office Space',
        // description: 'Open plan workspace with ergonomic design',
        image: 'assets/imgs/InteriorFitouts/18.png',
        aspect: 'square'
    },
    {
        id: 19,
        category: 'fitouts',
        // title: 'Restaurant Interior',
        // description: 'Fine dining atmosphere with custom furniture',
        image: 'assets/imgs/InteriorFitouts/19.png',
        aspect: 'square'
    },
    {
        id: 20,
        category: 'fitouts',
        // title: 'Modern Retail Store',
        // description: 'Contemporary shopping experience with strategic displays',
        image: 'assets/imgs/InteriorFitouts/20.png',
        aspect: 'square'
    },
    {
        id: 21,
        category: 'fitouts',
        // title: 'Residential Apartment',
        // description: 'Luxury living space with smart home features',
        image: 'assets/imgs/InteriorFitouts/21.png',
        aspect: 'square'
    },
    {
        id: 22,
        category: 'fitouts',
        // title: 'Healthcare Facility',
        // description: 'Modern clinic with patient-friendly design',
        image: 'assets/imgs/InteriorFitouts/22.png',
        aspect: 'square'
    },
    {
        id: 23,
        category: 'fitouts',
        // title: 'Educational Institution',
        // description: 'Learning environment with collaborative spaces',
        image: 'assets/imgs/InteriorFitouts/23.png',
        aspect: 'square'
    },
    {
        id: 24,
        category: 'fitouts',
        // title: 'Wellness Center',
        // description: 'Spa and wellness facility with tranquil design',
        image: 'assets/imgs/InteriorFitouts/24.png',
        aspect: 'square'
    },
    {
        id: 25,
        category: 'fitouts',
        // title: 'Corporate Lounge',
        // description: 'Relaxation area for employees and clients',
        image: 'assets/imgs/InteriorFitouts/25.png',
        aspect: 'square'
    },
    {
        id: 26,
        category: 'fitouts',
        // title: 'Boutique Showroom',
        // description: 'Product display area with custom lighting',
        image: 'assets/imgs/InteriorFitouts/26.png',
        aspect: 'square'
    },
    {
        id: 27,
        category: 'fitouts',
        // title: 'Entertainment Lounge',
        // description: 'Recreational space with multimedia integration',
        image: 'assets/imgs/InteriorFitouts/27.png',
        aspect: 'square'
    },
    {
        id: 28,
        category: 'fitouts',
        // title: 'Corporate Library',
        // description: 'Knowledge center with reading areas',
        image: 'assets/imgs/InteriorFitouts/28.png',
        aspect: 'square'
    },
    {
        id: 29,
        category: 'fitouts',
        // title: 'Executive Office',
        // description: 'Premium workspace for senior management',
        image: 'assets/imgs/InteriorFitouts/29.png',
        aspect: 'square'
    },
    {
        id: 30,
        category: 'fitouts',
        // title: 'Cafeteria Design',
        // description: 'Dining area for corporate staff',
        image: 'assets/imgs/InteriorFitouts/30.png',
        aspect: 'square'
    },
    {
        id: 31,
        category: 'fitouts',
        // title: 'Reception Area',
        // description: 'Welcoming entrance with custom reception desk',
        image: 'assets/imgs/InteriorFitouts/31.png',
        aspect: 'square'
    },
    {
        id: 32,
        category: 'fitouts',
        // title: 'Training Room',
        // description: 'Educational space with modern teaching aids',
        image: 'assets/imgs/InteriorFitouts/32.png',
        aspect: 'square'
    },
    {
        id: 33,
        category: 'fitouts',
        // title: 'Luxury Villa',
        // description: 'High-end residential interior',
        image: 'assets/imgs/InteriorFitouts/33.png',
        aspect: 'square'
    },
    {
        id: 34,
        category: 'fitouts',
        // title: 'Co-working Space',
        // description: 'Flexible working environment for startups',
        image: 'assets/imgs/InteriorFitouts/34.png',
        aspect: 'square'
    },
    {
        id: 35,
        category: 'fitouts',
        // title: 'Medical Center',
        // description: 'Healthcare facility with modern amenities',
        image: 'assets/imgs/InteriorFitouts/35.png',
        aspect: 'square'
    },
    {
        id: 36,
        category: 'fitouts',
        // title: 'Banking Hall',
        // description: 'Financial institution with secure design',
        image: 'assets/imgs/InteriorFitouts/36.png',
        aspect: 'square'
    },
    {
        id: 37,
        category: 'fitouts',
        // title: 'Event Venue',
        // description: 'Multi-purpose space for corporate events',
        image: 'assets/imgs/InteriorFitouts/37.png',
        aspect: 'square'
    },
    {
        id: 38,
        category: 'mep',
        // title: 'Commercial MEP Integration',
        // description: 'Integrated electrical and HVAC systems for a corporate building',
        image: 'assets/imgs/MEPServices/1.png',
        aspect: 'portrait'
    },
    {
        id: 39,
        category: 'mep',
        // title: 'Electrical Substation',
        // description: 'Medium voltage electrical distribution setup',
        image: 'assets/imgs/MEPServices/2.png',
        aspect: 'square'
    },
    {
        id: 40,
        category: 'mep',
        // title: 'Ventilation System',
        // description: 'Industrial-grade ventilation for warehouse facility',
        image: 'assets/imgs/MEPServices/3.png',
        aspect: 'square'
    },
    {
        id: 41,
        category: 'mep',
        // title: 'Sanitary Plumbing',
        // description: 'Complete sanitary system installation',
        image: 'assets/imgs/MEPServices/4.png',
        aspect: 'square'
    },
    {
        id: 42,
        category: 'mep',
        // title: 'Sprinkler System',
        // description: 'Fire suppression sprinkler installation',
        image: 'assets/imgs/MEPServices/5.png',
        aspect: 'square'
    },
    {
        id: 43,
        category: 'mep',
        // title: 'Solar Power Integration',
        // description: 'Renewable energy system integration',
        image: 'assets/imgs/MEPServices/6.png',
        aspect: 'square'
    },
    {
        id: 44,
        category: 'mep',
        // title: 'Heat Recovery System',
        // description: 'Energy-efficient heat recovery installation',
        image: 'assets/imgs/MEPServices/7.png',
        aspect: 'square'
    },
    {
        id: 45,
        category: 'mep',
        // title: 'Emergency Lighting',
        // description: 'Safety lighting system for evacuation',
        image: 'assets/imgs/MEPServices/8.png',
        aspect: 'square'
    },
    {
        id: 46,
        category: 'mep',
        // title: 'Power Quality System',
        // description: 'Voltage regulation and power conditioning',
        image: 'assets/imgs/MEPServices/9.png',
        aspect: 'square'
    },
    {
        id: 47,
        category: 'mep',
        // title: 'BMS Installation',
        // description: 'Building Management System setup',
        image: 'assets/imgs/MEPServices/10.png',
        aspect: 'square'
    },
    {
        id: 48,
        category: 'digital',
        // title: 'Retail Digital Signage',
        // description: 'Interactive digital displays for a retail shopping experience',
        image: 'assets/imgs/DigitalSolutions/1.png',
        aspect: 'landscape'
    },
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

    galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
            <div class="gallery-category">${categoryNames[item.category]}</div>
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
        name: "The Address",
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
        name: "EMAAR",
        role: "",
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

document.addEventListener('DOMContentLoaded', () => {
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

    const googleMapsUrl = "https://maps.app.goo.gl/1UHjxUjGwXFCcMps8";
    
    // Custom marker
    const marker = L.marker(officeLocation).addTo(map);
    
    // Create popup content
    const popupContent = `
        <div style="min-width: 200px; padding: 10px;">
            <h3 style="margin: 0 0 10px 0; color: #1e3a8a;">ADMAL CONTRACTING LLC</h3>
            <p style="margin: 5px 0;"><strong>Location:</strong> Deira, Dubai, UAE</p>
            <p style="margin: 5px 0;"><strong>PO Box:</strong> 376460</p>
            <a href="${googleMapsUrl}" target="_blank" 
               style="display: inline-block; margin-top: 10px; padding: 8px 12px; background: #2563eb; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">
                <i class="fas fa-directions"></i> Get Directions
            </a>
        </div>
    `;

    // Create popup instance
    const popup = L.popup({
        closeButton: true,
        autoClose: false,
        closeOnEscapeKey: true,
        closeOnClick: false,
        className: 'company-popup'
    }).setContent(popupContent);

    // Bind popup to marker
    marker.bindPopup(popup);

    // Open popup after a short delay
    setTimeout(() => {
        marker.openPopup();
    }, 500);

    // Click event for marker
    marker.on("click", function (e) {
        // Prevent default behavior if needed
        e.originalEvent.preventDefault();
        window.open(googleMapsUrl, "_blank");
    });

    // Ensure map size is correct
    setTimeout(() => {
        map.invalidateSize();
    }, 100);

    // Add some CSS for the popup
    const style = document.createElement('style');
    style.textContent = `
        .company-popup .leaflet-popup-content-wrapper {
            border-radius: 8px;
            padding: 0;
        }
        .company-popup .leaflet-popup-content {
            margin: 0;
        }
        .leaflet-popup {
            z-index: 1000 !important;
        }
    `;
    document.head.appendChild(style);
});
// Contact Form Email Client Submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
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
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    const progressBar = document.querySelector('.progress-bar');
    const heroSection = document.querySelector('.hero');

    if (!slides.length || !progressBar) return;

    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000;
    const transitionDuration = 0;

    function goToSlide(index) {
        // Remove active classes from all slides
        slides.forEach(slide => {
            slide.classList.remove('active', 'fading');
        });

        // Remove active classes from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Reset progress bar
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        // Force reflow to reset animation
        void progressBar.offsetWidth;

        // Add active class to new slide
        slides[index].classList.add('active');

        // Add active class to corresponding indicator
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        // Start progress bar animation
        setTimeout(() => {
            progressBar.style.transition = `width ${slideDuration - transitionDuration}ms linear`;
            progressBar.style.width = '100%';
        }, transitionDuration);

        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;

        // Start fade out animation on current slide
        slides[currentSlide].classList.add('fading');

        // After fade out, switch to next slide
        setTimeout(() => {
            goToSlide(nextIndex);
        }, transitionDuration);
    }

    function startSlider() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Initialize slider
    goToSlide(0);
    startSlider();

    // Add click event to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== currentSlide) {
                // Start fade out animation on current slide
                slides[currentSlide].classList.add('fading');

                // After fade out, switch to clicked slide
                setTimeout(() => {
                    goToSlide(index);
                }, transitionDuration);

                // Restart auto-slide after manual change
                setTimeout(() => {
                    stopSlider();
                    startSlider();
                }, transitionDuration + 100);
            }
        });
    });

    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            // Pause progress bar
            const computedStyle = getComputedStyle(progressBar);
            const currentWidth = computedStyle.width;
            progressBar.style.transition = 'none';
            progressBar.style.width = currentWidth;

            stopSlider();
        });

        heroSection.addEventListener('mouseleave', () => {
            const remainingWidth = 100 - parseFloat(progressBar.style.width || '0');
            const remainingTime = (remainingWidth / 100) * (slideDuration - transitionDuration);

            progressBar.style.transition = `width ${remainingTime}ms linear`;
            progressBar.style.width = '100%';

            setTimeout(() => {
                startSlider();
            }, remainingTime);
        });
    }

    function updateParallax() {
        const activeSlide = document.querySelector('.slide.active');
        if (!activeSlide) return;

        const slideImage = activeSlide.querySelector('.slide-image');
        if (!slideImage) return;

        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Reduced parallax effect for smoother experience

        slideImage.style.transform = `translate3d(0, ${rate}px, 0) scale(1)`;
    }

    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);

    updateParallax();

    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            if (img.complete) {
                slide.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    slide.classList.add('loaded');
                });
            }
        }
    });
}
// ===== Clients Carousel =====
function initClientsCarousel() {
    const clientsTrack = document.getElementById('clients-track');
    const prevBtn = document.getElementById('prev-client');
    const nextBtn = document.getElementById('next-client');
    const currentCount = document.getElementById('current-client');
    const totalCount = document.getElementById('total-clients');

    if (!clientsTrack) return;

    // Client logos data
    const clients = [
        {
            id: 1,
            name: "The Address Hotels & Resorts",
            logo: "assets/imgs/logos/address.png",
            url: "https://www.addresshotels.com/"
        },
        {
            id: 2,
            name: "DAMAC Group",
            logo: "assets/imgs/logos/damac.png",
            url: "https://www.damacproperties.com/"
        },
        {
            id: 3,
            name: "EMAAR Properties",
            logo: "assets/imgs/logos/emaar.png",
            url: "https://www.emaar.com/"
        },
        {
            id: 4,
            name: "KCAL Restaurant Group",
            logo: "assets/imgs/logos/kcal.png",
            url: "https://kcalrestaurants.com/"
        },
        {
            id: 5,
            name: "Dubai International Airport",
            logo: "assets/imgs/logos/dubai-airport.png",
            url: "https://www.dubaiairports.ae/"
        },
        {
            id: 6,
            name: "Dubai Mall",
            logo: "assets/imgs/logos/dubai-mall.png",
            url: "https://thedubaimall.com/"
        },
        {
            id: 7,
            name: "Majid Al Futtaim",
            logo: "assets/imgs/logos/maf.png",
            url: "https://www.majidalfuttaim.com/"
        },
        {
            id: 8,
            name: "Nakheel",
            logo: "assets/imgs/logos/nakheel.png",
            url: "https://www.nakheel.com/"
        },
        {
            id: 9,
            name: "Dubai World Trade Centre",
            logo: "assets/imgs/logos/dwtc.png",
            url: "https://www.dwtc.com/"
        },
        {
            id: 10,
            name: "Meraas",
            logo: "assets/imgs/logos/meraas.png",
            url: "https://www.meraas.com/"
        },
        {
            id: 11,
            name: "Dubai Silicon Oasis",
            logo: "assets/imgs/logos/dso.png",
            url: "https://www.dsoa.ae/"
        },
        {
            id: 12,
            name: "Dubai Festival City",
            logo: "assets/imgs/logos/festival-city.png",
            url: "https://www.festivalcentre.com/"
        }
    ];

    // Create logo items
    function createClientLogo(client) {
        const logoItem = document.createElement('div');
        logoItem.className = 'client-logo-item';
        logoItem.setAttribute('data-client', client.name.toLowerCase().replace(/\s+/g, '-'));
        logoItem.title = client.name;

        const logoLink = document.createElement('a');
        logoLink.href = client.url;
        logoLink.target = '_blank';
        logoLink.rel = 'noopener noreferrer';

        const logoImg = document.createElement('img');
        logoImg.src = client.logo;
        logoImg.alt = `${client.name} Logo`;
        logoImg.className = 'client-logo';
        logoImg.loading = 'lazy';

        // Handle image load errors
        logoImg.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iI0YxRjVGOSIvPgo8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEycHgiIGZpbGw9IiM2NDc0OEIiIGZvbnQtd2VpZ2h0PSI2MDAiPgpDbGllbnQKPC90ZXh0Pgo8L3N2Zz4K';
            console.warn(`Failed to load logo: ${client.logo}`);
        };

        logoLink.appendChild(logoImg);
        logoItem.appendChild(logoLink);
        return logoItem;
    }

    // Initialize carousel
    function initCarousel() {
        clientsTrack.innerHTML = '';
        
        // Add client logos to track
        clients.forEach(client => {
            const logoItem = createClientLogo(client);
            clientsTrack.appendChild(logoItem);
        });

        // Duplicate items for seamless infinite scroll
        const duplicateCount = 2; // Number of times to duplicate
        for (let i = 0; i < duplicateCount; i++) {
            clients.forEach(client => {
                const logoItem = createClientLogo(client);
                clientsTrack.appendChild(logoItem);
            });
        }

        // Update counters
        if (totalCount) {
            totalCount.textContent = clients.length;
        }
        if (currentCount) {
            currentCount.textContent = '1';
        }
    }

    // Manual carousel controls
    let isAnimating = false;
    let currentPosition = 0;
    const itemWidth = 180 + parseInt(getComputedStyle(document.documentElement).getPropertyValue('--space-xl').replace('rem', '')) * 16;
    const visibleItems = 6;

    function scrollCarousel(direction) {
        if (isAnimating) return;
        
        isAnimating = true;
        const trackWidth = clients.length * itemWidth;
        
        if (direction === 'next') {
            currentPosition = (currentPosition + 1) % clients.length;
            clientsTrack.style.transform = `translateX(-${(currentPosition % clients.length) * itemWidth}px)`;
        } else {
            currentPosition = (currentPosition - 1 + clients.length) % clients.length;
            clientsTrack.style.transform = `translateX(-${(currentPosition % clients.length) * itemWidth}px)`;
        }

        // Update current count
        if (currentCount) {
            currentCount.textContent = currentPosition + 1;
        }

        // Reset animation flag
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    // Event listeners for buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => scrollCarousel('next'));
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollCarousel('prev');
        } else if (e.key === 'ArrowRight') {
            scrollCarousel('next');
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    clientsTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    clientsTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right - go to previous
                scrollCarousel('prev');
            } else {
                // Swipe left - go to next
                scrollCarousel('next');
            }
        }
    }

    // Auto-scroll with pause on hover
    let autoScrollInterval;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            scrollCarousel('next');
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto-scroll
    startAutoScroll();

    // Pause auto-scroll on hover
    clientsTrack.addEventListener('mouseenter', stopAutoScroll);
    clientsTrack.addEventListener('mouseleave', startAutoScroll);

    // Initialize carousel
    initCarousel();

    // Log carousel initialization
    console.log(`Clients carousel initialized with ${clients.length} clients`);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing DOMContentLoaded code ...
    
    // Initialize clients carousel
    initClientsCarousel();
    
    // ... rest of your initialization code ...
});

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();

    const isHomepage = document.querySelector('#gallery .gallery-grid');
    const isGalleryPage = document.querySelector('.full-gallery-grid');

    if (isHomepage) {
        initHomepageGallery();
    } else if (isGalleryPage) {
        initFullGallery();
    }

    initTestimonials();

    startTestimonialRotation();

    checkUrlFilter();

    updateActiveSection();
});