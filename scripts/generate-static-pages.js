const fs = require('fs');
const path = require('path');

// Firebase 설정 (index.html에서 사용하는 것과 동일)
const firebaseConfig = {
  apiKey: "AIzaSyA-I1lfNy57idBTkj2NYxt2-yHQvHJGPlM",
  authDomain: "youdammain.firebaseapp.com",
  projectId: "youdammain",
  storageBucket: "youdammain.firebasestorage.app",
  messagingSenderId: "923242680713",
  appId: "1:923242680713:web:fb85da2af29598ec775158",
  measurementId: "G-KTLD09Z6DB"
};

console.log('🚀 Starting static page generation...');
console.log('📝 Note: This script generates template pages.');
console.log('💡 To generate pages from Firestore, you need to set up Firebase Admin SDK with service account.');

// 포스트 디렉토리 생성
const postsDir = path.join(__dirname, '../public/posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
  console.log('✅ Created /public/posts directory');
}

// 샘플 포스트 데이터 (나중에 Firestore에서 가져올 데이터)
const samplePosts = [
  {
    id: 'sample-health-post-1',
    title: '5 Morning Habits That Transformed My Health',
    slug: '5-morning-habits-transformed-health',
    category: 'Health',
    excerpt: 'Discover the simple morning routine that helped me boost energy, improve focus, and feel amazing every day.',
    content: `
      <h2>The Power of Morning Routines</h2>
      <p>After years of feeling sluggish and unfocused, I discovered that the secret to better health wasn't in expensive supplements or complicated diets—it was in how I started each day.</p>
      
      <h3>1. Wake Up Early (5:30 AM)</h3>
      <p>Getting up early gives me precious quiet time before the world demands my attention. This peaceful start sets a positive tone for the entire day.</p>
      
      <h3>2. Drink Water First Thing</h3>
      <p>Before coffee, before anything else, I drink a full glass of water. After 6-8 hours without hydration, your body needs this boost more than caffeine.</p>
      
      <h3>3. 10 Minutes of Meditation</h3>
      <p>Just 10 minutes of mindful breathing or guided meditation helps center my thoughts and reduce stress before the day begins.</p>
      
      <h3>4. Light Exercise or Stretching</h3>
      <p>I don't need a full workout—even 15 minutes of gentle yoga or a walk around the block gets my blood flowing and energy up.</p>
      
      <h3>5. Nutritious Breakfast</h3>
      <p>I fuel my body with protein, healthy fats, and complex carbs. My go-to: Greek yogurt with berries, nuts, and a drizzle of honey.</p>
      
      <h2>The Results</h2>
      <p>Within just two weeks of this routine, I noticed:</p>
      <ul>
        <li>More sustained energy throughout the day</li>
        <li>Better focus and productivity at work</li>
        <li>Improved mood and less stress</li>
        <li>Better sleep quality at night</li>
      </ul>
      
      <p>The key is consistency. Start with just one habit and gradually add others. Your future self will thank you!</p>
    `,
    date: '2024-11-12',
    views: 0,
    image: null
  }
];

// 포스트 템플릿 생성 함수
function generatePostHTML(post) {
  const imageSection = post.image 
    ? `<div style="text-align: center; margin-bottom: 2rem;">
         <img src="${post.image}" alt="${post.title}" class="article-featured-image" width="1200" height="630" loading="lazy">
       </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | Yudam's Life</title>
    <meta name="description" content="${post.excerpt}">
    <link rel="canonical" href="https://youdam.com/posts/${post.slug}.html">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:url" content="https://youdam.com/posts/${post.slug}.html">
    ${post.image ? `<meta property="og:image" content="${post.image}">` : ''}
    <meta property="og:site_name" content="Yudam's Life">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    ${post.image ? `<meta name="twitter:image" content="${post.image}">` : ''}
    
    <meta name="robots" content="index, follow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#2563eb">
    
    <!-- Google AdSense -->
    <meta name="google-adsense-account" content="ca-pub-3718064189631211">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3718064189631211" crossorigin="anonymous"></script>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KTLD09Z6DB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KTLD09Z6DB');
    </script>
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "description": "${post.excerpt}",
      "datePublished": "${post.date}",
      "dateModified": "${post.date}",
      "author": {
        "@type": "Person",
        "name": "Yudam",
        "url": "https://youdam.com/about.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Yudam's Life",
        "logo": {
          "@type": "ImageObject",
          "url": "https://youdam.com/images/logo.png",
          "width": 600,
          "height": 315
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://youdam.com/posts/${post.slug}.html"
      },
      "articleSection": "${post.category}",
      "keywords": ["health", "wellness", "lifestyle"]
    }
    </script>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #2563eb;
            --secondary-color: #0ea5e9;
            --accent-color: #10b981;
            --text-dark: #1f2937;
            --text-medium: #4b5563;
            --text-light: #6b7280;
            --bg-light: #f8fafc;
            --bg-white: #ffffff;
            --border-light: #e5e7eb;
            --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background-color: var(--bg-light);
            font-size: 16px;
        }

        .header {
            background: var(--bg-white);
            box-shadow: var(--shadow-sm);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid var(--border-light);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
        }

        .logo-text {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--text-medium);
            font-weight: 500;
            transition: color 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 8px;
        }

        .nav-menu a:hover {
            color: var(--primary-color);
            background: var(--bg-light);
        }

        .main-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
        }

        .back-btn:hover {
            color: #1d4ed8;
            transform: translateX(-2px);
        }

        .article-view {
            background: var(--bg-white);
            border-radius: 16px;
            padding: 3rem;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-light);
        }

        .article-header {
            margin-bottom: 2rem;
            text-align: center;
        }

        .article-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        .article-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            color: var(--text-light);
            font-size: 0.875rem;
            margin-bottom: 2rem;
        }

        .article-featured-image {
            width: 100%;
            max-height: 500px;
            object-fit: cover;
            border-radius: 16px;
            box-shadow: var(--shadow-lg);
        }

        .article-body {
            font-size: 1.125rem;
            line-height: 1.8;
            color: var(--text-dark);
        }

        .article-body h2 {
            margin: 2rem 0 1rem;
            color: var(--text-dark);
            font-size: 1.75rem;
        }

        .article-body h3 {
            margin: 1.5rem 0 1rem;
            color: var(--text-dark);
            font-size: 1.5rem;
        }

        .article-body p {
            margin-bottom: 1.5rem;
        }

        .article-body ul, .article-body ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
        }

        .article-body li {
            margin-bottom: 0.5rem;
        }

        .ad-container {
            margin: 3rem 0;
            text-align: center;
        }

        .footer {
            background: var(--text-dark);
            color: white;
            text-align: center;
            padding: 3rem 2rem 2rem;
            margin-top: 4rem;
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .footer h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .footer p {
            opacity: 0.8;
            margin-bottom: 2rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .social-link {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 2rem;
            opacity: 0.6;
            font-size: 0.875rem;
        }

        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .article-title {
                font-size: 2rem;
            }

            .article-view {
                padding: 2rem 1.5rem;
            }

            .main-content {
                padding: 2rem 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <a href="/" class="logo">
                <div class="logo-icon">
                    <i class="fas fa-leaf"></i>
                </div>
                <span class="logo-text">Yudam's Life</span>
            </a>
            
            <ul class="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/#health">Health</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <div class="main-content">
        <a href="/" class="back-btn">
            <i class="fas fa-arrow-left"></i>
            Back to Posts
        </a>

        <article class="article-view" itemscope itemtype="https://schema.org/BlogPosting">
            <div class="article-header">
                <h1 class="article-title" itemprop="headline">${post.title}</h1>
                <div class="article-meta">
                    <span><i class="fas fa-folder"></i> <span itemprop="articleSection">${post.category}</span></span>
                    <span><i class="fas fa-calendar"></i> <time datetime="${post.date}" itemprop="datePublished">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                </div>
            </div>
            
            ${imageSection}
            
            <div class="article-body" itemprop="articleBody">
                ${post.content}
            </div>

            <!-- AdSense Ad Slot (승인용 최소 1개) -->
            <div class="ad-container">
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-client="ca-pub-3718064189631211"
                     data-ad-slot="0000000000"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            
            <meta itemprop="author" content="Yudam">
            <meta itemprop="dateModified" content="${post.date}">
            <meta itemprop="publisher" content="Yudam's Life">
        </article>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <h3>Stay Connected</h3>
            <p>Follow along for the latest updates on health, fitness, and lifestyle tips</p>
            <div class="social-links">
                <a href="https://instagram.com/yudam_life" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/yudam_life" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="https://youtube.com/@yudam_life" class="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                <a href="https://facebook.com/yudam.life" class="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Yudam's Life. All rights reserved. | Made with ❤️ for better living</p>
        </div>
    </footer>
</body>
</html>`;
}

// 샘플 포스트 생성
console.log('📝 Generating sample post pages...');
samplePosts.forEach(post => {
  const html = generatePostHTML(post);
  const filepath = path.join(postsDir, `${post.slug}.html`);
  fs.writeFileSync(filepath, html, 'utf8');
  console.log(`✅ Generated: /posts/${post.slug}.html`);
});

console.log('');
console.log('✨ Static page generation complete!');
console.log('');
console.log('📌 Next steps:');
console.log('  1. Run "npm run build" to generate sitemap');
console.log('  2. Run "npm run deploy" to deploy to Firebase');
console.log('');
console.log('💡 To generate pages from Firestore:');
console.log('  - Set up Firebase Admin SDK with service account key');
console.log('  - Update this script to fetch posts from Firestore');
console.log('');
