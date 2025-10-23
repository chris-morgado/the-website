/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',               // write static site to ./out
	images: { unoptimized: true },  // needed for static export if you use next/image
	trailingSlash: true,            // optional, but helpful for S3/CF directory-style paths
};
export default nextConfig;
