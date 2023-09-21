declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { ComponentCustomProperties } from 'vue'
import type Dashboard_ENUMS from './router/dashboardEnums'
import { VueI18n } from 'vue-i18n'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: VueI18n['t']
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $Routes: typeof Routes
    $Dashboard_ENUMS: typeof Dashboard_ENUMS
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $t: VueI18n['t']
    $i18n: VueI18n
  }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
