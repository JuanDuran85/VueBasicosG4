import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig";

Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);
console.log(process.env.API_KEY);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
