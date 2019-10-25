import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)


import './static/scss/style.scss'
import './static/css/bootstrap.min.css'
import './static/css/lightgallery.css'
import './static/css/magnific-popup.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
