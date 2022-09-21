import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.css'),
      name: 'Wikipedia Clean Dark Green',
      fileName: 'wikipedia.user'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'wikipedia.user.css';
          return assetInfo.name;
        },
      }
    },
  },
})