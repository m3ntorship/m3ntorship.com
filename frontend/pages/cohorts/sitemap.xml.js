import axios from 'axios';

const SiteMap = () => {
  return null;
};

export default SiteMap;

export async function getServerSideProps({ res }) {
  const { data: batches } = await axios.get(`${process.env.url}/batches`);
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(batches));
  res.end();

  return { props: {} };
}

const createSitemap = batches => {
  let batchesXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${batches
          .map(({ batch_slug, updatedAt }) => {
            return `
                    <url>
                        <loc>${`https://m3ntorship.com/cohorts/${batch_slug}`}</loc>
                        <lastmod>${updatedAt}</lastmod>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;
  return batchesXml;
};
