import App from './App'
// #ifndef VUE3
import Vue from 'vue'
// main.js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)
Vue.config.productionTip = false
App.mpType = 'app'
import store from './store/index.js'
Vue.prototype.$store = store
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
