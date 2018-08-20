/**
 * 组件注入的地方
 */
import Hello from 'packages/hello'

const install = function(Vue) {
  if (install.installed) return

  Vue.component(Hello.name, Hello)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Hello
}
