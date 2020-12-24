<template>
	<div>
		<form action="" @submit.prevent="submitForm">
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
			<button type="submit">회원가입</button>
		</form>
	</div>
</template>

<script>
import {registerUser} from '../api';

export default {
	data() {
		return {
			username: '', 
			password: '',
			nickname: ''
		}
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username, // 넘기는 데이터의 이름을 맞춰줘야함!!! 
				password: this.password,
				nickname: this.nickname
			}
			const response = await registerUser(userData);
			console.log(response);
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