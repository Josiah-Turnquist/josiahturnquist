/** @type {import('next').NextConfig} */
const nextConfig = {
  // Full static export: the site deploys as plain files on AWS Amplify's
  // static hosting (see amplify.yml). Every route is prerenderable, so
  // nothing is lost by exporting.
  output: 'export',
  // Folder-per-route (work/church-table/index.html) so Amplify's static
  // serving resolves clean URLs without rewrite rules.
  trailingSlash: true,
  images: {
    // The image optimizer needs a server; exported sites ship originals.
    // All images in public/ are already web-sized.
    unoptimized: true,
  },
};

export default nextConfig;
