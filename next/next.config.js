/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',          // <-- this replaces `next export`
  images: { unoptimized: true } // needed for next/image when exporting
};
