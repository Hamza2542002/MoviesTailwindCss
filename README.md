# 🎬 Movies App - Tailwind CSS Version

A modern, responsive movie showcase website built with HTML and Tailwind CSS. This project demonstrates a complete refactoring from custom CSS to utility-first Tailwind CSS framework.

## 🔗 Quick Links

- [🚀 Live Demo](#-live-demo)
- [🌟 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🔧 Key Tailwind Classes](#-key-tailwind-classes-used)
- [🎯 Refactoring Highlights](#-refactoring-highlights)
- [📋 Sections Overview](#-sections-overview)
- [🎨 Custom Components](#-custom-components)
- [🚀 Getting Started](#-getting-started)
- [📝 Customization Guide](#-customization-guide)

## 🚀 Live Demo

🌐 **[View Live Demo](https://hamza2542002.github.io/MoviesTailwindCss/)**

You can also open `index.html` in your browser to view the website locally.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and modern movie showcase interface
- **Interactive Elements**: Hover effects and smooth transitions
- **Movie Sections**: 
  - Featured movies currently showing
  - Coming soon movies preview
  - Newsletter subscription
- **Navigation**: Fixed navigation with mobile hamburger menu
- **Social Media Integration**: Footer with social media links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Poppins font family
- **JavaScript**: Interactive navigation functionality

## 🚀 Live Demo

🌐 **[View Live Demo](https://hamza2542002.github.io/MoviesTailwindCss/)**

You can also open `index.html` in your browser to view the website locally.

## 📁 Project Structure

```
Refactor-Project/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── css/
│   ├── all.min.css         # Font Awesome icons
│   └── style.css           # Legacy CSS (commented out)
├── js/
│   └── main.js             # JavaScript functionality
├── img/                    # Movie posters and images
│   ├── home1.jpg
│   ├── home2.jpg
│   ├── home3.jpg
│   ├── m1.jpg - m10.jpg    # Current movies
│   └── coming1.jpg - coming10.jpg  # Upcoming movies
└── webfonts/               # Font Awesome font files
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#ff2c1f` (`red-600`)
- **Secondary Red**: `#fa1216` (`red-700`)
- **Dark Background**: `#020307` (`dark`)
- **Light**: `#ffffff` (`light`)

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette for the movie theme
- Extended breakpoints for better responsive design
- Custom animations and transitions

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Small**: `sm:` (≥ 640px)
- **Medium**: `md:` (≥ 768px)
- **Large**: `lg:` (≥ 1024px)
- **Extra Large**: `xl:` (≥ 1280px)

## 🔧 Key Tailwind Classes Used

### Layout & Spacing
- `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
- `flex justify-between items-center`
- `px-4 md:px-20 py-3`
- `gap-4 space-y-2`

### Typography
- `font-[Poppins]` - Custom font family
- `text-xl font-semibold uppercase`
- `text-4xl md:text-6xl font-bold`

### Colors & Backgrounds
- `bg-dark text-white`
- `bg-red-600 hover:bg-red-700`
- `text-red-600`

### Effects & Animations
- `hover:-translate-y-2 transition-transform duration-300`
- `hover:after:w-full after:transition-all`
- `cursor-pointer`

## 🎯 Refactoring Highlights

This project showcases the migration from custom CSS to Tailwind CSS:

### Before (Custom CSS)
```css
.btn {
  background-color: var(--main-color);
  color: var(--bg-color);
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
}
```

### After (Tailwind CSS)
```html
<a href="#" class="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
```

### Benefits Achieved
- **Reduced CSS Bundle Size**: Eliminated custom CSS file
- **Improved Maintainability**: Utility classes are self-documenting
- **Better Responsiveness**: Built-in responsive utilities
- **Faster Development**: No need to write custom CSS
- **Consistency**: Standardized spacing and sizing

## 📋 Sections Overview

### 1. Navigation Bar
- Fixed position with backdrop blur effect
- Responsive hamburger menu for mobile
- Smooth scroll navigation links
- Custom red accent colors

### 2. Hero Section
- Full-screen background image
- Prominent movie title display
- Call-to-action button

### 3. Movies Section
- Grid layout showcasing current movies
- Hover effects on movie posters
- Movie titles and metadata

### 4. Coming Soon Section
- Preview of upcoming movie releases
- Similar grid layout with hover animations
- Movie information display

### 5. Newsletter Section
- Email subscription form
- Centered layout with custom styling
- Responsive form design

### 6. Footer
- Social media links with hover effects
- Company branding
- Copyright information

## 🔄 Mobile Responsiveness

The website adapts to different screen sizes:
- **Mobile (< 768px)**: Single column layout, hamburger menu
- **Tablet (768px - 1024px)**: 2-3 column grid layout
- **Desktop (> 1024px)**: 4-5 column grid layout

## 🎨 Custom Components

### Movie Cards
```html
<div class="space-y-2">
  <div class="w-full h-72">
    <img src="img/m1.jpg" class="w-full h-full object-cover hover:-translate-y-2 transition-transform duration-300 cursor-pointer" />
  </div>
  <h3 class="text-red-600 font-medium text-sm">Movie Title</h3>
  <span class="text-sm">120min | Genre</span>
</div>
```

### Navigation Links with Underline Effect
```html
<a href="#home" class="relative after:block after:w-full after:h-1 after:bg-red-600 hover:after:w-full after:transition-all hover:text-red-700 transition w-fit">Home</a>
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **Customize** the content and images as needed
4. **Deploy** to your preferred hosting platform

## 📝 Customization Guide

### Adding New Movies
1. Add movie poster images to the `img/` folder
2. Update the HTML with new movie cards in the movies or coming soon sections
3. Follow the existing card structure

### Changing Colors
Modify the Tailwind configuration in the `<head>` section:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        red: {
          600: 'ff2c1f',
          700: 'fa1216'
        }
      }
    }
  }
}
```

### Adding New Sections
Use Tailwind utility classes following the established patterns:
- Use `py-16 pt-[7rem]` for section spacing
- Follow the grid system: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
- Maintain the `max-w-6xl mx-auto` container pattern

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first framework
- **Font Awesome** for the icon library
- **Google Fonts** for the typography
- **Unsplash/Movie Studios** for placeholder images

---

**Built with ❤️ using Tailwind CSS**
