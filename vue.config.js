const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },

  configureWebpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src/')
  }
}
