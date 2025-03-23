const fs = require("fs");
const path = require("path");

const baseUrl = "https://estimate-up.vercel.app"; // Change to your domain

const routes = [
  "/", "/sign-in", "/sign-up", "/about", "/howitswork", "/terms", "/service",
  "/input_r1", "/input_r2", "/input_r3", "/fp", "/tp", "/delphi", "/round1",
  "/round2", "/round3", "/ques", "/result", "/cocomo", "/function", "/sloc",
  "/estimate", "/cocomo2"
];

// Generate XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>
  `).join("")}
</urlset>`;

// Write to public folder
const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap);

console.log("✅ Sitemap generated at /public/sitemap.xml");
