import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Meta from 'vue-meta'
import VueAnalytics from 'vue-analytics';
import VueAnimate from 'vue-animate-scroll'

Vue.use(Meta)
Vue.use(VueAnimate)

Vue.config.productionTip = false

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app')

//and then use it in main.js
Vue.use(VueAnalytics, {
  id: 'UA-110407982-2',
  router
})