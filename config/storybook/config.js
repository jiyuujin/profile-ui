import { configure, addDecorator } from '@storybook/vue'

const req = require.context('../../src/stories', true, /.stories.ts$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

addDecorator(() => ({
  template: '<story/>'
}))
