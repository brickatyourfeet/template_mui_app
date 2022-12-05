const formatDate = require("../../scripts/formatDate");

export default function handler(req, res) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
    
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
    
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    ${Object.keys(pathsObj)
      .filter(path => path !== "/_document" && path !== "/_app")  //do not create entries for these
      .map(
        path => `<url>
      ${
        path === "/index"  //checks for this because /index is not actually our home route, its just /
          ? `<loc>https://rainierelixirs.com</loc>`
          : `<loc>https://rainierelixirs.com${path}</loc>`
      }
      <lastmod>${
        pathsObj[path].lastModified
          ? formatDate(new Date(pathsObj[path].lastModified))
          : today
      }</lastmod>
    </url>`
      )}
    </urlset>`

  res.end(xml)
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}