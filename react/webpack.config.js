const path = require('path');

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		filename: "./build.js",
		path: path.resolve(__dirname, './build'),
		publicPath: '/build'
	},

	devServer: {
	    static: {                               
		    directory: path.join(__dirname, './'),  
		    watch: true
		}
	},

	module: {
	    rules: [
	      {
	        test: /\.js$/,
//	        exclude: /(node_modules|bower_components)/,
	        use: ['babel-loader']
	      },
	    ]
	}
}