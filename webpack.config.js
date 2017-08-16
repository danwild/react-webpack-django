var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	context: __dirname,

	entry: './assets/client/src/app.jsx', // entry point of our app.

	output: {
		path: path.resolve('./assets/bundles/'),
		filename: "[name]-[hash].js"
	},

	plugins: [
		new BundleTracker({
			filename: './webpack-stats.json'
		})
	],

	module: {
		rules: [
			{
				test: /\.jsx?$/,  // to transform JSX into JS
				exclude: /node_modules/,
				loader: 'babel-loader',
				query  :{
					presets:['react','es2015']
				}
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader", options: {
						strictMath: true,
						noIeCompat: true
					}
				}]
			}
		]
	},

	resolve: {
		modules: ['node_modules', 'bower_components'],
		extensions: ['.js', '.jsx']
	}
};