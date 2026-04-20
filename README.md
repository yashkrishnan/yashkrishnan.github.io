# Yashwanth Krishnan - Personal Website

A modern, multi-page personal portfolio website built with IBM Carbon Design System, showcasing professional experience, technical skills, and projects.

## 🌟 Features

- **Multi-page Architecture**: Separate pages for different sections (About, Experience, Skills, Projects, Education, Downloads, Contact)
- **IBM Carbon Design System**: Professional design language with consistent theming
- **Responsive Design**: Mobile-friendly navigation and layouts
- **Interactive Elements**: Hover effects, smooth transitions, and dynamic content
- **Downloadable Resources**: Resume and portfolio PDF downloads
- **Contact Form**: Integrated contact form with social links

## 📁 Project Structure

```
personal-website/
├── index.html          # Landing page with hero section
├── about.html          # Professional summary and background
├── experience.html     # Work history (13+ years)
├── skills.html         # Technical skills and expertise
├── projects.html       # 10 technical projects
├── education.html      # Academic background and certifications
├── downloads.html      # Resume and portfolio downloads
├── contact.html        # Contact form and information
├── css/
│   └── style.css      # IBM Carbon Design System styles
├── js/
│   └── script.js      # Interactive functionality
├── images/            # Image assets
├── files/             # Downloadable documents (excluded from git)
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## 🎨 Design System

Built with **IBM Carbon Design System** featuring:
- IBM Plex Sans font family
- Carbon color palette (#0f62fe primary blue)
- Flat design principles
- Consistent spacing and typography
- Professional card-based layouts

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone git@github.com:yashkrishnan/yashkrishnan.github.io.git
cd yashkrishnan.github.io
```

2. Open `index.html` in your browser:
```bash
open index.html
# or
python -m http.server 8000
```

### Local Development

For local development with a static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Publish to GitHub Pages

This repository is ready to be published as a GitHub Pages site.

### Recommended repository setup

Use the repository name `yashkrishnan.github.io`. With that name, GitHub will publish the site directly at `https://yashkrishnan.github.io/`.

### Files required for publishing

- Keep `index.html` at the repository root
- Keep all linked assets in tracked folders such as `css/`, `js/`, and `images/`
- Commit the `files/` directory too if you want resume downloads to work on the live site
- Keep the existing `CNAME` file only if you are using a custom domain

### Publish steps

1. Push this project to GitHub:
```bash
git init
git add .
git commit -m "Initial GitHub Pages site"
git branch -M main
git remote add origin git@github.com:yashkrishnan/yashkrishnan.github.io.git
git push -u origin main
```

2. In GitHub, open **Settings → Pages**

3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`

4. Save the settings and wait a minute for deployment

5. Open the published site:
```text
https://yashkrishnan.github.io/
```

### Important note about downloads

Previously, `.gitignore` excluded the `files/` directory. That would prevent downloadable assets like your resume PDF from being published. This has been fixed, so the `files/` directory can now be committed and deployed.

## 📄 Pages Overview

### Home (index.html)
- Hero section with professional introduction
- Quick stats (13+ years experience, 10+ technologies, 5+ projects)
- "What I Do" highlights
- Current role at IBM WatsonX.Data
- Quick navigation links

### About (about.html)
- Professional summary
- Technical expertise
- Career highlights
- Statistics and achievements

### Experience (experience.html)
- Complete work history (5 positions)
- IBM WatsonX.Data (Dec 2023 - Present)
- Litmus7 (Aug 2019 - Nov 2023)
- LuLu International Exchange (Jun 2018 - Aug 2019)
- C-DIT (Nov 2013 - Apr 2015)
- Solutions Infotech (Feb 2013 - Jan 2015)

### Skills (skills.html)
- Java/SpringBoot
- Python
- JavaScript/React
- DevOps & Cloud
- Databases
- Cloud Platforms

### Projects (projects.html)
- IBM WatsonX Data (Featured)
- Document Extraction using LLMs
- SnapRapid Platform
- CareerLabs
- SafeGuard
- Semantic Ontologies
- Instio
- E-Commerce Platform
- LuLu Money
- StatFuel

### Education (education.html)
- MCA from Cochin University (2010-2013)
- MongoDB Certification
- NIELIT Certification
- Teaching experience at C-DIT

### Downloads (downloads.html)
- ATS-optimized resume
- Comprehensive portfolio
- Direct download links

### Contact (contact.html)
- Contact form
- Email: yashwanthkrishnan@gmail.com
- Phone: +91 9895742428
- Location: Bangalore, India
- Social links (LinkedIn, GitHub)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: IBM Carbon Design System styling
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **IBM Plex Sans**: Typography
- **Git**: Version control

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-friendly navigation (hamburger menu)
- Flexible grid layouts
- Optimized images and content
- Touch-friendly interactive elements

## 🎯 Key Highlights

- **13+ years** of professional experience
- **Team Lead** at IBM WatsonX.Data
- **10+ technologies** mastered
- **5+ major projects** delivered
- **Full-stack expertise** in Java, Python, JavaScript
- **Cloud & DevOps** proficiency

## 📝 License

© 2024 Yashwanth Krishnan. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For suggestions or feedback, please reach out via:
- Email: yashwanthkrishnan@gmail.com
- LinkedIn: [linkedin.com/in/yashwanth-krishnan](https://www.linkedin.com/in/yashwanth-krishnan/)

## 🔗 Links

- **Website**: [yashkrishnan.github.io](https://yashkrishnan.github.io/)
- **LinkedIn**: [linkedin.com/in/yashwanth-krishnan](https://www.linkedin.com/in/yashwanth-krishnan/)
- **GitHub**: [github.com/yashkrishnan/yashkrishnan.github.io](https://github.com/yashkrishnan/yashkrishnan.github.io)

---

Built with ❤️ and passion for clean code and great design.