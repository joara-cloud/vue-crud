module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	testMatch: [
		'<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)', // 테스트 파일의 대상을 지정
	],
};