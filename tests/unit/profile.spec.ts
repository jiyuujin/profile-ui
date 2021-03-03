import Vue from 'vue'

// @vue/test-utils
import {
  createLocalVue,
  mount,
  MountOptions,
  VueClass,
  Wrapper
} from '@vue/test-utils'

// @testing-library/vue
import { render, fireEvent, cleanup } from '@testing-library/vue'

import Child from '@/components/Profile.vue'

const localVue = createLocalVue()

afterEach(cleanup)

const componentName: string = 'Button'

const propsData = {
  image: 'Test',
  name: 'Test',
  description: 'Test'
}

/**
 * 指定のVueコンポーネントをラップする
 * @param VueComponent Vueコンポーネント
 * @param options オプション
 * @constructor
 */
const wrapVueComponent = (
  VueComponent: VueClass<Vue>,
  options: Object
): Wrapper<Vue> => {
  // プラグインを使ってテストを書ける
  const localVue: typeof Vue = createLocalVue()

  // 子コンポーネントの影響を受けずにテストを書ける
  return mount(
    VueComponent,
    Object.assign(localVue, options) as MountOptions<Vue>
  ) as Wrapper<Vue>
}

const wrapper = wrapVueComponent(Child, {
  localVue,
  propsData: propsData
})

describe(componentName, () => {
  it(`${componentName} vue instance`, () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
