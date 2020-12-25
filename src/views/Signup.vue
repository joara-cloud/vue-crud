<template>
	<div>
		<form action="" @click.prevent="onSubmit">
			<div><input type="text" v-model="username" placeholder="name"></div>
			<div><input type="text" v-model="password" placeholder="password"></div>
			<div><input type="text" v-model="nickname" placeholder="nickname"></div>
			<button type="submit">Sign up</button>
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
		onSubmit() {
			const username = {
				username: this.username,
				password: this.password,
				nickname: this.nickname
			}
			registerUser(username);
		}
	}
}
</script>

<style>

</style>