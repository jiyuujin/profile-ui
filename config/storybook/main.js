const path = require('path')

module.exports = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../../'),
    })
    return config
  }
}
