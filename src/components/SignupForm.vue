<template>
	<div class="form-wrapper form-wrapper-sm">
		<form action="" @submit.prevent="submitForm" class="form">
			<div>
				<label for="">id: </label>
				<input type="text" v-model="username">
			</div>
			<div>
				<label for="">password: </label>
				<input type="text" v-model="password">
			</div>
			<div>
				<label for="">nickname: </label>
				<input type="text" v-model="nickname">
			</div>
			<button type="submit" :disabled="!isUsernameValid || !password || !nickname" class="btn">회원가입</button>
		</form>
		<p class="log">{{logMessage}}</p>
	</div>
</template> 

<script>
import {registerUser} from '../api/auth.js';
import {validateEmail} from '../utils/validation.js';

export default {
	data() {
		return {
			// form values
			username: '', 
			password: '',
			nickname: '',
			// log 
			logMessage: ''
		}
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		}
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username, // 넘기는 데이터의 이름을 맞춰줘야함!!! 
				password: this.password,
				nickname: this.nickname
			}
			const {data} = await registerUser(userData); // response.data를 {data}로 바로 꺼낼수있음
			console.log(data.username);
			this.logMessage = `${data.username}님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		}
	}

}
</script>

<style>

</style>