/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',          // <-- this replaces `next export`
  images: { unoptimized: true },
  trailingSlash: true,
};
