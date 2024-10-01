# Personal Portfolio webpage
You will find my personal portfolio page from [https://svolain.github.io/](https://svolain.github.io/).
The site is responsive and renders on a variety of devices and window or screen sizes.

# index.html Documentation

## Overview
The `index.html` file serves as the main structure of the portfolio webpage. It integrates Bootstrap for responsive design and layout, ensuring a good user experience across various devices.

## Bootstrap Integration
This document includes Bootstrap via a CDN in the `<head>` section

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
crossorigin="anonymous">
```

Bootstrap provides various pre-defined classes that simplify the design of responsive layouts.

## Sections
1. **Header:** Contains the site logo and navigation links to different sections of the portfolio, including Home, About, Portfolio, and Contact.

2. **Home Section:** Features a welcoming message, a brief introduction, and links to the portfolio section, contact section, Github profile and LinkedIn profiles.

3. **About Section:** Provides background information, including education and skills.

4. **Portfolio Section:** Displays various projects, organized into cards for easy viewing. Each project has an image, title, description, and a link to its GitHub repository.

```html
<section class="portfolio py-5 text-center container" id="portfolio">
    <h1 class="album-h1">Web Development</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
            <div class="card">
                <img src="images/html-logo.png" class="card-img-top" alt="html logo">
                <div class="card-body">
                    <h5 class="card-title">Portfolio Page</h5>
                    <p class="card-text">Curious about how this portfolio was built?...</p>
                </div>
            </div>
        </div>
        <!-- Additional project cards -->
    </div>
</section>
```

5. **Contact Section:** Contains contact information and links to social media profiles.

## Accessibility Considerations
**Alt Attributes:** All images have descriptive alt attributes, enhancing accessibility for screen readers.
**Navigation:** The navigation links use clear and descriptive text for better usability.

# styles.css Documentation

## Overview
The `styles.css` file defines the visual styling for the webpage. It incorporates responsive design principles to ensure a smooth user experience across various devices.

## Font Imports &  Global Styles
This stylesheet imports the **Poppins** font from Google Fonts, providing a modern and clean typography throughout the webpage.

The universal `*` selector resets default margins and paddings across all elements, applies the box-sizing model, and sets the default font family.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
```

## Header Styles
**The header** is styled to be fixed at the top with a transparent background, containing a logo and a navbar for navigation.

## Home Section Styles
**The .home section** has a background image and centers its content. Headings and paragraphs are styled with specific font sizes, and animations are applied for a dynamic entrance effect.

## About Section Styles
1. **The .about section** uses flexbox to center its content and maintain full viewport height.
2. **The .about-img is a** circular image with specific height and width, centered within the section.
3. **The .about-content** has a set width and is aligned to the center for a clean look

## Portfolio Section Styles
1. **The .album-h1** defines the title for the portfolio section with responsive sizing and centered alignment.
2. **Each .card acts** as a portfolio item, with a vertical layout and a background color that ensures contrast.
3. **The .card-img-top** styles the image to fit well within the card, maintaining its aspect ratio.
4. **The .card-body** allows for flexible content layout while keeping the card's design consistent.

## Keyframes and Animations
The @keyframes showRight animation creates a dynamic entrance effect for elements within the home section.

## Media Queries
Responsive design is achieved through media queries that adjust styles for smaller screens, such as changing button layouts and image sizes.
