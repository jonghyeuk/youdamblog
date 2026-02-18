const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const domain = 'https://youdam.com';

console.log('📡 RSS 피드 생성 시작...');

// content/posts/ 디렉토리에서 .md 파일 읽기
const contentDir = path.join(__dirname, '../content/posts');
if (!fs.existsSync(contentDir)) {
  console.error('❌ content/posts/ 디렉토리가 없습니다.');
  process.exit(1);
}

const mdFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

// .md 파일들을 파싱하여 포스트 데이터 생성
const posts = mdFiles.map(file => {
  const filePath = path.join(contentDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(raw);

  return {
    title: data.title,
    slug: data.slug || file.replace('.md', ''),
    category: data.category,
    excerpt: data.excerpt,
    date: data.date
  };
});

// 날짜 기준 정렬 (최신순)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// XML 특수문자 이스케이프
function escapeXml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// RSS XML 생성
const buildDate = new Date().toUTCString();
const items = posts.map(post => {
  const postDate = new Date(post.date).toUTCString();
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${domain}/posts/${post.slug}</link>
      <guid>${domain}/posts/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${postDate}</pubDate>
    </item>`;
}).join('\n');

const rssXML = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>고등학생 과학논문 코칭</title>
    <link>${domain}</link>
    <description>10년 경력 대학 강사가 알려주는 고등학생 과학논문 작성법. R&amp;E, 과학탐구, 소논문 작성부터 대입 준비까지 체계적인 코칭을 제공합니다.</description>
    <language>ko</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${domain}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

// rss.xml 저장
const rssPath = path.join(__dirname, '../public/rss.xml');
fs.writeFileSync(rssPath, rssXML, 'utf8');

console.log('✅ rss.xml 생성 완료 (' + posts.length + '개 포스트)');
console.log('📍 Location: /public/rss.xml');
console.log('');
