/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  webpack: (config, { isServer }) => {
    // Configuración para archivos de audio
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/, // Especifica los tipos de archivos de audio
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
        },
      },
    });

    return config;
  },
});

