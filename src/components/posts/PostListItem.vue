<template>
	<li>
		<div class="post-title">{{postItem.title}}</div>
		<div class="post-contents">{{postItem.contents}}</div>
		<div class="post-time">
			{{postItem.createdAt | formatDate}} <!-- postItem.createdAt라는 데이터의 값을 formatData함수로 넘겨서 값을 가져옴 -->
			<i class="icon ion-md-create" @click="routeEditItem"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import {deletePost} from '../../api/posts.js'

export default {
	props: {
		postItem: {
			type: Object,
			required: true	
		}
	},
	// filters: {  // 지역filters를 없애고 전역으로 변경함 (main.js에 들어있음)
	// 	formatDate(value) {
	// 		return new Date(value);
	// 	}
	// },
	methods: {
		async deleteItem() {
			if(window.confirm('Do you want to delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
		routeEditItem() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		}
	}
}
</script>