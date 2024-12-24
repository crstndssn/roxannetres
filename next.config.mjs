import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Desactiva la caché
    config.cache = false;

    // Configuración para archivos de audio con 'file-loader'
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/, // Tipos de archivos de audio
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
        },
      },
    });

    // Configuración adicional para archivos .mp3 con 'asset/resource'
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource',
    });

    return config;
  },

});

export default nextConfig;
