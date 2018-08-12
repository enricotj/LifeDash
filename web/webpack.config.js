var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx/,
				loader: 'babel-loader',
				query:
				{
					presets: ['react', 'env']
				}
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};