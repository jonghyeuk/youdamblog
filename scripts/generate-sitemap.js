const fs = require('fs');
const path = require('path');

const domain = 'https://youdam.com';

console.log('🗺️  Generating sitemap.xml...');

// 정적 페이지 목록
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
  { url: '/terms-of-service', priority: 0.5, changefreq: 'yearly' },
  { url: '/download', priority: 0.7, changefreq: 'monthly' }
];

// 포스트 디렉토리에서 HTML 파일 읽기
const postsDir = path.join(__dirname, '../public/posts');
let postPages = [];

if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir);
  postPages = files
    .filter(file => file.endsWith('.html'))
    .map(file => ({
      url: `/posts/${file.replace('.html', '')}`,
      priority: 0.9,
      changefreq: 'weekly'
    }));
  console.log('✅ Found ' + postPages.length + ' post pages');
}

// 모든 페이지 결합
const allPages = [...staticPages, ...postPages];

// sitemap.xml 생성
const lastmod = new Date().toISOString().split('T')[0];

const urlEntries = allPages.map(page => 
  `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
).join('\n');

const sitemapXML = '<?xml version="1.0" encoding="UTF-8"?>\n' +
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
urlEntries + '\n' +
'</urlset>';

// sitemap.xml 저장
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');

console.log('✅ sitemap.xml generated with ' + allPages.length + ' URLs');
console.log('📍 Location: /public/sitemap.xml');
console.log('');
