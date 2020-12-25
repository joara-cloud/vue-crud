import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history', // #을 이용해서 
	routes: [
		{
			path:'/',
			redirect: '/login'
		},
		{
			path:'/login',
			component: () => import('../views/Login')
		},
		{
			path:'/signup',
			component: () => import('../views/Signup')
		},
		{
			path: '*',
			component: () => import('../views/NotFoundPage.vue')
		}
	]
});