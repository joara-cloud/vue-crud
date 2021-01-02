<template>
	<div class="contents">
		<h2 class="page-header">Edit Post</h2>
		<div class="form-wrapper">
			<form action="" class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">title: </label>
					<input id="title" type="text" v-model="title">
				</div>
				<div>
					<label for="contents">contents: </label>
					<textarea name="" id="contents" cols="30" rows="5" v-model="contents" v-bind:class="{b_red: isContentsValid}"></textarea>
					<p class="validation-text warning" v-if="isContentsValid">Contents length must be less then 200.</p>
				</div>
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">{{logMessage}}</p>
		</div>
	</div>
</template>

<script>
import {fetchPost, editPosts} from '../../api/posts.js'

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: ''
		}
	},
	computed: {
		isContentsValid() {
			return this.contents.length > 250;
		}
	},
	methods: {
		async submitForm() {
			const id = this.$route.params.id;
			try {
				await editPosts(id, {
					title: this.title,
					contents: this.contents
				});
				this.$router.push('/');
			}catch(error) {
				this.logMessage = error;
			}

		}
	},
	async created() {
		const id = this.$route.params.id;
		const {data} = await fetchPost(id);
		this.title = data.title;
		this.contents = data.contents;
	}
}
</script>

<style scoped>
.form-wrapper .form {width:100%}
.form-wrapper .form .btn {color:#fff}
</style>