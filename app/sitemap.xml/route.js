import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.fileconverter.co.in";
  const today = new Date().toISOString();

  const pages = [
    "/",
    "/convert/text-to-pdf",
    "/convert/word-to-pdf",
    "/convert/pdf-to-word",
    "/convert/image-to-pdf",
    "/convert/pdf-to-images",
    "/privacy-policy",
    "/terms",
    "/about",
    "/contact",
  ];

  const urls = pages
    .map(
      (path) => `
        <url>
          <loc>${baseUrl}${path}</loc>
          <changefreq>weekly</changefreq>
          <priority>${path.startsWith("/convert") ? "0.9" : "0.5"}</priority>
          <lastmod>${today}</lastmod>
        </url>
      `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
