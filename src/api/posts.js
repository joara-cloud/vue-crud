/************************************************************************************************
※학습 노트 조작과 관련된 CRUD API 함수 파일
************************************************************************************************/
import {posts} from './index.js'

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return posts.get('/');
}

// 틀정 학습 노트를 조회하는 API
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPosts(postData) {
	return posts.post('/', postData);
}

// 수정
function editPosts(postId, postData) {
	return posts.put(postId, postData);
}

function deletePost(postId) {
	return posts.delete(postId);
}

export {fetchPosts, fetchPost, createPosts, deletePost, editPosts};