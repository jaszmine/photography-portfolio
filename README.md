<img src="/public/logo-full.png" alt="Logo" align="right"/>

<p>&nbsp;</p>

# Professional Photography Portfolio

This is the code for my professional photography portfolio. 

<br>

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<br>

## Main Pages

- Home.jsx
- Portfolio.jsx
- About.jsx
- Contact.jsx

<br>

## Folder Structure

```tree
.
├── README.md                       # Project documentation
├── index.html                      # Main HTML entry point (Vite injects JS/CSS here)
├── postcss.config.js               # PostCSS configuration for processing Tailwind CSS
├── public                          # Static assets served directly (no processing)
│   ├── JD-photography_logo.png     # Brand logo 
│   ├── favicon.svg                 
│   ├── icons.svg                   
│   └── images                      # All photography image assets
│       ├── about                       # Profile/headshot images for About page
│       ├── graduation                  # Graduation ceremony photos
│       ├── landscape                   # Landscape/nature photography
│       ├── liminal                     # Liminal/empty space photography
│       ├── portraits                   # Portrait and event photography
│       └── travel                      # Travel and street photography
├── src
│   ├── App.css                     # Global component styles (legacy, mostly replaced by Tailwind)
│   ├── App.jsx                     # Main React component with routing setup
│   ├── assets                      # Static assets like fonts, icons (processed by Vite)
│   ├── components                  # Reusable UI components
│   │   ├── forms                   # Form components (ContactForm, etc.)
│   │   ├── layout                  # Layout/wrapper components
│   │   │   ├── Footer.jsx          # Footer with links and copyright
│   │   │   ├── Layout.jsx          # Wrapper component with Navbar + Footer
│   │   │   └── Navbar.jsx          # Responsive navigation bar with mobile menu
│   │   └── ui                      # Presentational UI components
│   │       ├── CategoryFilter.jsx    # Filter buttons for portfolio categories
│   │       ├── FloatingBlobs.jsx     # Animated background gradient blobs
│   │       ├── GalleryGrid.jsx       # Responsive image grid layout
│   │       ├── ImageCard.jsx         # Individual image card with hover effects
│   │       ├── Lightbox.jsx          # Fullscreen image viewer modal
│   │       └── PageTransition.jsx    # Smooth page transition animations
│   ├── data                        # Static data and config
│   │   └── images.js                 # Image data, categories, and helper functions
│   ├── hooks                       # Custom React hooks (useScrollAnimation, etc.)
│   ├── index.css                   # Global styles, Tailwind imports, and custom CSS
│   ├── main.jsx                    # React entry point with Router and root render
│   ├── pages                       # Full page components (route-level)
│   │   ├── About.jsx               # About page with bio, philosophy, and journey
│   │   ├── Contact.jsx             # Contact form and information page
│   │   ├── Home.jsx                # Landing page with hero, featured work, and stats
│   │   └── Portfolio.jsx           # Gallery page with category filtering
│   └── utils                       # Utility functions (SEO helpers, formatters, etc.)
├── tailwind.config.js              # Tailwind CSS configuration (colors, fonts, animations)
└── vite.config.js                  # Vite build configuration (plugins, server, optimization)
```

<br>

## Color Scheme:

### Base Colors
- ![#000000](https://placehold.co/12x12/f7edd7/f7edd7.png) Beige: `#f7edd7` - Background
- ![#fafafa](https://placehold.co/12x12/1A1A1A/1A1A1A.png) Dark Grey/Black: `#1A1A1A` - Text

### Accent Colors
- ![#ff0000](https://placehold.co/12x12/dfb73f/dfb73f.png) Yellow: `#dfb73f` - Graduation Category
- ![#00ff00](https://placehold.co/12x12/80934e/80934e.png) Green: `#80934e` - Landscape Category
- ![#0000ff](https://placehold.co/12x12/86b4ae/86b4ae.png) Turquoise: `#86b4ae` - Portraits/Events Category
- ![#00ffff](https://placehold.co/12x12/6b99b2/6b99b2.png) Blue: `#6b99b2` - Liminal Category, Main accent color

<br>

## License

> [!NOTE]
> The software/code in this repository is licensed under the **MIT License**. However, all graphical assets, photographs, and written bio content are **All Rights Reserved** and may not be reproduced without express written permission.
