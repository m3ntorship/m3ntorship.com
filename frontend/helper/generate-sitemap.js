const fs = require('fs');

const globby = require('globby');

(async () => {
  const pages = await globby([
    'pages/**/*{.js,jsx}',
    '!pages/_*.jsx',
    '!pages/api',
    '!pages/**/{[slug].js,404.jsx}'
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace('pages', '')
                  .replace('.jsx', '')
                  .replace('.js', '');
                const route = path === '/index' ? '' : path;

                return `<url>
                            <loc>${`https://m3ntorship.com${route}`}</loc>
                            ${
                              path === '/index'
                                ? '<changefreq>monthly</changefreq>'
                                : ''
                            }
                          
                            <priority>${
                              path === '/batches/sitemap.xml' ? '0.5' : '0.9'
                            }</priority>
                        </url>`;
              })
              .join('')}
        </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
