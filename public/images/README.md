# Images Directory

This directory contains all image assets for the Yudam's Life blog.

## Current Images

### 1. OG Image (Open Graph)
- **Filename:** `og-image.svg` ✓
- **Size:** 1200 x 630 pixels
- **Format:** SVG (current), JPG/PNG recommended for better social media compatibility
- **Purpose:** Displayed when sharing links on social media (Facebook, Twitter, LinkedIn)
- **Current Status:** ✓ **SVG PLACEHOLDER ACTIVE**
- **Design:** Purple gradient with "Yudam's Life" branding and tagline

### 2. Logo
- **Filename:** `logo.svg` ✓
- **Size:** 600 x 315 pixels
- **Format:** SVG (current), PNG recommended for better compatibility
- **Purpose:** Used in Schema.org structured data for publisher identification
- **Current Status:** ✓ **SVG PLACEHOLDER ACTIVE**
- **Design:** Purple gradient with "Y" icon and "Yudam's Life" branding

## How to Add Images

1. Create your images with the exact dimensions specified above
2. Save them with the exact filenames listed
3. Place them in this directory (`/public/images/`)
4. Run `npm run build` to regenerate static pages
5. Deploy with `npm run deploy`

## Converting SVG to JPG/PNG (Optional)

The current SVG placeholders work well, but converting to JPG/PNG provides better compatibility:

### Online Conversion (Easiest)
1. Visit [CloudConvert](https://cloudconvert.com/svg-to-jpg)
2. Upload `og-image.svg` → Convert to JPG (quality: 85-90%)
3. Upload `logo.svg` → Convert to PNG
4. Download and replace files

### Command Line (if you have ImageMagick)
```bash
convert og-image.svg -quality 90 og-image.jpg
convert logo.svg logo.png
```

## Creating Custom Designs (Optional)

To replace placeholders with custom designs:
- **Free tools:** Canva, Figma, Photoshop
- **Stock photos:** Unsplash, Pexels (with proper licensing)
- **AI generators:** DALL-E, Midjourney, Stable Diffusion

## Image Optimization Tips

- **Compress images** before uploading (use TinyPNG, ImageOptim)
- **Use WebP format** when possible for better performance
- **Add descriptive alt text** to all images for SEO and accessibility
- **Lazy load** images below the fold

---

**Note:** These images are referenced in:
- `index.html` - OG meta tags and Schema.org Blog structured data
- `posts/*.html` - OG meta tags and Schema.org BlogPosting structured data
- `about.html`, `contact.html` - OG meta tags
- SEO meta tags throughout the site

Current SVG placeholders are fully functional. Converting to JPG/PNG is optional for improved social media compatibility.
