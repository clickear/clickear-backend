// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from './axios'
import store from './store/index.js'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

Vue.axios = axios
Vue.prototype.axios = axios
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	axios,
	store,
	template: '<App/>',
	components: { App }
})
