import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from '../router/index'
import store from '../store/index'

import VueSocketIO from 'vue-socket.io'


Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
    }
}));



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
