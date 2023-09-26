const { resolve } = require('path')

export default {
  server: {
    port: 3000
  },
  base: "./",
  build: {
    target: "es2020",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        custom: resolve(__dirname, 'custom.html'),
        debug: resolve(__dirname, 'debug.html')
      }
    }
  }
}
