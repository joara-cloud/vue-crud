import {shallowMount} from '@vue/test-utils'; // vue cli로 프로젝트를 생성할 때 vue test util이라는 플러그인을 선택했기 때문에 바로 import해서 사용할수있음
// import Vue from 'vue';
import LoginForm from './loginForm.vue';

console.log(shallowMount);

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
		// const instance = new Vue(LoginForm).$mount();
		const wrapper = shallowMount(LoginForm); // shallowmount를 사용하면 바로 mount가 됨
		// wrapper.vm => const instance = new Vue(LoginForm).$mount(); 라고 보면 됨
		expect(wrapper.vm.username).toBe('');
	});
})