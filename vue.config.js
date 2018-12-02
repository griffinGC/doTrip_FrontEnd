module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://13.209.77.95:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
