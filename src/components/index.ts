import { PluginObject } from 'vue' // eslint-disable-line no-unused-vars

import { profileComponents } from './profile'

export const ProfileUI: PluginObject<any> = {
  /**
   * インストール対象のコンポーネント
   * @param Vue Vueインスタンス
   * @param options コンポーネントオプション
   */
  install(Vue, options): void {
    // eslint-disable-line no-unused-vars
    const list = [profileComponents]

    for (const cs of list) {
      for (const [name, c] of Object.entries(cs)) {
        Vue.component(name, c)
      }
    }
  }
}
