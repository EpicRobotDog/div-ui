import Vue from 'vue'
import App from './App.vue'
import divUi from '../src/package/index'
Vue.use(divUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
