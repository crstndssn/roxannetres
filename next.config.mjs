const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false; // Desactiva la caché
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
