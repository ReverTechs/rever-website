# Blessings Chilemba - Personal Portfolio Website

A stunning, modern personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases my skills, projects, and professional experience as a Full-Stack Developer and UI/UX Designer.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations and transitions
- **Portfolio Showcase**: Interactive project gallery with filtering capabilities
- **Skills Section**: Animated skill bars and technology badges
- **Contact Form**: Functional contact form with validation
- **Dark/Light Theme**: Built-in theme switching with next-themes
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Performance**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)
- **Theme**: next-themes
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── about.tsx            # About section
│   ├── contact.tsx          # Contact section
│   ├── hero.tsx             # Hero section
│   ├── navigation.tsx       # Navigation component
│   └── portfolio.tsx        # Portfolio section
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rever-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- `components/hero.tsx` - Update name, title, and description
- `components/about.tsx` - Update your story and skills
- `components/portfolio.tsx` - Add your projects
- `components/contact.tsx` - Update contact information and social links
- `app/layout.tsx` - Update metadata and SEO information

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update `app/globals.css` for global styles
- Customize component styles in individual component files

### Projects
Add your projects in `components/portfolio.tsx` by updating the `projects` array with:
- Project title and description
- Technologies used
- Live demo and GitHub links
- Project category for filtering

## 📱 Sections

### Hero Section
- Personal introduction with animated text
- Call-to-action buttons
- Social media links
- Smooth scroll navigation

### About Section
- Personal story and experience
- Animated skill bars
- Achievement statistics
- Technology badges

### Portfolio Section
- Project showcase with filtering
- Featured projects highlight
- Technology tags
- Live demo and GitHub links

### Contact Section
- Contact information
- Functional contact form
- Social media links
- Availability status

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

**Blessings Chilemba**
- Email: blessings@example.com
- LinkedIn: [linkedin.com/in/blessings-chilemba](https://linkedin.com)
- GitHub: [github.com/blessings-chilemba](https://github.com)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS