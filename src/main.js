import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueNumericInput from 'vue-numeric-input';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueNumericInput)


new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
