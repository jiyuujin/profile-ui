import { profileComponents } from './profile'

export default {
  /**
   * インストール対象のコンポーネント
   * @param app Vueインスタンス
   * @param options コンポーネントオプション
   */
  install: (app: any, options: any) => {
    // eslint-disable-line no-unused-vars
    const list = [profileComponents]

    for (const cs of list) {
      for (const [name, c] of Object.entries(cs)) {
        app.component(name, c)
      }
    }
  }
}
