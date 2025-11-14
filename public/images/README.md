# Images Directory

This directory contains all image assets for the Yudam's Life blog.

## Required Images for SEO & AdSense

### 1. OG Image (Open Graph)
- **Filename:** `og-image.jpg`
- **Size:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **Purpose:** Displayed when sharing links on social media (Facebook, Twitter, LinkedIn)
- **Current Status:** ⚠️ **PLACEHOLDER NEEDED**

### 2. Logo
- **Filename:** `logo.png`
- **Size:** 600 x 315 pixels
- **Format:** PNG (transparent background recommended)
- **Purpose:** Used in Schema.org structured data for publisher identification
- **Current Status:** ⚠️ **PLACEHOLDER NEEDED**

## How to Add Images

1. Create your images with the exact dimensions specified above
2. Save them with the exact filenames listed
3. Place them in this directory (`/public/images/`)
4. Run `npm run build` to regenerate static pages
5. Deploy with `npm run deploy`

## Temporary Solution

Until you create custom images, you can use:
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
- `index.html` - OG meta tags
- `posts/*.html` - Schema.org structured data
- SEO meta tags throughout the site

Missing these images won't break the site, but will reduce SEO effectiveness and social media shareability.
