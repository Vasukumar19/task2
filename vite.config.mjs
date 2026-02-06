// vite.config.mjs
import { defineConfig } from 'vite'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default defineConfig({
  plugins: [
    vituum(),           // ← adds multi-page support
    nunjucks({
      // optional: add any custom Nunjucks options here
      // e.g. filters, extensions, etc.
    })
  ],

  server: {
    open: '/index.html'   // auto-open home page
  }
})