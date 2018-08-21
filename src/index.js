/**
 * 组件注入的地方
 */
import Hello from 'packages/hello'
import Input from 'packages/input'

const install = function(Vue) {
  if (install.installed) return

  Vue.component(Hello.name, Hello)
  Vue.component(Input.name, Input)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Hello,
  Input
}
