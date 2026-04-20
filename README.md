# Personal Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Engaging hover effects and scroll animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form (ready for backend integration)
- **Performance Optimized**: Fast loading and smooth animations

## 📁 Project Structure

```
personal-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet with modern CSS
├── js/
│   └── script.js      # JavaScript for interactivity
├── images/            # Directory for images (add your own)
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for customization
- Optional: A local web server for testing

### Installation

1. **Download or Clone the Project**
   ```bash
   # If you have git installed
   git clone <your-repo-url>
   
   # Or simply download the ZIP file
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd personal-website
   ```

3. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or right-click and choose "Open with" your preferred browser

### Using a Local Server (Recommended)

For the best experience, use a local web server:

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js (http-server)**
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

**Option 3: Using VS Code**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### 1. Personal Information

Edit `index.html` to update:
- Your name in the hero section
- About me text
- Skills and technologies
- Project details
- Contact information
- Social media links

### 2. Colors and Styling

Edit `css/style.css` to customize:
- Color scheme (CSS variables at the top of the file)
- Fonts and typography
- Spacing and layout
- Animations and transitions

**CSS Variables:**
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary brand color */
    --text-color: #1f2937;         /* Main text color */
    --text-light: #6b7280;         /* Light text color */
    --bg-color: #ffffff;           /* Background color */
    --bg-light: #f9fafb;           /* Light background */
    --bg-dark: #111827;            /* Dark background */
}
```

### 3. Adding Images

1. Add your images to the `images/` directory
2. Update the image references in `index.html`
3. For project images, replace the placeholder divs with actual images:

```html
<!-- Replace this: -->
<div class="project-placeholder">Project 1</div>

<!-- With this: -->
<img src="images/project1.jpg" alt="Project 1">
```

### 4. Adding More Sections

To add a new section:

1. Add the HTML in `index.html`:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Add styling in `css/style.css`:
```css
.new-section {
    padding: 80px 0;
    /* Your styles here */
}
```

3. Add to navigation in `index.html`:
```html
<li><a href="#new-section">New Section</a></li>
```

## 📱 Sections Overview

### 1. Navigation Bar
- Fixed navigation with smooth scrolling
- Responsive hamburger menu for mobile
- Active link highlighting

### 2. Hero Section
- Eye-catching gradient background
- Animated typing effect for the title
- Call-to-action buttons

### 3. About Section
- Personal introduction
- Statistics/achievements counter
- Animated on scroll

### 4. Skills Section
- Grid layout of skills
- Icon-based cards
- Hover animations

### 5. Projects Section
- Portfolio showcase
- Project cards with descriptions
- Technology tags
- Links to live projects

### 6. Contact Section
- Contact information
- Social media links
- Contact form (ready for backend)

### 7. Footer
- Copyright information
- Additional links (optional)

## 🔧 JavaScript Features

The `js/script.js` file includes:

- **Mobile Navigation**: Toggle menu functionality
- **Smooth Scrolling**: Animated scroll to sections
- **Scroll Animations**: Reveal elements on scroll
- **Form Handling**: Contact form submission
- **Typing Effect**: Animated hero title
- **Active Link Highlighting**: Shows current section
- **Parallax Effect**: Hero section parallax
- **Counter Animation**: Animated statistics
- **Hover Effects**: Interactive card animations

## 🌐 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select the main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 📝 To-Do / Customization Checklist

- [ ] Replace "Your Name" with your actual name
- [ ] Update the about section with your information
- [ ] Add your actual skills and technologies
- [ ] Replace project placeholders with real projects
- [ ] Add project images to the images folder
- [ ] Update contact information (email, phone, location)
- [ ] Add your social media links
- [ ] Customize colors to match your brand
- [ ] Add a favicon (icon in browser tab)
- [ ] Test on different devices and browsers
- [ ] Optimize images for web
- [ ] Add meta tags for SEO
- [ ] Set up form backend (optional)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Tips

1. **Images**: Use optimized images (WebP format recommended)
2. **Performance**: Keep file sizes small for faster loading
3. **Accessibility**: Ensure good color contrast and add alt text to images
4. **SEO**: Add meta descriptions and proper heading hierarchy
5. **Testing**: Test on multiple devices and browsers before deploying

## 📞 Support

If you have any questions or need help customizing your website, feel free to:
- Open an issue on GitHub
- Reach out via the contact form on the website

---

**Happy Coding! 🚀**

Made with ❤️ and passion for web development