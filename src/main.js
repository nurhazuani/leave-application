import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from '@/plugins/vuetify'
// import './registerServiceWorker'
import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import LoadScript from 'vue-plugin-load-script';
 
// Vue.use(LoadScript);

// Vue.loadScript("assets/js/bootstrap.min.js")

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
