export default function handler(req, res) {
  res.send(`User-agent: *
  Sitemap: https://rainierelixirs.com/sitemap_local.xml
  Disallow:`);
}