import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
console.log(process.env.VUE_APP_API_SERVER)
new Vue({
  render: h => h(App)
}).$mount('#app')
