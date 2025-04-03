# CustomTech Landing Page

A modern, high-performance landing page for CustomTech, a company specializing in custom software-hardware integration solutions, particularly with Suprema devices.

## Technologies Used

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **SEO:** Built-in Next.js SEO optimization

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern UI with smooth animations
- Optimized for performance
- Accessible design
- SEO-friendly
- Contact form with validation

## Sections

1. **Hero Section:** Introducing CustomTech with clear CTAs
2. **About Section:** Company mission, vision, and expertise
3. **Services Section:** Detailed service offerings with icons
4. **Why Choose Us:** Key differentiators with statistics and testimonials
5. **Contact Section:** Contact form and company information
6. **Footer:** Additional navigation and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/customtech-landing.git
cd customtech-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

To build for production:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## Project Structure

```
customtech-landing/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                 # UI components from shadcn/ui
│   └── sections/           # Page sections
├── public/                 # Static assets
│   └── images/             # Image assets
├── styles/                 # Global styles
└── lib/                    # Utility functions
```

## Customization

### Images

Replace the placeholder images in the `/public/images/` directory with your own images:

- `hero-image.jpg` - Hero section background
- `about-image.jpg` - About section image
- `why-choose-us.jpg` - Why Choose Us section image
- `og-image.jpg` - Open Graph image for social sharing

### Colors

The color scheme can be adjusted in the Tailwind configuration file (`tailwind.config.js`).

## License

[MIT](https://choosealicense.com/licenses/mit/)
