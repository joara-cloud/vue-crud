import Vue from 'vue';
import Vuex from 'vuex';
import {saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie} from '../utils/cookies.js';
import {loginUser} from '../api/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '', // store의 state에 저장되어있는 token값이 유지되어야 하므로 cookies에 저장후 호출 (interceptors의 headers에 날라가는 token값 때문)
		token: getAuthFromCookie() || ''
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
		},
		setToken(state, token) {
			state.token = token;
		}
	},
	actions: {
		async LOGIN({commit}, userData) {
			const {data} = await loginUser(userData);
			console.log(data);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			return data; // async 함수는 무조건 Promise가 리턴이 돼서 안넣어도 되지만 명시적으로 넣어줬음
		}
	}
})