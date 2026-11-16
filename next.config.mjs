/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages deployment
  output: "export",
  // GitHub Pages serves from a subdirectory — set basePath to the repo name
  // ponytail: dev serves at / so images and the home page work locally
  ...(process.env.NODE_ENV === "production" && { basePath: "/sarcs-iiith.github.io" }),
  trailingSlash: true,
  images: {
    // Static export requires unoptimized images (no server-side processing)
    unoptimized: true,
  },
};

export default nextConfig;
