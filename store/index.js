import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin: false,
	},
	mutations: {
		setIsLogin(state, data) {
			state.isLogin = data
		}
	},
	actions: {}
})

export default store
