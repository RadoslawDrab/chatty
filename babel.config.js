const config = require('./tsconfig.json')

const { baseUrl, paths } = config.compilerOptions

const getAliases = () => {
	return Object.entries(paths).reduce((aliases, alias) => {
		const key = alias[0].replace('/*', '')
		const value = baseUrl + alias[1][0].replace('*', '')
		return {
			...aliases,
			[key]: value
		}
	}, {})
}

module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: getAliases()
				}
			],
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: '.env',
					blocklist: null,
					allowlist: null,
					safe: false,
					allowUndefined: true,
					verbose: false
				}
			]
		]
	}
}
