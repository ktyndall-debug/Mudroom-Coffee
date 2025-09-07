# The Mudroom Coffee Company Website

A modern, responsive website for The Mudroom Coffee Company in Chinquapin, NC.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Typography**: Uses Google Fonts (Playfair Display + Source Sans Pro)
- **High-Quality Stock Images**: Professional Unsplash images that can be easily replaced
- **Interactive Countdown**: Live countdown timer for grand opening
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Newsletter Signup**: Email subscription form for updates
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading images and throttled scroll events

## File Structure

```
mudroom-coffee-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Image Sources

All images are from Unsplash and can be replaced with your own photos:

1. **Hero Image**: Cozy coffee shop interior
2. **About Section**: Barista preparing coffee & coffee beans/equipment
3. **Menu Section**: 
   - Specialty coffee drinks
   - Fresh pastries and baked goods
   - Artisan sandwiches and light meals
4. **Location Section**: Scenic view of rural North Carolina

## Getting Started

### Option 1: Simple Setup (Recommended for beginners)
1. Open `index.html` in any web browser to view the website locally
2. Edit the HTML content directly in `index.html`
3. Customize colors and styles in `styles.css`
4. Upload all files to any web hosting service

### Option 2: Live Server (Recommended for development)
1. Install a code editor like Visual Studio Code
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"
4. The website will open with live reload for easier editing

## Hosting Options

### Free Hosting:
- **Netlify**: Drag and drop all files to deploy instantly
- **Vercel**: Connect to GitHub and deploy automatically
- **GitHub Pages**: Host directly from a GitHub repository
- **Firebase Hosting**: Google's free hosting solution

### Paid Hosting:
- **Hostinger**: Affordable shared hosting
- **SiteGround**: WordPress and static site hosting
- **DigitalOcean**: VPS hosting for more control

## Customization Guide

### 1. Update Business Information
Edit these sections in `index.html`:
- Company name and tagline
- Address and contact information
- Opening hours
- Menu items and descriptions

### 2. Replace Images
Replace the Unsplash URLs with your own images:
- Take high-quality photos of your coffee shop
- Optimize images for web (recommend under 500KB each)
- Update the `src` attributes in the HTML

### 3. Customize Colors
Main colors in `styles.css`:
- `#2c1810` - Dark brown (text)
- `#8B4513` - Medium brown (accents)
- `#D2691E` - Light brown/orange (highlights)
- `#fafafa` - Off-white (background)

### 4. Update Countdown Date
In `script.js`, find the `updateCountdown()` function and change:
```javascript
const openingDate = new Date('2025-MM-DD').getTime();
```

### 5. Connect Newsletter Form
The newsletter form currently shows a success message. To connect it to an email service:
- Use services like Mailchimp, ConvertKit, or EmailJS
- Replace the form submission code in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Enable Gzip**: Configure your server to compress files
3. **Use CDN**: Consider using a Content Delivery Network
4. **Minimize HTTP Requests**: Combine CSS/JS files if needed

## SEO Checklist

- [x] Semantic HTML structure
- [x] Meta description and keywords
- [x] Proper heading hierarchy (H1, H2, H3)
- [x] Alt text for all images
- [x] Fast loading times
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Add local business schema markup

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios
- Focus indicators
- ARIA labels where needed

## Future Enhancements

Consider adding these features later:
- Online ordering system
- Customer reviews section
- Blog/news section
- Event calendar
- Social media feed integration
- Google Maps integration
- Multi-language support

## Support

For questions or help with customization:
1. Check the comments in the code files
2. Search for solutions online
3. Consider hiring a local web developer for advanced features

## License

This template is provided for The Mudroom Coffee Company's use. The code structure can be adapted for other projects, but please replace all business-specific content and images.