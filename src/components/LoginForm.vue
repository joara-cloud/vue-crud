<template>
	<div class="form-wrapper form-wrapper-sm">
		<form action="" @submit.prevent="submitForm" class="form">
			<div>
				<label for="username">id:</label>
				<input id="username" type="text" v-model="username">
			</div>
			<div>
				<label for="password">pw:</label>
				<input id="password" type="text" v-model="password">
			</div>
			<button type="submit" v-bind:disabled="!isUsernameValid || !password" class="btn">로그인</button>
		</form>
		<p class="log">{{logMessage}}</p>
	</div>
</template>

<script>
import {loginUser} from '../api';
import {validateEmail} from '../utils/validation.js';

export default {
	data() {
		return {
			// form values 
			username: '',
			password: '',
			// log 
			logMessage: ''
		}
	},
	computed: { // data의 변화에 따라서 props, data, store가 됐건 내용을 자동으로 계산해주는 연산식
		isUsernameValid() {
			return validateEmail(this.username);
		}
	},
	methods: {
		async submitForm() {
			try {
				// 비지니스 로직
				const userData = {
					username: this.username,
					password: this.password
				}
				const {data} = await loginUser(userData);
				this.$store.commit('setUsername', data.user.username);
				this.$router.push('/main');
				console.log(data.token);
				// this.logMessage = `${data.user.username}님 환영합니다.`;
			} catch(error) {
				// 에러 핸들링할 코드
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		}
	}
}
</script>

<style>
.btn {
  color: white;
}
</style>