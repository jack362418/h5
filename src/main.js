// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css';
import './style/reset.css'

import '@/permission'
import * as api from './api'
Vue.prototype.$http = api

import { DatetimePicker,Tabbar, TabbarItem,Popup} from 'vant';

Vue.use(DatetimePicker).use(Popup).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
