const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

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

console.log('🚀 정적 페이지 생성 시작...');
console.log('📝 참고: 이 스크립트는 content/posts/*.md 파일을 읽어 SEO를 위한 정적 HTML 페이지를 생성합니다.');

// 포스트 디렉토리 생성
const postsDir = path.join(__dirname, '../public/posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
  console.log('✅ /public/posts 디렉토리 생성 완료');
}

// content/posts/ 디렉토리에서 .md 파일 읽기
const contentDir = path.join(__dirname, '../content/posts');
if (!fs.existsSync(contentDir)) {
  console.error('❌ content/posts/ 디렉토리가 없습니다. 먼저 .md 파일을 생성하세요.');
  process.exit(1);
}

const mdFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
if (mdFiles.length === 0) {
  console.error('❌ content/posts/ 디렉토리에 .md 파일이 없습니다.');
  process.exit(1);
}

console.log(`📂 ${mdFiles.length}개의 .md 파일 발견`);

// .md 파일들을 파싱하여 포스트 데이터 배열 생성
const posts = mdFiles.map(file => {
  const filePath = path.join(contentDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  // content가 HTML이면 그대로, 마크다운이면 변환
  const htmlContent = content.trim().startsWith('<') ? content : marked(content);

  return {
    id: data.slug || file.replace('.md', ''),
    title: data.title,
    slug: data.slug || file.replace('.md', ''),
    category: data.category,
    excerpt: data.excerpt,
    content: htmlContent,
    date: data.date,
    views: 0,
    image: data.image || null
  };
});

// 날짜 기준 정렬 (최신순)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// 관련 글 링크 생성 함수
function getRelatedPostsHTML(currentPost) {
  // 같은 카테고리 우선, 그 다음 다른 카테고리
  const sameCategory = posts.filter(p => p.id !== currentPost.id && p.category === currentPost.category);
  const otherCategory = posts.filter(p => p.id !== currentPost.id && p.category !== currentPost.category);
  const related = [...sameCategory, ...otherCategory].slice(0, 3);

  if (related.length === 0) return '<p><a href="/">← 전체 글 목록으로 돌아가기</a></p>';

  let html = '<ul style="list-style: none; padding: 0;">';
  related.forEach(p => {
    html += `<li style="margin-bottom: 1rem; padding: 1rem; background: var(--bg-light); border-radius: 8px;">
      <a href="/posts/${p.slug}.html" style="text-decoration: none; color: var(--text-dark);">
        <span style="display: inline-block; background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; margin-bottom: 0.3rem;">${p.category}</span><br>
        <strong>${p.title}</strong>
      </a>
    </li>`;
  });
  html += '</ul>';
  html += '<p style="margin-top: 1rem;"><a href="/">← 전체 글 목록으로 돌아가기</a></p>';
  return html;
}

// 포스트 템플릿 생성 함수
function generatePostHTML(post) {
  const imageSection = post.image
    ? `<div style="text-align: center; margin-bottom: 2rem;">
         <img src="${post.image}" alt="${post.title}" class="article-featured-image" width="1200" height="630" loading="lazy">
       </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | 고등학생 과학논문 코칭</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="author" content="Youdam">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://youdam.com/posts/${post.slug}.html">

    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:url" content="https://youdam.com/posts/${post.slug}.html">
    ${post.image ? `<meta property="og:image" content="${post.image}">` : '<meta property="og:image" content="https://youdam.com/images/og-image.svg">'}
    <meta property="og:site_name" content="고등학생 과학논문 코칭">
    <meta property="og:locale" content="ko_KR">
    <meta property="article:published_time" content="${post.date}">
    <meta property="article:section" content="${post.category}">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    ${post.image ? `<meta name="twitter:image" content="${post.image}">` : '<meta name="twitter:image" content="https://youdam.com/images/og-image.svg">'}

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
        "name": "Youdam",
        "url": "https://youdam.com/about.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "고등학생 과학논문 코칭",
        "logo": {
          "@type": "ImageObject",
          "url": "https://youdam.com/images/logo.svg",
          "width": 600,
          "height": 315
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://youdam.com/posts/${post.slug}.html"
      },
      "articleSection": "${post.category}",
      "inLanguage": "ko-KR",
      "keywords": ["${post.category}", "과학논문", "고등학생", "R&E", "논문작성"]
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
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.8;
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
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 1.5rem;
            align-items: center;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--text-medium);
            font-weight: 500;
            transition: color 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.95rem;
        }

        .nav-menu a:hover {
            color: var(--primary-color);
            background: var(--bg-light);
        }

        .main-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }

        .breadcrumb {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .breadcrumb a {
            color: var(--primary-color);
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
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
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border-light);
        }

        .article-category {
            display: inline-block;
            background: var(--primary-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .article-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        .article-meta {
            display: flex;
            gap: 1.5rem;
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .article-meta i {
            margin-right: 0.4rem;
        }

        .article-featured-image {
            width: 100%;
            max-height: 450px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: var(--shadow-md);
        }

        .article-body {
            font-size: 1.1rem;
            line-height: 1.9;
            color: var(--text-dark);
        }

        .article-body h2 {
            margin: 2.5rem 0 1rem;
            color: var(--text-dark);
            font-size: 1.6rem;
            font-weight: 600;
            border-left: 4px solid var(--primary-color);
            padding-left: 1rem;
        }

        .article-body h3 {
            margin: 2rem 0 0.8rem;
            color: var(--text-dark);
            font-size: 1.3rem;
            font-weight: 600;
        }

        .article-body p {
            margin-bottom: 1.5rem;
        }

        .article-body ul, .article-body ol {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
        }

        .article-body li {
            margin-bottom: 0.7rem;
        }

        .article-body blockquote {
            border-left: 4px solid var(--primary-color);
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            background: var(--bg-light);
            border-radius: 0 8px 8px 0;
            font-style: italic;
        }

        .article-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }

        .article-body th, .article-body td {
            border: 1px solid var(--border-light);
            padding: 0.75rem;
            text-align: left;
        }

        .article-body th {
            background: var(--bg-light);
            font-weight: 600;
        }

        .ad-container {
            margin: 2.5rem 0;
            padding: 1.5rem;
            background: var(--bg-light);
            border-radius: 8px;
            text-align: center;
        }

        .related-posts {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border-light);
        }

        .related-posts h3 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }

        .footer {
            background: var(--text-dark);
            color: white;
            text-align: center;
            padding: 3rem 2rem;
            margin-top: 3rem;
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .footer h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        .footer p {
            opacity: 0.8;
            margin-bottom: 1.5rem;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1.5rem;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .footer-links a:hover {
            opacity: 1;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 1.5rem;
            opacity: 0.6;
            font-size: 0.85rem;
        }

        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .article-title {
                font-size: 1.7rem;
            }

            .article-view {
                padding: 2rem 1.5rem;
            }

            .main-content {
                padding: 2rem 1rem;
            }

            .article-meta {
                flex-direction: column;
                gap: 0.5rem;
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
                    <i class="fas fa-pen-fancy"></i>
                </div>
                <span class="logo-text">과학논문 코칭</span>
            </a>

            <ul class="nav-menu">
                <li><a href="/">홈</a></li>
                <li><a href="/about.html">소개</a></li>
                <li><a href="/contact.html">문의</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <nav class="breadcrumb">
            <a href="/">홈</a> &gt; <a href="/?category=${encodeURIComponent(post.category)}">${post.category}</a> &gt; ${post.title}
        </nav>

        <article class="article-view" itemscope itemtype="https://schema.org/BlogPosting">
            <header class="article-header">
                <span class="article-category">${post.category}</span>
                <h1 class="article-title" itemprop="headline">${post.title}</h1>
                <div class="article-meta">
                    <span><i class="fas fa-user"></i> <span itemprop="author">Youdam</span></span>
                    <span><i class="fas fa-calendar"></i> <time datetime="${post.date}" itemprop="datePublished">${new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                    <span><i class="fas fa-folder"></i> <span itemprop="articleSection">${post.category}</span></span>
                </div>
            </header>

            ${imageSection}

            <div class="article-body" itemprop="articleBody">
                ${post.content}
            </div>

            <!-- AdSense Ad Slot -->
            <div class="ad-container">
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-client="ca-pub-3718064189631211"
                     data-ad-slot="1234567890"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>

            <meta itemprop="dateModified" content="${post.date}">
        </article>

        <section class="related-posts">
            <h3>관련 글 추천</h3>
            ${getRelatedPostsHTML(post)}
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <h3>고등학생 과학논문 코칭</h3>
            <p>10년 경력 대학 강사의 체계적인 논문 작성 가이드</p>
            <div class="footer-links">
                <a href="/about.html">소개</a>
                <a href="/contact.html">문의</a>
                <a href="/privacy-policy.html">개인정보처리방침</a>
                <a href="/terms-of-service.html">이용약관</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 고등학생 과학논문 코칭. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
}

// 포스트 생성
console.log('📝 포스트 페이지 생성 중...');
posts.forEach(post => {
  const html = generatePostHTML(post);
  const filepath = path.join(postsDir, `${post.slug}.html`);
  fs.writeFileSync(filepath, html, 'utf8');
  console.log(`✅ 생성 완료: /posts/${post.slug}.html`);
});

console.log('');
console.log('✨ 정적 페이지 생성 완료!');
console.log(`📊 총 ${posts.length}개의 포스트 생성됨`);
console.log('');
console.log('📌 다음 단계:');
console.log('  1. npm run build - 사이트맵 생성');
console.log('  2. npm run deploy - Firebase 배포');
console.log('');
