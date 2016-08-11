var HTMLWebpackPlugin = require("html-webpack-plugin");
var config = {
	template: __dirname + "/dev/index.html",
	filename: "index.html",
	inject: "body"
}

module.exports = {
	entry: [
		__dirname + '/dev/index.js'
	],

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},

			//Load bot css and styl styles.
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'}
		]
	},

	output: {
		filename: 'index.js',
		path: __dirname + '/public/'
	},

	plugins: [
		new HTMLWebpackPlugin(config)
	]
}