/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-up",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
