const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: any) => {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
      <loc>https://www.bancodetrocas.com.br/</loc>
      <lastmod>2023-01-05T13:47:59+00:00</lastmod>
      <priority>1.0</priority>
      </url>
      <url>
      <loc>https://www.bancodetrocas.com.br/imovels/create</loc>
      <lastmod>2023-01-05T13:47:59+00:00</lastmod>
      <priority>1.0</priority>
      </url>
      </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
