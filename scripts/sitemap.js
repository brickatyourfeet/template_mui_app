const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://rainierelixirs.com/sitemap_local.xml
Disallow:`;  //may use this while pages are not in use
             //keep in mind getPathsObject is getting everything in pages folder

fs.writeFileSync("public/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj)
    .filter(path => path !== "/_document" && path !== "/_app")  //do not create entries for these
    .map(
      path => `<url>
    ${
      path === "/index"  //checks for this because /index is not actually our home route, its just /
        ? `<loc>https://rainierelixiers.com</loc>`
        : `<loc>https://rainierelixirs.com${path}</loc>`
    }
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
    )}
</urlset>`;

fs.writeFileSync("public/sitemap_local.xml", sitemapXml);
console.log("sitemap_local.xml saved!");
