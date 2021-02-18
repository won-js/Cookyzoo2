module.exports = {
	publicPath: '',
	devServer: { // API 요청이 있을 때 어디에서 처리할지를 설정함
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},

	// lintOnSave: false,

	// // 배포 파일의 위치를 지정함
	// outputDir: '../backend/public',

	// pluginOptions: {
	// 	i18n: {
	// 		locale: 'en',
	// 		fallbackLocale: 'en',
	// 		localeDir: 'locales',
	// 		enableInSFC: false
	// 	}
	// }
}
