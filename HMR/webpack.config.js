const path = require('path');
const HTMLWebpactPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtoot() {
	if (IS_DEV) return 'eval';
	if (IS_PROD) return false;
}

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
		alias: {
			'react-dom': IS_DEV ?  '@hot-loader/react-dom' : 'react-dom',
		}
	},
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: [
		path.resolve(__dirname, 'src/index.jsx'),
		'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: "/static/"
	},
	module: {
		rules: [{
			test: /\.[tj]sx?$/,
			use: ['ts-loader']
		}]
	},
	plugins: [
		new HTMLWebpactPlugin({ template: path.resolve(__dirname, 'index.html') })
	],
	devServer: {
		port: 3000,
		open: true,
		hot: IS_DEV
	},
	devtool: setupDevtoot()
};