import axios from 'axios';

const SiteMap = () => {
  return null;
};

export default SiteMap;

export async function getServerSideProps({ res }) {
  const { data: projects } = await axios.get(`${process.env.url}/projects`);
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(projects));
  res.end();

  return { props: {} };
}

const createSitemap = projects => {
  let projectsXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${projects
          .map(({ project_slug, updatedAt }) => {
            return `
                    <url>
                        <loc>${`https://m3ntorship.com/projects/${project_slug}`}</loc>
                        <lastmod>${updatedAt}</lastmod>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;
  return projectsXml;
};
