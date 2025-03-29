/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "campus-buddy.s3.eu-north-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
