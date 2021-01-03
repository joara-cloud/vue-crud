import {shallowMount} from '@vue/test-utils'; // vue cli로 프로젝트를 생성할 때 vue test util이라는 플러그인을 선택했기 때문에 바로 import해서 사용할수있음
import LoginForm from './loginForm.vue';

describe('LoginForm.vue', () => {
	test('ID는 이메일 형식이어야 한다', () => {
		const wrapper = shallowMount(LoginForm);
		const idInput = wrapper.find('#username');
		console.log(idInput.html());
	});
})