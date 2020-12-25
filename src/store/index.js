import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
	},
	getters: {
		isLogin(state) {
			return state.username !== ''; // 빈 문자열이 아니여야지 로그인이 된거이기 때문에
		}
	},
	mutations: {
		setUsername(state, userName) {
			state.username = userName;
		},
		clearUsername(state) {
			state.username = '';
		}
	}
})