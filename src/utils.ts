import { addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'

export const setupA11y = () => {
  addDecorator(withA11y)
}
