module.exports = {
	devServer: {
		overlay: false // 오류가 콘솔(터미널)에만 띡히고 화면을 가리는 오버레이는 안보임
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/'),
			},
		},
	},
}