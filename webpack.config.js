const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPligin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.html$/,
				loader: 'raw-loader',
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPligin.loader,
					'css-loader'
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPligin()
	]
}