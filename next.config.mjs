/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages does not run the default Next.js image optimizer.
    // Keeping images unoptimized keeps <Image> working at the edge; swap to a
    // Cloudflare image loader later if/when real raster art is added.
    unoptimized: true,
  },
};

export default nextConfig;
