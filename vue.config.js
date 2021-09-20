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
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'vue-svg-loader'
    })
  },

  chainWebpack: (config) => {
    config.module.rules.delete('svg')
  }
}
