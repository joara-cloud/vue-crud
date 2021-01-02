import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history', // #을 이용해서 
	routes: [
		{
			path:'/',
			redirect: '/main'
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
			path:'/main',
			component: () => import('../views/MainPage.vue'),
			meta: {auth: true}
		},
		{
			path:'/add',
			component: () => import('../views/PostAddPage.vue'),
			meta: {auth: true}
		},
		{
			path: '/post/:id',
			component: () => import('../views/PostEditPage.vue'),
			meta: {auth: true}
		},
		{
			path: '*',
			component: () => import('../views/NotFoundPage.vue')
		}
	]
});

router.beforeEach((to, from, next) => {
	if(to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	}
	next();
})

export default router;
