// Module system CommonJS (node.js)
module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		filename: "./main.js"
	},

	module: {
	    rules: [
	      {
	        test: /\.m?js$/,
	        exclude: /(node_modules|bower_components)/,
	        use: {
	          loader: "babel-loader"
	        }
	      },
	    ]
	}
}