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
				await this.$store.dispatch('LOGIN', userData); // await 꼭 붙여주기!! 비동기처리 끝나고 router.push로 main을 진입해야하기 때문에!
				this.$router.push('/main');

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