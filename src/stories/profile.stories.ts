import { storiesOf } from '@storybook/vue'

// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Profile from '@/components/Profile.vue'
// @ts-ignore
import image from '../assets/logo.png'

import { setupA11y } from '@/utils'

setupA11y()

// const image = require('../static/logo.png')

storiesOf('Profile', module).add('Normal', () => ({
  components: {
    Profile
  },
  template: `
    <div>
      <div style="display: flex; margin: 2px;">
        <div style="margin: 4px;">
          <profile
            :image="image"
            name="soranchu"
            description="Japanese Aviation Photographer 🇯🇵<br>All my own pics, kindly credit me in any reposts 👍🏼"
          />
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      image: require('../assets/boeing747.jpg')
    }
  }
}))
