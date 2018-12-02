import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'xeicon'
import axios from 'axios'


Vue.config.productionTip = false

Vue.prototype.$http = Vue.prototype.axios = axios
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import 'xeicon';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
