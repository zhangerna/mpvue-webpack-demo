import Vue from 'vue'
import App from './AppH5'
import router from './router/index'
import './style/weui.css'

Vue.prototype.platform = "h5";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
