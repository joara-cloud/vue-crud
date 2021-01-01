import axios from 'axios';
import {setInterceptors} from './common/interceptors.js';

// 액시오스 초기화
function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL
	});
}

// 액시오스 초기화 : headers에 auth포함
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`
	});
	return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');