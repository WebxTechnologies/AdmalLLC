document.addEventListener('DOMContentLoaded', function() {
    // ===== Mobile Navigation for Gallery Page =====
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

    // ===== Smooth Scrolling for Gallery Page =====
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
                
                // Close mobile menu if open
                if (mobileToggle && mobileNav) {
                    mobileToggle.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });

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

    // ===== Preloader =====
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
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

    // ===== Initialize Full Gallery =====
    if (typeof initFullGallery === 'function') {
        initFullGallery();
    }
    
    // ===== Initialize Fancybox =====
    if (typeof initFancybox === 'function') {
        initFancybox();
    }
    
    console.log('Gallery page loaded successfully');
});
