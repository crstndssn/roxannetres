const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource', // Manejo de archivos .mp3 como recursos
    });
    return config;
  },
};

export default nextConfig;