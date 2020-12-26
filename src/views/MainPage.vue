<template>
	<div>
		<div class="main list-container contents">
			<h2 class="page-header">Today I Learned</h2>
			<ul>
				<PostListItem v-for="postItem in postItems" :key="postItem._id" :postItem="postItem"></PostListItem>
			</ul>
		</div>
	</div>
</template>

<script>
import PostListItem from '../components/posts/PostListItem.vue';
import {fetchPosts} from '../api';

export default {
	components: {
		PostListItem
	},
	data() {
		return {
			postItems: [],
			isLoading: false
		}
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const {data} = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		}
	},
	created() {
		this.fetchData();
	}
}
</script>

<style>

</style>