// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Profile from '../components/Profile.vue'
// @ts-ignore
import image from '../assets/logo.png'

import { setupA11y } from '../utils'

setupA11y()

// const image = require('../static/logo.png')

export default {
  title: 'Example/ProfileTest',
  component: Profile,
  argTypes: {
    image: { control: 'string' },
    name: { control: 'string' },
    description: { control: 'string' },
    social: {
      discord: { control: 'string' },
      github: { control: 'string' },
      twitter: { control: 'string' },
      instagram: { control: 'string' }
    }
  }
}

const Template = (args: any) => ({
  components: { Profile },
  setup() {
    return { args }
  },
  template: `
    <div>
      <div style="display: flex; margin: 2px;">
        <div style="margin: 4px;">
          <profile v-bind="args" />
        </div>
      </div>
    </div>
  `
})

export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {
  image: require('../assets/boeing747.jpg'),
  name: 'soranchu',
  description: 'Japanese Aviation Photographer 🇯🇵<br>All my own pics, kindly credit me in any reposts 👍🏼',
  social: {
    discord: 'https://discord.gg/B86cWtfr8U',
    github: 'https://github.com/jiyuujin',
    twitter: 'https://twitter.com/jiyuujinlab',
    instagram: 'https://instagram.com/sarasakoffee'
  }
}
