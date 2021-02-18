<<<<<<< HEAD
//참고 가이드 : https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md
module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		// 'eslint:recommended'
		'naver',
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		// 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
		'linebreak-style': 'off',
		'indent': 'off',
		'object-curly-spacing': 'off',
	}
=======
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // 'eslint:recommended'
		'naver',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
>>>>>>> e31593e9a1d0e07758e63968a3f009c396304c11
}
