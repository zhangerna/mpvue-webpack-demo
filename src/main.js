import Vue from 'vue'
import App from './App'
import './style/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.platform = "wx";

const app = new Vue(App)
app.$mount()
