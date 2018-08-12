var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
		publicPath: '/public/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query:
				{
					presets: ['env']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};