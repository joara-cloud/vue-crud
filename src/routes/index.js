import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{
			path: '/signup',
			component: Signup
		},
		{
			path: '/login',
			component: Login
		}
	]
})

