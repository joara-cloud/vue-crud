import store from '../../store';

export function setInterceptors(instance) {
	instance.interceptors.request.use(function (config) {
		console.log(config);
		config.headers.Authorization = store.state.token;
		return config;
	}, function (error) {
		return Promise.reject(error);
	});

	instance.interceptors.response.use(function (response) {
		return response;
	}, function (error) {
		return Promise.reject(error);
	});

	return instance;
}