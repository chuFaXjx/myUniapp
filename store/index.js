import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: "" || uni.getStorageSync('WX_TOKEN_KEY'),
		userInfo: {},
		num: 123
	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		},
		setToken(state, token) {
			state.token = token
		},

	},
	actions: {}
})

export default store
