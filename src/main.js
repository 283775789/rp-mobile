// 引入样式
import 'mint-ui/lib/style.css'
import './static/css/main.css'

// 引入库及应用配置
import Vue from 'vue'
import MintUI from 'mint-ui'
import './config/regcoms'
import App from './App'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
