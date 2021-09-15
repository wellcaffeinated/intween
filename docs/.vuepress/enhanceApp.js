import pageComponents from '@internal/page-components'
import * as InTween from 'intween'
import window from 'global/window'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // https://github.com/vuejs/vuepress/issues/1173
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
  // ...apply enhancements to the app
  Vue.prototype.InTween = InTween

  // https://github.com/vuejs/vuepress/issues/1499
  window.onload = () => {
    requestAnimationFrame(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1))

        if (element) {
          element.scrollIntoView()
        }
      }
    })
  }
}
