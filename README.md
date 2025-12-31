# ADMAL LLC Website

A modern, responsive website for ADMAL LLC - delivering comprehensive solutions in interior design, MEP engineering, and digital technology.

## Overview

This is a static HTML website built with vanilla JavaScript and CSS, designed to showcase ADMAL LLC's services and portfolio. The site features a modern design with smooth animations, interactive galleries, and comprehensive service information.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Dynamic Hero Slider**: Rotating banner showcasing different service categories
- **Gallery System**: Comprehensive project gallery with filtering capabilities
- **Contact Forms**: Client inquiry and quote request forms
- **Service Showcase**: Detailed information about interior fitouts, MEP services, and digital solutions
- **Vercel Web Analytics**: Integrated analytics tracking for visitor insights

## Vercel Web Analytics Integration

This website uses **Vercel Web Analytics** to track visitor behavior and page performance metrics. The analytics implementation is configured for static HTML delivery.

### Implementation Details

The analytics tracking is implemented through a simple script tag in the `<head>` section of HTML files:

```html
<!-- Vercel Web Analytics -->
<script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

This implementation is included in:
- `index.html` - Main homepage
- `gallery.html` - Project gallery page

### Features Tracked

Vercel Web Analytics automatically captures:
- Page views and unique visitors
- Core Web Vitals (LCP, FID, CLS)
- User interactions
- Navigation timing
- Server response times

### Accessing Analytics Data

Once deployed to Vercel, analytics data can be viewed in the Vercel Dashboard:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the ADMAL LLC project
3. Click the **Analytics** tab
4. View real-time and historical visitor data

### No Configuration Required

For static HTML sites deployed on Vercel, Web Analytics requires minimal setup:
- No package installation needed
- No API keys required in the code
- Automatically enabled when deployed to Vercel
- No performance impact on site speed

## Project Structure

```
├── index.html              # Main homepage
├── gallery.html            # Project gallery page
├── README.md              # This file
├── assets/
│   ├── css/
│   │   ├── style.css      # Main stylesheet
│   │   └── clients.css    # Client section styles
│   ├── js/
│   │   └── script.js      # Main JavaScript file
│   └── imgs/              # Images and logos
└── .vscode/              # VS Code settings
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - Interactive features
- **Leaflet.js** - Map integration
- **Font Awesome** - Icons
- **Google Fonts** - Typography
- **FancyBox** - Gallery lightbox
- **Vercel** - Hosting and Web Analytics

## Getting Started Locally

### Prerequisites

- A modern web browser
- (Optional) A local web server like Live Server

### Running Locally

1. Clone the repository
2. Open `index.html` in your browser, or
3. Use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Then visit http://localhost:8000
   ```

## Deployment to Vercel

### Prerequisites

- A Vercel account ([sign up for free](https://vercel.com/signup))
- The Vercel CLI installed:
  ```bash
  npm install -g vercel
  ```

### Deployment Steps

1. Install Vercel CLI (if not already installed)
2. In the project directory, run:
   ```bash
   vercel
   ```
3. Follow the interactive prompts
4. After deployment, Web Analytics will automatically be enabled
5. Visit the Vercel Dashboard to view analytics data

### Automatic Deployments

For continuous deployment from Git:
1. Connect your Git repository to Vercel
2. Enable automatic deployments on push to main branch
3. Each push will trigger a new deployment

## Web Analytics Notes

- **Analytics Routes**: Analytics tracking uses routes scoped at `/_vercel/insights/*` (automatically managed by Vercel)
- **Data Privacy**: Web Analytics respects privacy and complies with GDPR, CCPA, and other data protection standards
- **Performance**: Analytics scripts are optimized for minimal performance impact
- **No Route Support**: Static HTML sites don't have advanced route tracking; analytics tracks full page loads

## Contact

For inquiries about ADMAL LLC services, use the contact form on the website or visit the contact section.

## License

© 2024 ADMAL LLC. All rights reserved.
