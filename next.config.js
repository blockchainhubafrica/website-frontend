module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  },
  images: {
    domains: ["res.cloudinary.com", "images.lumacdn.com"],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/bdc-2022",
        destination: "/events/bdc-2022",
        permanent: true,
      },
      {
        source: "/peaceland-2026",
        destination: "/events/peaceland-university-2026",
        permanent: true,
      },
      {
        source: "/coalcity-2026",
        destination: "/events/coal-city-university-2026",
        permanent: true,
      },
    ];
  },
};
