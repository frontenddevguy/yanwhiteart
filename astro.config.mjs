// @ts-check
import { defineConfig } from 'astro/config';
import { imagetools } from 'vite-imagetools';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    build: {
      // This is crucial for controlling output
      rollupOptions: {
        output: {
          entryFileNames: 'main.js',       // Keep original name
          chunkFileNames: '[name].[hash].js', // For chunks
          assetFileNames: '[name][extname]'  // For assets
        }
      },
      outDir: 'dist/assets',              // Where Vite puts assets
      assetsDir: ''                      // No extra directory
    },
    resolve: {
      alias: {
        '@bootstrap': '/node_modules/bootstrap/scss',
        '@fonts': '/src/assets/fonts',
      },
    },
    plugins: [imagetools()]
  },

  integrations: [sitemap()],
  site: 'https://yanwhite.art',
});