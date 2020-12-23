<template>
	<div>
		<form action="" @submit.prevent="onSubmit">
			<div>
				<label for="">id: </label>
				<input type="text" v-model="userid">
			</div>
			<div>
				<label for="">password: </label>
				<input type="text" v-model="userpassword">
			</div>
			<div>
				<label for="">name: </label>
				<input type="text" v-model="username">
			</div>
			<button type="submit">회원가입</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userid: '',
			userpassword: '',
			username: ''
		}
	},
	methods: {
		onSubmit() {
			console.log(this.userid, this.userpassword, this.username);
		}
	}

}
</script>

<style>

</style>